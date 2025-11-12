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
  StyleSheet,
} from 'react-native';
import Google from '../../assets/svgs/google.svg';
import Apple from '../../assets/svgs/apple.svg';
import { KeyboardAwareScrollView, WindowDimensionsEvents } from 'react-native-keyboard-controller';
import { OtpInput } from 'react-native-otp-entry';
import { useState } from 'react';

export default function OTPVerify() {
  const router = useRouter();

  const { height } = useWindowDimensions();

  const dummyForm = useForm();
  const [verify, setVerify] = useState(false);

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

              <Text className="text-3xl font-semibold text-[#fff]">OTP Verification</Text>
              <Text className="text-grayText mb-2 w-[80%] text-center text-xl font-normal">
                Enter the verification code we just sent on your email address.
              </Text>

              <View className="  ">
                <OtpInput
                  numberOfDigits={4}
                  autoFocus={false}
                  focusStickBlinkingDuration={500}
                  type="numeric"
                  onTextChange={(text) => console.log(text)}
                  onFilled={(text) => {
                    console.log(`OTP is ${text}`);
                    setVerify(true);
                  }}
                  theme={{
                    pinCodeContainerStyle: styles.pinCodeContainer,
                    pinCodeTextStyle: styles.pinCodeText,
                    focusStickStyle: styles.focusStick,
                    containerStyle: styles.container,
                    filledPinCodeContainerStyle: styles.filledPinCodeContainer,
                    focusedPinCodeContainerStyle: styles.activePinCodeContainer,
                  }}
                />
              </View>

              <View style={{ width: '100%', marginTop: 25 }}>
                <TouchableOpacity
                  onPress={() => {
                    if (verify === true) {
                      router.push('/auth/setnewpass');
                    }
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

              <View style={{ flexDirection: 'row', marginTop: 25 }}>
                <Text className="font-roboto text-grayText text-lg font-medium">
                  Didn't Receive Code?{' '}
                </Text>
                <TouchableOpacity>
                  <Text className="font-roboto text-lg font-bold text-primary">Resend</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </LinearGradient>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  pinCodeContainer: {
    borderColor: COLORS.inputBorder,
    width: 60,
    height: 60,
    borderWidth: 2,
    backgroundColor: COLORS.inputBackgroung,
  },
  pinCodeText: {
    color: COLORS.button,
    fontWeight: '600',
  },
  focusStick: {
    backgroundColor: COLORS.button,
  },
  filledPinCodeContainer: {
    borderColor: COLORS.button,
  },
  activePinCodeContainer: {
    borderColor: COLORS.button,
  },
});
