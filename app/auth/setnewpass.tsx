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
} from 'react-native';
import Google from '../../assets/svgs/google.svg';
import Apple from '../../assets/svgs/apple.svg';
import { KeyboardAwareScrollView, WindowDimensionsEvents } from 'react-native-keyboard-controller';

export default function SetNewPassword() {
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
            style={{ flex: 1 }}
            contentContainerStyle={{
              flexGrow: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {/* Center logo */}
            <View className="w-full flex-col items-center justify-center gap-3 px-6 py-5">
              <View className="flex w-full items-center justify-center py-5">
                <ImageBackground
                  source={require('../../assets/images/splash-icon-full.png')}
                  className="h-20 w-36"
                  resizeMode="contain"
                />
              </View>

              <Text className="text-3xl font-semibold text-[#fff]">Create new password</Text>
              <Text className="text-grayText mb-2 w-[80%] text-center text-xl font-normal">
                Your new password must be unique from those previously used.
              </Text>

              <View className="flex h-auto w-full flex-col gap-4">
                <InputForm
                  title={'password'}
                  label={'Password'}
                  placeHolder={'Enter your password'}
                  control={dummyForm.control}
                  errors={{}}
                  icon={'Lock'}
                  password
                />
                <InputForm
                  title={'comfirmPassword'}
                  label={'Confirm Password'}
                  placeHolder={'Confirm password'}
                  control={dummyForm.control}
                  errors={{}}
                  icon={'Lock'}
                  password
                />
              </View>

              <View style={{ width: '100%', marginTop: 25 }}>
                <TouchableOpacity
                  onPress={() => {
                    router.push('/auth/resetsuccessful');
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
                    Send
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </LinearGradient>
      </View>
    </>
  );
}
