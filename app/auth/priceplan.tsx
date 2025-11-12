import { Input } from 'components/input';

import InputForm from 'components/ui/inputform';
import { Layout } from 'components/ui/layout';
import { COLORS } from 'constants/color';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { CircleCheckBig } from 'lucide-react-native';
import { useForm } from 'react-hook-form';
import {
  Image,
  Text,
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  useWindowDimensions,
  StyleSheet,
} from 'react-native';
import Google from '../../assets/svgs/google.svg';
import Apple from '../../assets/svgs/apple.svg';
import { KeyboardAwareScrollView, WindowDimensionsEvents } from 'react-native-keyboard-controller';
import Successful from '../../assets/svgs/successful.svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import Green from '../../assets/svgs/greenbatch.svg';
import Red from '../../assets/svgs/redbatch.svg';

export default function PlanPrice() {
  const router = useRouter();

  const { height } = useWindowDimensions();

  const dummyForm = useForm();

  return (
    <>
      <View className="relative  flex-1" style={{ width: '100%', height: '100%' }}>
        <LinearGradient
          colors={['#101112', '#000000']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="absolute inset-0   py-16">
          {/* Radial gradient overlay */}
          <ImageBackground
            source={require('../../assets/images/splash-radial-gradient.png')}
            className="border-3 absolute left-0 top-0  h-full w-full "
            resizeMode="cover"
          />
          <SafeAreaView>
            <KeyboardAwareScrollView
              style={{}}
              contentContainerStyle={{
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: height,
              }}>
              {/* Price Plan Content */}
              <View className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 py-5">
                <View className="flex w-full items-center justify-center py-5">
                  <ImageBackground
                    source={require('../../assets/images/splash-icon-full.png')}
                    className="h-20 w-36"
                    resizeMode="contain"
                  />
                </View>

                <Text className="text-3xl font-semibold text-[#fff]">Choose Your Plan</Text>
                <Text className="text-grayText mb-2 w-[80%] text-center text-xl font-normal">
                  Start learning with flexible options
                </Text>

                <View
                  style={{
                    flex: 1,
                    width: '100%',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      backgroundColor: '#142629',
                      width: '95%',
                      borderRadius: 10,
                      padding: 15,
                      alignItems: 'center',
                      borderWidth: 1,
                      borderColor: '#579D97',
                      marginBottom: 20,
                    }}>
                    {/* <Text style={styles.text}>Gradient Border ✨</Text> */}
                    <View style={{ flex: 1, width: '100%' }}>
                      <View
                        style={{
                          flex: 1,
                          backgroundColor: COLORS.bgdeep,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                          borderRadius: 10,
                          marginBottom: 15,
                        }}>
                        <Text className="font-roboto mb-2 text-[22px] font-medium text-white">
                          Free Trial
                        </Text>
                        <Text className="font-roboto mb-2 text-[16px] font-normal text-[#C2C2C2]">
                          Try Before You Commit
                        </Text>
                        <View className="flex-row items-end">
                          <Text className="font-roboto mb-2 text-[26px] font-bold text-[#10A9B3]">
                            Free
                          </Text>
                          <Text className="font-roboto mb-2 text-[16px] font-normal text-[#10A9B3]">
                            {' '}
                            / 30 Days
                          </Text>
                        </View>
                      </View>
                      <View className="pl-5">
                        <View className="mb-3 flex-row items-center gap-2">
                          <CircleCheckBig color={'white'} size={20} />
                          <Text className="font-roboto  text-[14px] font-normal text-white">
                            Up to 5 Simulation
                          </Text>
                        </View>
                        <View className="mb-3 flex-row items-center gap-2">
                          <CircleCheckBig color={'white'} size={20} />
                          <Text className="font-roboto  text-[14px] font-normal text-white">
                            AI Voice Interactions
                          </Text>
                        </View>
                        <View className="mb-3 flex-row items-center gap-2">
                          <CircleCheckBig color={'white'} size={20} />
                          <Text className="font-roboto  text-[14px] font-normal text-white">
                            Basic Feedback
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      backgroundColor: COLORS.bglight,
                      width: '95%',
                      borderRadius: 10,
                      padding: 15,
                      alignItems: 'center',
                      borderWidth: 1,
                      borderColor: '#579D97',
                      marginBottom: 20,
                    }}>
                    {/* <Text style={styles.text}>Gradient Border ✨</Text> */}
                    <View style={{ flex: 1, width: '100%' }}>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          backgroundColor: COLORS.bgdeep,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                          borderRadius: 10,
                          marginBottom: 15,
                        }}>
                        <View>
                          <Text className="font-roboto mb-2 text-[22px] font-medium text-white">
                            Monthly Access
                          </Text>
                          <Text className="font-roboto mb-2 text-[16px] font-normal text-[#C2C2C2]">
                            Unlimited simulations
                          </Text>
                          <View className="flex-row items-end">
                            <Text className="font-roboto mb-2 text-[26px] font-bold text-[#10A9B3]">
                              $19.99
                            </Text>
                            <Text className="font-roboto mb-2 text-[16px] font-normal text-[#10A9B3]">
                              {' '}
                              / 30 Days
                            </Text>
                          </View>
                        </View>
                        <View>
                          <Red />
                        </View>
                      </View>
                      <View className="pl-5">
                        <View className="mb-3 flex-row items-center gap-2">
                          <CircleCheckBig color={'white'} size={20} />
                          <Text className="font-roboto  text-[14px] font-normal text-white">
                            Unlimited simulations
                          </Text>
                        </View>
                        <View className="mb-3 flex-row items-center gap-2">
                          <CircleCheckBig color={'white'} size={20} />
                          <Text className="font-roboto  text-[14px] font-normal text-white">
                            All difficulty levels
                          </Text>
                        </View>
                        <View className="mb-3 flex-row items-center gap-2">
                          <CircleCheckBig color={'white'} size={20} />
                          <Text className="font-roboto  text-[14px] font-normal text-white">
                            All difficulty levels
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      backgroundColor: '#142629',
                      width: '95%',
                      borderRadius: 10,
                      padding: 15,
                      alignItems: 'center',
                      borderWidth: 1,
                      borderColor: '#579D97',
                      marginBottom: 20,
                    }}>
                    {/* <Text style={styles.text}>Gradient Border ✨</Text> */}
                    <View style={{ flex: 1, width: '100%' }}>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          backgroundColor: COLORS.bgdeep,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                          borderRadius: 10,
                          marginBottom: 15,
                        }}>
                        <View>
                          <Text className="font-roboto mb-2 text-[22px] font-medium text-white">
                            CME Certified
                          </Text>
                          <Text className="font-roboto mb-2 text-[16px] font-normal text-[#C2C2C2]">
                            Earn CME credits
                          </Text>
                          <View className="flex-row items-end">
                            <Text className="font-roboto mb-2 text-[26px] font-bold text-[#10A9B3]">
                              $499
                            </Text>
                            <Text className="font-roboto mb-2 text-[16px] font-normal text-[#10A9B3]">
                              {' '}
                              / year
                            </Text>
                          </View>
                        </View>
                        <View>
                          <Green />
                        </View>
                      </View>
                      <View className="pl-5">
                        <View className="mb-3 flex-row items-center gap-2">
                          <CircleCheckBig color={'white'} size={20} />
                          <Text className="font-roboto  text-[14px] font-normal text-white">
                            Everything in Monthly
                          </Text>
                        </View>
                        <View className="mb-3 flex-row items-center gap-2">
                          <CircleCheckBig color={'white'} size={20} />
                          <Text className="font-roboto  text-[14px] font-normal text-white">
                            Unlimited CME credits
                          </Text>
                        </View>
                        <View className="mb-3 flex-row items-center gap-2">
                          <CircleCheckBig color={'white'} size={20} />
                          <Text className="font-roboto  text-[14px] font-normal text-white">
                            Official certificates
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{ width: '95%', marginTop: 5, marginBottom: 20 }}>
                  <TouchableOpacity
                    onPress={() => {
                      router.push('/auth/login');
                    }}
                    style={{
                      borderWidth: 1,
                      borderColor: COLORS.button,
                      backgroundColor: COLORS.button,
                      borderRadius: 10,
                    }}>
                    <Text
                      className="font-roboto text-center text-[20px] font-bold text-white"
                      style={{ paddingVertical: 15 }}>
                      Skip for now
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAwareScrollView>
          </SafeAreaView>
        </LinearGradient>
      </View>
    </>
  );
}
