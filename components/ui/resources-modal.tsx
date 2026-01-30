import React, { useState, useRef } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  ScrollView,
  Animated,
} from 'react-native';
import { COLORS } from 'constants/color';

interface Props {
  visible: boolean;
  onClose: () => void;
  isEmpty?: boolean;
}

const ResourcesModal = ({ visible, onClose, isEmpty = false }: Props) => {
  const [contentHeight, setContentHeight] = useState(1);
  const [containerHeight, setContainerHeight] = useState(1);
  const scrollY = useRef(new Animated.Value(0)).current;

  // Standard scrollbar formula:
  // thumbHeight / trackHeight = containerHeight / contentHeight
  const trackHeight = containerHeight;
  const thumbHeight = 
    contentHeight > containerHeight 
      ? Math.max(30, (containerHeight / contentHeight) * trackHeight) 
      : 0;

  const scrollIndicatorPosition = scrollY.interpolate({
    inputRange: [0, Math.max(1, contentHeight - containerHeight)],
    outputRange: [0, trackHeight - thumbHeight],
    extrapolate: 'clamp',
  });

  return (
    <Modal transparent visible={visible} animationType="fade">
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={styles.card}>
          <Text style={styles.title}>Available Resources</Text>

          {isEmpty ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>
                Order Results Appear Here Only After Requested And If Available
              </Text>
            </View>
          ) : (
            <View style={styles.contentWrapper}>
              <View
                style={styles.scrollContainer}
                onLayout={(e) => setContainerHeight(e.nativeEvent.layout.height)}>
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  onContentSizeChange={(_, h) => setContentHeight(h)}
                  onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
                    useNativeDriver: false,
                  })}
                  scrollEventThrottle={16}>
                  <View style={styles.grid}>
                    <TouchableOpacity style={[styles.gridItem, styles.activeItem]}>
                      <Text style={styles.activeLabel}>EKG</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gridItem}>
                      <Text style={styles.label}>Chest X-Ray</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gridItem}>
                      <Text style={styles.label}>Head CT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gridItem}>
                      <Text style={styles.label}>Labs Tests</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gridItem}>
                      <Text style={styles.label}>Ultrasound</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gridItem}>
                      <Text style={styles.label}>MRI</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gridItem}>
                      <Text style={styles.label}>Blood Work</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gridItem}>
                      <Text style={styles.label}>Urine Test</Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </View>

              {/* Custom scrollbar indicator on the right */}
              {contentHeight > containerHeight && (
                <View style={[styles.scrollbarContainer, { height: trackHeight }]}>
                  <View style={styles.scrollbarTrack}>
                    <Animated.View
                      style={[
                        styles.scrollbarThumb,
                        {
                          height: thumbHeight,
                          transform: [{ translateY: scrollIndicatorPosition }],
                        },
                      ]}
                    />
                  </View>
                </View>
              )}
            </View>
          )}
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default ResourcesModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    backgroundColor: '#F7F9FA',
    borderRadius: 30,
    padding: 25,
    maxHeight: '70%',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#346C6C',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Roboto',
  },
  emptyContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#40464B',
    textAlign: 'center',
    lineHeight: 24,
  },
  contentWrapper: {
    flexDirection: 'row',
    width: '100%',
  },
  scrollContainer: {
    flex: 1,
    height: 180, // Target height for the scroll area
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    paddingBottom: 10,
  },
  gridItem: {
    width: '47%',
    height: 60,
    backgroundColor: '#E6E8EA',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeItem: {
    backgroundColor: '#346C6C',
  },
  label: {
    fontSize: 15,
    fontWeight: '700',
    color: '#40464B',
  },
  activeLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: '#fff',
  },
  scrollbarContainer: {
    width: 10,
    marginLeft: 10,
  },
  scrollbarTrack: {
    width: 6,
    height: '100%',
    backgroundColor: '#D9E2E2',
    borderRadius: 10,
    overflow: 'hidden',
  },
  scrollbarThumb: {
    width: 6,
    backgroundColor: '#E26C39',
    borderRadius: 10,
  },
});
