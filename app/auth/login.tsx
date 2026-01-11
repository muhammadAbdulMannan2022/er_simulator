import { Input } from 'components/input';

import InputForm from 'components/ui/inputform';
import { Layout } from 'components/ui/layout';
import { COLORS } from 'constants/color';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Lock, Mail } from 'lucide-react-native';
import { useForm } from 'react-hook-form';
import {
  Image,
  Text,
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  useWindowDimensions,
  Switch,
} from 'react-native';
import Google from '../../assets/svgs/google.svg';
import Apple from '../../assets/svgs/apple.svg';
import { KeyboardAwareScrollView, WindowDimensionsEvents } from 'react-native-keyboard-controller';

export default function Page() {
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

          <KeyboardAwareScrollView
            style={{}}
            contentContainerStyle={{
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: height,
            }}>
            {/* Center logo */}
            <View className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 py-5">
              <View className="flex w-full items-center justify-center py-5">
                <ImageBackground
                  source={require('../../assets/images/splash-icon-full.png')}
                  className="h-20 w-36"
                  resizeMode="contain"
                />
              </View>

              <Text className="text-3xl font-semibold text-[#fff]">Welcome Back</Text>
              <Text className="text-grayText mb-2 text-xl font-normal">
                Sign in to continue your training
              </Text>

              <View className="flex h-auto w-full flex-col gap-4">
                <InputForm
                  title={'email'}
                  label={'Email'}
                  placeHolder={'abc@email.com'}
                  control={dummyForm.control}
                  errors={{}}
                  icon={'Mail'}
                />
                <InputForm
                  title={'password'}
                  label={'Password'}
                  placeHolder={'Enter your password'}
                  control={dummyForm.control}
                  errors={{}}
                  icon={'Lock'}
                />
              </View>
              <View className="w-full flex-row justify-between">
               <View className="flex flex-row items-center gap-2">
               <Switch className="ml-2" />
                <Text className="text-lg font-light text-white ">Remember Me</Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                     router.push('/auth/forgotpass');
                  }}>
                  <Text className="text-lg font-medium text-[#D62E2F] underline">
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ width: '100%', marginTop: 15 }}>
                <TouchableOpacity
                  onPress={() => {
                    router.push('/auth/priceplan');
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
                    Log in
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  marginTop: 30,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 10,
                  width: '100%',
                  justifyContent: 'space-between',
                }}>
                <View style={{ height: 1, backgroundColor: COLORS.button, flex: 1 }} />
                <Text className="font-roboto text-xl font-semibold text-primary ">
                  Or Login with
                </Text>
                <View style={{ height: 1, backgroundColor: COLORS.button, flex: 1 }} />
              </View>
              <View style={{ flexDirection: 'row', gap: 40, marginTop: 20 }}>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor: COLORS.inputBorder,
                    backgroundColor: COLORS.inputBackgroung,
                    padding: 20,
                    borderRadius: 10,
                  }}>
                  <Google width={26} height={26} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor: COLORS.inputBorder,
                    backgroundColor: COLORS.inputBackgroung,
                    padding: 20,
                    borderRadius: 10,
                  }}>
                  <Apple width={26} height={26} />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <Text className="font-roboto text-grayText text-lg font-medium">
                  Don't have an account?{' '}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    router.push('/auth/signup');
                  }}>
                  <Text className="font-roboto text-lg font-bold text-primary">Sign Up</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{ borderWidth: 1, borderColor: '#00E5FF', borderRadius: 10, marginTop: 10 }}>
                <Text className="font-roboto px-[50px] py-[8px] text-lg font-semibold text-[#00E5FF]">
                  Continue As Guest
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </LinearGradient>
      </View>
    </>
  );
}
