import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Image, View } from 'react-native';

export default function App() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/onboarding');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <View className="h-full w-full flex-1">
        <LinearGradient
          colors={['#101112', '#000000']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="absolute inset-0 items-center justify-center">
          {/* Top-left hex background */}
          <Image
            source={require('../../assets/images/splash-top-left-image.png')}
            className="absolute left-0 top-0 h-[190px] w-[190px] opacity-40"
            resizeMode="cover"
          />

          {/* Bottom-right hex pattern */}
          <Image
            source={require('../../assets/images/splash-bottom-righ-image.png')}
            className="absolute bottom-0 right-0 h-[190px] w-[190px] opacity-40"
            resizeMode="cover"
          />

          {/* Radial gradient overlay */}
          <Image
            source={require('../../assets/images/splash-radial-gradient.png')}
            className="absolute left-0 top-0 h-full w-full"
            resizeMode="cover"
          />

          {/* Center logo */}
          <View className="h-full w-full items-center justify-center">
            <Image
              source={require('../../assets/images/splash-icon-full.png')}
              className="h-96 w-96"
              resizeMode="contain"
            />
          </View>
        </LinearGradient>
      </View>
    </>
  );
}
