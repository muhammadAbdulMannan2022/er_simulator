import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { ChevronRight } from 'lucide-react-native';
import { useEffect } from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import Svg, { Circle, Path } from 'react-native-svg';
import Logo from '../../assets/svgs/onboardingLogo.svg';

export default function Page() {
  const router = useRouter();

  return (
    <>
      <View className="relative  flex-1" style={{ width: '100%', height: '100%' }}>
        <LinearGradient
          colors={['#101112', '#000000']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="absolute inset-0   py-16">
          <Image
            source={require('../../assets/images/splash-top-left-image.png')}
            className="absolute left-0 top-0 h-[190px] w-[190px] "
            resizeMode="cover"
          />

          <Image
            source={require('../../assets/images/splash-bottom-righ-image.png')}
            className="absolute bottom-0 right-0 h-[190px] w-[190px] "
            resizeMode="cover"
          />
          {/* Radial gradient overlay */}
          <ImageBackground
            source={require('../../assets/images/splash-radial-gradient.png')}
            className="border-3 absolute left-0 top-0  h-full w-full "
            resizeMode="cover"
          />

          <View className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 py-5">
            <View className="flex w-full items-center justify-center py-5">
              <Logo />
            </View>
            <Text className="w-full text-start text-3xl font-semibold text-[#DFDFDF]">
              AI-Powered Simulations
            </Text>
            <Text className="text-lg font-normal text-[#8E8E93]">
              Practice emergency medicine with realistic, voice-driven AI patient scenarios that
              evolve based on your decisions
            </Text>

            <View className="flex w-full flex-row items-center justify-between py-16 pl-5">
              <View className="flex flex-row items-center gap-2">
                <View className="h-3 w-3 rounded-sm border border-[#E0DEDE] bg-[#E0DEDE]"></View>
                <View className="h-3 w-3 rounded-sm border border-[#E0DEDE] bg-transparent"></View>
                <View className="h-3 w-3 rounded-sm border border-[#E0DEDE] bg-transparent"></View>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => router.push('/onboarding/page2')}
              className="absolute -right-1 pt-6"
              style={{ bottom: 150 }}>
              <Svg width={73} height={240} viewBox="0 0 73 240" fill="none">
                <Path
                  d="M68.8757 208.087L70.5241 25.0742L70.5202 25.0768L71.1658 22.5854L70.7477 24.9268C70.7477 24.9268 73 -17.8446 73 8.6665C73 61.5083 0 72.0148 0 118.719C0 165.423 73 184.537 73 231.076C73 257.587 70.5241 216.582 70.5241 216.582L68.8757 208.087Z"
                  fill="#10A9B3"
                />
                <Circle
                  cx="37"
                  cy="120"
                  r="21.4"
                  fill="#08868F"
                  stroke="#08868F"
                  strokeOpacity={0.42}
                  strokeWidth={1.2}
                />
                <Path
                  d="M35 115L39.5 119.5L35 124"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </>
  );
}
