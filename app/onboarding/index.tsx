import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PagerView from 'react-native-pager-view';
import Svg, { Circle, Path } from 'react-native-svg';
import Logo from '../../assets/svgs/onboardingLogo.svg';

const ONBOARDING_DATA = [
  {
    title: 'AI-Powered Simulations',
    description: 'Practice emergency medicine with realistic, voice-driven AI patient scenarios that evolve based on your decisions',
  },
  {
    title: 'Earn CME Credits',
    description: 'Complete simulations, take quizzes, and earn verified CME certificates to advance your medical education',
  },
  {
    title: 'Track Your Progress',
    description: 'Monitor your performance, review past simulations, and see your improvement over time',
  },
];

export default function Onboarding() {
  const router = useRouter();
  const pagerRef = useRef<PagerView>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    if (currentPage < ONBOARDING_DATA.length - 1) {
      pagerRef.current?.setPage(currentPage + 1);
    } else {
      router.replace('/auth/login');
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <LinearGradient
        colors={['#101112', '#000000']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0 }}
      />
      
      <Image
        source={require('../../assets/images/splash-top-left-image.png')}
        style={{ position: 'absolute', left: 0, top: 0, width: 190, height: 190, opacity: 0.6 }}
        resizeMode="cover"
      />

      <Image
        source={require('../../assets/images/splash-bottom-righ-image.png')}
        style={{ position: 'absolute', bottom: 0, right: 0, width: 190, height: 190, opacity: 0.6 }}
        resizeMode="cover"
      />

      <ImageBackground
        source={require('../../assets/images/splash-radial-gradient.png')}
        style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0 }}
        resizeMode="cover"
      />

      <View style={{ flex: 1 }}>
        <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 64, paddingBottom: 20 }}>
          <Logo />
        </View>

        <PagerView
          ref={pagerRef}
          style={{ flex: 1 }}
          initialPage={0}
          onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}
        >
          {ONBOARDING_DATA.map((item, index) => (
            <View key={index} style={{ flex: 1, paddingHorizontal: 24, justifyContent: 'center' }}>
              <Text style={{ fontSize: 30, fontWeight: '600', color: '#DFDFDF', marginBottom: 12 }}>
                {item.title}
              </Text>
              <Text style={{ fontSize: 18, fontWeight: '400', color: '#8E8E93', lineHeight: 28 }}>
                {item.description}
              </Text>
              {/* Spacer so text is positioned like the original */}
              <View style={{ height: 100 }} />
            </View>
          ))}
        </PagerView>

        {/* Indicators and Button */}
        <View style={{ paddingHorizontal: 24, paddingBottom: 64, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {ONBOARDING_DATA.map((_, index) => (
              <View
                key={index}
                style={{
                  height: 12,
                  width: 12,
                  borderRadius: 2,
                  borderWidth: 1,
                  borderColor: '#E0DEDE',
                  backgroundColor: currentPage === index ? '#E0DEDE' : 'transparent',
                  marginRight: 8
                }}
              />
            ))}
          </View>
        </View>

        <TouchableOpacity
          onPress={handleNext}
          style={{ position: 'absolute', right: -1, bottom: 150 }}
        >
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
    </View>
  );
}
