import { COLORS } from 'constants/color';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
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
import { KeyboardAwareScrollView, WindowDimensionsEvents } from 'react-native-keyboard-controller';
import { SafeAreaView } from 'react-native-safe-area-context';
import Stater from 'components/plan/stater';
import Core from 'components/plan/core';
import Pro from 'components/plan/pro';
import SummitPlan from 'components/plan/summitplan';
import { Button } from 'components/ui/button';
import FloatSheet from 'components/ui/float-sheet';
import { useState } from 'react';

export default function PlanPrice() {
  const router = useRouter();
  const { height } = useWindowDimensions();
    const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
    const [selected, setSelected] = useState<string | null>(null);

    const handleSelectOption = (option: string) => {
    setSelected(option);
    setBottomSheetVisible(false);
  };

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
                <View style={{ width: '95%', marginTop: 5, marginBottom: 20, gap: 18 }}>
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
                      GET 1 MONTH FREE
                    </Text>
                  </TouchableOpacity>
                  <Button onPress={() => {}} variant="destructive_outline" onPressIn={() => setBottomSheetVisible(true)}>
                    Need More?
                  </Button>
                </View>

                <FloatSheet
                  visible={isBottomSheetVisible}
                  onClose={() => setBottomSheetVisible(false)}
                  title={'Emergen'}
                  options={['A', 'B', 'C', 'D']}
                  onSelect={handleSelectOption}
                />
              </View>
            </KeyboardAwareScrollView>
          </SafeAreaView>
        </LinearGradient>
      </View>
    </>
  );
}
