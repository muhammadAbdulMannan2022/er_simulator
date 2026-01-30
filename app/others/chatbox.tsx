import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  useWindowDimensions,
  TextInput,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS } from 'constants/color';
import { BlurView } from '@react-native-community/blur';
import { LinearGradient } from 'expo-linear-gradient';
import TV from '../../assets/svgs/tv.svg';
import Med from '../../assets/svgs/med.svg';
import Mic from '../../assets/svgs/mic.svg';
import TLogo from '../../assets/svgs/text.svg';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { Input } from 'components/input';
import { X } from 'lucide-react-native';
import Horizontal from '../../assets/svgs/horizontal.svg';
import Vertical from '../../assets/svgs/vertical.svg';
import Layout from 'components/layout';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import * as ScreenOrientation from 'expo-screen-orientation';
import ResourcesModal from '../../components/ui/resources-modal';

const ChatBox = () => {
  const { height, width } = useWindowDimensions();
  const [isLandscape, setIsLandscape] = useState(width > height);
  const [isMounted, setIsMounted] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [resourcesEmpty, setResourcesEmpty] = useState(false);

  useEffect(() => {
    setIsLandscape(width > height);
  }, [width, height]);

  useEffect(() => {
    // Small delay to ensure layout is settled for native blur module
    const timer = setTimeout(() => setIsMounted(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const toggleToPortrait = async () => {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    setIsLandscape(false);
  };

  const toggleToLandscape = async () => {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
    setIsLandscape(true);
  };

  const renderHeader = () => (
    <SafeAreaView
      edges={['top']}
      style={{
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingTop: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 50,
      }}>
      <TouchableOpacity
        onPress={() => router.push('./case')}
        style={{
          backgroundColor: '#93D6EF',
          borderWidth: 1,
          borderColor: '#00E5FF',
          borderRadius: 40,
          padding: 7,
          alignSelf: 'flex-start',
        }}>
        <X size={30} color={'#fff'} />
      </TouchableOpacity>
      <View
        pointerEvents="none"
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          alignItems: 'center',
          paddingTop: 10,
        }}>
        <Text className="font-roboto font-normal " style={{ fontSize: 26, color: '#026672' }}>
          Simulation
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          gap: 5,
          backgroundColor: '#C2E5FB',
          alignSelf: 'flex-start',
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 50,
          borderWidth: 1,
          borderColor: '#00E5FF',
        }}>
        <TouchableOpacity
          onPress={toggleToPortrait}
          style={[
            {
              alignSelf: 'flex-start',
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderRadius: 20,
              borderWidth: 1,
            },
            !isLandscape
              ? { backgroundColor: '#93D6EF', borderColor: '#93D6EF' }
              : { borderColor: 'transparent' },
          ]}>
          <Vertical />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toggleToLandscape}
          style={[
            {
              alignSelf: 'flex-start',
              paddingHorizontal: 8,
              paddingVertical: 12,
              borderWidth: 1,
              borderRadius: 20,
            },
            isLandscape
              ? { backgroundColor: '#93D6EF', borderColor: '#93D6EF' }
              : { borderColor: 'transparent' },
          ]}>
          <Horizontal />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );

  const renderControls = () => (
    <View style={isLandscape ? styles.landscapePanel : styles.portraitPanel}>
      <LinearGradient
        colors={['transparent', '#06272B']}
        locations={[0.3, 0.6]}
        style={StyleSheet.absoluteFill}
      />

      <View style={styles.blurWrapper}>
        <BlurView blurType="dark" blurAmount={10} style={styles.blurView}>
          <View style={isLandscape ? styles.horiControls : styles.vertControls}>
            {!isLandscape && <TV />}
            <View style={styles.micArea}>
              <LinearGradient
                colors={['#0096A7', '#B92D47']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.micCircle}>
                <Mic />
              </LinearGradient>
              <Text className="mb-2.5 font-roboto text-sm text-[#E39348]">
                Tap To Speak With AI
              </Text>

              <TouchableOpacity
                onPress={() => router.push('/others/chatwithtext')}
                style={styles.textBtn}>
                <TLogo />
                <Text className="font-roboto text-[16px] text-[#fff]">Text Input</Text>
              </TouchableOpacity>
            </View>
            {!isLandscape && (
              <TouchableOpacity onPress={() => setShowResources(true)}>
                <Med />
              </TouchableOpacity>
            )}
          </View>
        </BlurView>
      </View>
    </View>
  );

  if (!isMounted) {
    return (
      <View style={{ flex: 1, backgroundColor: '#06272B', justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={COLORS.button} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#06272B' }}>
      <ImageBackground source={require('../../assets/images/hospital.jpg')} style={{ flex: 1 }}>
        {renderHeader()}
        <View style={[{ flex: 1 }, isLandscape && { flexDirection: 'row' }]}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={{ flex: 1, justifyContent: 'flex-end', padding: 20, gap: 5 }}>
              <View style={{ alignItems: 'flex-start' }}>
                <Text
                  className="font-roboto text-sm text-[#fff]"
                  style={{
                    backgroundColor: '#43788F',
                    paddingVertical: 8,
                    paddingHorizontal: 15,
                    borderWidth: 1,
                    borderColor: '#E26C39',
                    maxWidth: '80%',
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    borderBottomRightRadius: 15,
                  }}>
                  Hello, this is Swadhin, your Medical Simulation Assistant. I’m here to help
                  support your training by providing realistic, interactive simulations that improve
                  clinical.
                </Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text
                  className="font-roboto text-sm text-[#fff]"
                  style={{
                    backgroundColor: '#43788F',
                    paddingVertical: 8,
                    paddingHorizontal: 15,
                    borderWidth: 1,
                    borderColor: '#E26C39',
                    maxWidth: '80%',
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    borderBottomLeftRadius: 15,
                  }}>
                  Ok, I will assist you.
                </Text>
              </View>
            </View>
          </ScrollView>

          {isLandscape && <View style={{ width: 300, height: '100%' }}>{renderControls()}</View>}
        </View>
        {!isLandscape && renderControls()}
      </ImageBackground>
      <ResourcesModal
        visible={showResources}
        onClose={() => setShowResources(false)}
        isEmpty={resourcesEmpty}
      />
      {/* Hidden toggle for testing: long press at bottom */}
      <TouchableOpacity 
        style={{ position: 'absolute', bottom: 0, width: '100%', height: 20, opacity: 0 }} 
        onLongPress={() => setResourcesEmpty(!resourcesEmpty)} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  portraitPanel: {
    height: 175,
    width: '100%',
  },
  landscapePanel: {
    width: '100%',
    height: '100%',
  },
  blurWrapper: {
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: 'hidden',
  },
  blurView: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  vertControls: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  horiControls: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  micArea: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  micCircle: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 10,
    borderColor: '#13505B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth: 1,
    borderColor: '#fff',
    paddingHorizontal: 35,
    borderRadius: 20,
    paddingVertical: 3,
  },
});

export default ChatBox;
