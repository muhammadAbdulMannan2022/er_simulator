import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  useWindowDimensions,
  TextInput,
} from 'react-native';
import React from 'react';
import { COLORS } from 'constants/color';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import TV from '../../assets/svgs/tv.svg';
import Med from '../../assets/svgs/med.svg';
import Mic from '../../assets/svgs/mic.svg';
import TLogo from '../../assets/svgs/text.svg';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { Input } from 'components/input';

const ChatBox = () => {
  const { height } = useWindowDimensions();
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../../assets/images/hospital.jpg')} style={{ flex: 1 }}>
        {/* <View
          style={{
            height: 10,
            width: '100%',
            backgroundColor: '#06272B',
            justifyContent: 'flex-end',
            position: 'absolute',
            bottom: 0,
          }}
        /> */}
        {/* <KeyboardAwareScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{
            minHeight: height,
            width: '100%',
          }}> */}
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
              Hello, this is Swadhin, your Medical Simulation Assistant. I’m here to help support
              your training by providing realistic, interactive simulations that improve clinical.
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
        <View style={{ justifyContent: 'flex-end' }}>
          <LinearGradient
            colors={['transparent', '#06272B']}
            locations={[0.3, 0.6]}
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              height: 160,
            }}
          />
          <View
            style={{
              width: '100%',
              height: 175,
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
              overflow: 'hidden',
            }}>
            <BlurView
              intensity={50}
              tint="dark"
              style={{
                width: '100%',
                height: 175,
                justifyContent: 'center',
                paddingHorizontal: 20,
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 20,
                  marginBottom: 10,
                }}>
                <View>
                  <TV />
                </View>
                <View style={{ flex: 1, gap: 2, justifyContent: 'center', alignItems: 'center' }}>
                  <LinearGradient
                    colors={['#0096A7', '#B92D47']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: 50,
                      borderWidth: 10,
                      borderColor: '#13505B',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Mic />
                  </LinearGradient>
                  <Text className="font-roboto mb-2.5 text-sm text-[#E39348]">
                    Tap To Speak With AI
                  </Text>

                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 10,
                      borderWidth: 1,
                      borderColor: '#fff',
                      paddingHorizontal: 35,
                      borderRadius: 20,
                      paddingVertical: 3,
                    }}>
                    <TLogo />
                    <Text className="font-roboto  text-[16px] text-[#fff]">Text Input</Text>
                  </TouchableOpacity>
                </View>

                <View>
                  <Med />
                </View>
              </View>
            </BlurView>
          </View>
        </View>
        {/* </KeyboardAwareScrollView> */}
      </ImageBackground>
    </View>
  );
};

export default ChatBox;
