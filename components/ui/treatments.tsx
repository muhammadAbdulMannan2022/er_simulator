import { View, Text, TouchableOpacity, ScrollView, Animated } from 'react-native';
import React, { useState, useRef } from 'react';
import { SvgProps } from 'react-native-svg';
import { COLORS } from 'constants/color';
import Trauma from '../../assets/svgs/trauma.svg';
import Pulm from '../../assets/svgs/pulm.svg';
import Cardiac from '../../assets/svgs/cardiac.svg';
import Neuro from '../../assets/svgs/neuro.svg';
import Toxi from '../../assets/svgs/toxi.svg';
import Ped from '../../assets/svgs/ped.svg';
import { router, Href } from 'expo-router';

interface TreatmentItem {
  id: string;
  name: string;
  Icon: React.FC<SvgProps>;
  route?: Href;
}

const treatmentList: TreatmentItem[] = [
  { id: 'trauma', name: 'Trauma', Icon: Trauma, route: '/others/caselist' as Href },
  { id: 'pulm', name: 'Pulmonary', Icon: Pulm ,route: '/others/caselist' as Href},
  { id: 'cardiac', name: 'Cardiac', Icon: Cardiac,route: '/others/caselist' as Href },
  { id: 'neuro', name: 'Neurological', Icon: Neuro,route: '/others/caselist' as Href },
  { id: 'toxi', name: 'Toxicology', Icon: Toxi,route: '/others/caselist' as Href },
  { id: 'ped', name: 'Pediatric', Icon: Ped,route: '/others/caselist' as Href },
  { id: 'ex1', name: 'Example', Icon: Toxi,route: '/others/caselist' as Href },
  { id: 'ex2', name: 'Example', Icon: Ped,route: '/others/caselist' as Href },
  { id: 'ex3', name: 'Example', Icon: Toxi,route: '/others/caselist' as Href },
  { id: 'ex4', name: 'Example', Icon: Ped,route: '/others/caselist' as Href },
  { id: 'ex5', name: 'Example', Icon: Toxi,route: '/others/caselist' as Href },
  { id: 'ex6', name: 'Example', Icon: Ped,route: '/others/caselist' as Href },
  { id: 'ex7', name: 'Example', Icon: Toxi,route: '/others/caselist' as Href },
  { id: 'ex8', name: 'Example', Icon: Ped,route: '/others/caselist' as Href },
];

const Treatments = () => {
  const [selectedId, setSelectedId] = useState<string | null>('trauma');
  const [contentHeight, setContentHeight] = useState(1);
  const scrollY = useRef(new Animated.Value(0)).current;

  const containerHeight = 225;

  // Calculate thumb height and position
  const thumbHeight =
    contentHeight > containerHeight ? (containerHeight / contentHeight) * containerHeight : 0;

  const scrollIndicatorPosition = scrollY.interpolate({
    inputRange: [0, Math.max(1, contentHeight - containerHeight)],
    outputRange: [0, containerHeight - thumbHeight],
    extrapolate: 'clamp',
  });

  // Helper to chunk into rows of 2
  const rows: TreatmentItem[][] = [];
  for (let i = 0; i < treatmentList.length; i += 2) {
    rows.push(treatmentList.slice(i, i + 2));
  }

  return (
    <View
      style={{
        borderRadius: 15,
        marginBottom: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4,
        overflow: 'hidden',
        flexDirection: 'row', // Allow scrollbar on the side
      }}>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
          useNativeDriver: false,
        })}
        onContentSizeChange={(_, height) => setContentHeight(height)}
        style={{
          height: containerHeight,
          flex: 1,
        }}
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 25,
          paddingBottom: 5,
        }}>
        {rows.map((row, rowIndex) => (
          <View key={rowIndex} style={{ flexDirection: 'row', gap: 10, marginBottom: 20 }}>
            {row.map((item) => {
              const isSelected = selectedId === item.id;
              const Icon = item.Icon;
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => {
                    setSelectedId(item.id);
                    if (item.route) {
                      router.push(item.route);
                    }
                  }}
                  activeOpacity={0.7}
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 5,
                    backgroundColor: isSelected ? COLORS.deep : '#EDFDFF',
                    borderRadius: 6,
                    borderWidth: 0.5,
                    borderColor: COLORS.deep,
                  }}>
                  <Icon fill={isSelected ? '#fff' : undefined} />
                  <Text
                    className={`py-3 text-center text-xl font-bold ${
                      isSelected ? 'text-white' : 'text-[#40464B]'
                    }`}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </ScrollView>

      {/* Custom Scrollbar */}
      {contentHeight > containerHeight && (
        <View
          style={{
            width: 8,
            backgroundColor: '#E6E8EA', // Track color
            borderRadius: 4,
            marginVertical: 10,
            marginRight: 8,
            height: containerHeight - 20,
            position: 'relative',
          }}>
          <Animated.View
            style={{
              width: 8,
              height: thumbHeight - 20, // Adjust for track padding
              backgroundColor: COLORS.orgbtn, // Orange thumb color
              borderRadius: 4,
              transform: [{ translateY: scrollIndicatorPosition }],
            }}
          />
        </View>
      )}
    </View>
  );
};

export default Treatments;
