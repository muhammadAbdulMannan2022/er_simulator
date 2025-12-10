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
} from 'react-native';
import React from 'react';
import { COLORS } from 'constants/color';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import TV from '../../assets/svgs/tv.svg';
import Med from '../../assets/svgs/med.svg';
import Mic from '../../assets/svgs/mic.svg';
import Send from '../../assets/svgs/send.svg';
import TLogo from '../../assets/svgs/text.svg';
// import { KeyboardAvoidingView, KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { Input } from 'components/input';
import { X } from 'lucide-react-native';
import Horizontal from '../../assets/svgs/horizontal.svg';
import Vertical from '../../assets/svgs/vertical.svg';
import Layout from 'components/layout';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const ChatWithText = () => {
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
        <SafeAreaView
          style={{
            flexDirection: 'row',
            paddingHorizontal: 20,
            paddingTop: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
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
              bottom: '50%',
              transform: [{ translateY: '-50%' }],
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
            <View
              style={{
                backgroundColor: '#93D6EF',
                alignSelf: 'flex-start',
                paddingHorizontal: 12,
                paddingVertical: 8,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: '#93D6EF',
              }}>
              <Vertical />
            </View>
            <View
              style={{
                alignSelf: 'flex-start',
                paddingHorizontal: 8,
                paddingVertical: 12,
                borderWidth: 1,
                borderRadius: 20,
                borderColor: '#93D6EF',
              }}>
              <Horizontal />
            </View>
          </View>
        </SafeAreaView>
        <View style={{ width: '90%', alignSelf: 'center', marginTop: -10 }}>
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
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
            }}>
            <TouchableOpacity onPress={() => router.push('/others/chatbox')}>
              <Mic height={20} width={12} />
            </TouchableOpacity>
            <TextInput
              style={{
                flex: 1,

                // backgroundColor: '#EFEFEF',
                // borderRadius: 8,
                paddingHorizontal: 12,
                paddingVertical: 15,

                fontSize: 16,
              }}
              placeholder="Type Your Message"
              placeholderTextColor="#FFFFFF"
            />
            <Send />
          </View>
        </KeyboardAvoidingView>
        <View style={{ justifyContent: 'flex-end' }}>
          <LinearGradient
            colors={['transparent', '#06272B']}
            locations={[0.3, 0.6]}
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              height: 70,
            }}
          />
          <View
            style={{
              width: '100%',
              height: 100,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              overflow: 'hidden',
            }}>
            <BlurView
              intensity={50}
              tint="dark"
              style={{
                width: '100%',
                height: 100,
                justifyContent: 'center',
                paddingHorizontal: 20,
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  paddingHorizontal: 20,
                  paddingTop: 20,
                }}>
                <View>
                  <TV />
                </View>
                <View>
                  <Med />
                </View>
              </View>
              {/* <View
                style={{
                  paddingHorizontal: 20,
                  gap: 5,
                  borderWidth: 1,
                  marginBottom: 40,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: '#0A4E57',
                  borderColor: '#0A4E57',
                  borderRadius: 50,
                  marginHorizontal: 10,
                }}>
                <Mic height={20} width={12} />
                <TextInput
                  style={{
                    flex: 1,

                    // backgroundColor: '#EFEFEF',
                    // borderRadius: 8,
                    paddingHorizontal: 12,
                    paddingVertical: 15,

                    fontSize: 16,
                  }}
                  placeholder="Type Your Message"
                  placeholderTextColor="#FFFFFF"
                />
                <Send />
              </View> */}
            </BlurView>
          </View>
        </View>

        {/* </KeyboardAwareScrollView> */}
      </ImageBackground>
    </View>
  );
};

export default ChatWithText;
