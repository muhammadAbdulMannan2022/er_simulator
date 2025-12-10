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
import Stater from 'components/plan/stater';
import Core from 'components/plan/core';
import Pro from 'components/plan/pro';
import SummitPlan from 'components/plan/summitplan';

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
                <Text className="mb-2 w-[80%] text-center text-xl font-normal text-grayText">
                  Start learning with flexible options
                </Text>

                <View
                  style={{
                    flex: 1,
                    width: '100%',
                    alignItems: 'center',
                  }}>
                  <Stater />
                  <Core />
                  <Pro />
                  <SummitPlan />
                </View>
                <View style={{ width: '95%', marginTop: 5, marginBottom: 20 }}>
                  <TouchableOpacity
                    onPress={() => {
                      router.push('/(tabs)/home');
                    }}
                    style={{
                      borderWidth: 1,
                      borderColor: COLORS.button,
                      backgroundColor: COLORS.button,
                      borderRadius: 10,
                    }}>
                    <Text
                      className="text-center font-roboto text-[20px] font-bold text-white"
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
