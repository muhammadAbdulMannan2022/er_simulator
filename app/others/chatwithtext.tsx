import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  useWindowDimensions,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  StyleSheet,
} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { COLORS } from 'constants/color';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import TV from '../../assets/svgs/tv.svg';
import Med from '../../assets/svgs/med.svg';
import Mic from '../../assets/svgs/mic.svg';
import Send from '../../assets/svgs/send.svg';
import TLogo from '../../assets/svgs/text.svg';
import { X } from 'lucide-react-native';
import Horizontal from '../../assets/svgs/horizontal.svg';
import Vertical from '../../assets/svgs/vertical.svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import * as ScreenOrientation from 'expo-screen-orientation';

const ChatWithText = () => {
  const { height, width } = useWindowDimensions();
  const [isLandscape, setIsLandscape] = useState(width > height);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsLandscape(width > height);
  }, [width, height]);

  useEffect(() => {
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
        onPress={() => router.back()}
        style={{
          backgroundColor: '#93D6EF',
          borderWidth: 1,
          borderColor: '#00E5FF',
          borderRadius: 40,
          padding: 7,
          zIndex: 10,
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
        <Text className="font-roboto font-normal" style={{ fontSize: 24, color: '#026672' }}>
          Simulation
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          gap: 5,
          backgroundColor: '#C2E5FB',
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 50,
          borderWidth: 1,
          borderColor: '#00E5FF',
          zIndex: 10,
        }}>
        <TouchableOpacity
          onPress={toggleToPortrait}
          style={[
            {
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
      {isMounted && (
        <View style={styles.blurWrapper}>
          <BlurView intensity={50} tint="dark" style={styles.blurView}>
            <View style={styles.iconArea}>
              <TV />
              {isLandscape && <View style={{ flex: 1 }} />}
              <Med />
            </View>
          </BlurView>
        </View>
      )}
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#06272B' }}>
      <ImageBackground source={require('../../assets/images/hospital.jpg')} style={{ flex: 1 }}>
        {renderHeader()}
        <View style={[{ flex: 1 }, isLandscape && { flexDirection: 'row' }]}>
          <View style={{ flex: 1 }}>
            <View style={{ width: '90%', alignSelf: 'center', marginTop: 10 }}>
              <LinearGradient
                colors={['#800300', '#FF1B00', '#FF7F00', '#FFC500', '#FFC500', '#62A300']}
                locations={[0, 0.22, 0.42, 0.62, 0.83, 1]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ height: 16, borderRadius: 20, borderWidth: 3, borderColor: '#10818E' }}
              />
              <View
                style={{
                  width: 30,
                  backgroundColor: '#e9e8e8',
                  position: 'absolute',
                  height: 10,
                  margin: 3,
                  borderRadius: 20,
                  left: '60%',
                }}
              />
            </View>

            <KeyboardAvoidingView
              style={{ flex: 1 }}
              behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
              <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
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
                      support your training by providing realistic, interactive simulations that
                      improve clinical.
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
              <View
                style={{
                  paddingHorizontal: 20,
                  gap: 5,
                  borderWidth: 1,
                  marginHorizontal: 20,
                  marginBottom: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: '#43788F',
                  borderColor: '#43788F',
                  borderRadius: 50,
                  zIndex: 20,
                }}>
                <TouchableOpacity onPress={() => router.push('/others/chatbox')}>
                  <Mic height={20} width={12} />
                </TouchableOpacity>
                <TextInput
                  style={{
                    flex: 1,
                    paddingHorizontal: 12,
                    paddingVertical: 15,
                    fontSize: 16,
                    color: '#fff',
                  }}
                  placeholder="Type Your Message"
                  placeholderTextColor="#FFFFFF"
                />
                <Send />
              </View>
            </KeyboardAvoidingView>
          </View>
          {isLandscape && (
            <View style={{ width: 100, height: '100%' }}>
              {renderControls()}
            </View>
          )}
        </View>
        {!isLandscape && renderControls()}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  portraitPanel: {
    height: 100,
    width: '100%',
  },
  landscapePanel: {
    width: '100%',
    height: '100%',
  },
  blurWrapper: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  blurView: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  iconArea: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default ChatWithText;
