import Layout from 'components/layout';
import { Text, View, Image, Pressable, TouchableOpacity, Animated, PanResponder } from 'react-native';
import Heartbit from '../../../assets/svgs/heartbit.svg';
import { Heart } from 'lucide-react-native';
import InputBox from 'components/ui/inputbox';
import { useForm } from 'react-hook-form';
import { COLORS } from 'constants/color';
import CardWithBar from 'components/ui/cardwithbar';
import Treatments from 'components/ui/treatments';
import CardWithBox from 'components/ui/cardwithbox';
import { useState, useRef } from 'react';

export default function Index() {
  const dummyForm = useForm();
  const [guest, useGuest] = useState(false);

  const [isBeastMode, setIsBeastMode] = useState(false);
  const [sliderWidth, setSliderWidth] = useState(0);
  // Initialize pan with value 0
  const pan = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        // Set offset to current value to continue gesture from where it left off
        pan.setOffset(pan._value);
        pan.setValue(0);
      },
      onPanResponderMove: Animated.event([null, { dx: pan }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        pan.flattenOffset();
        // Clamp value between 0 and slider width (minus knob width)
        const maxVal = Math.max(0, sliderWidth - 24);
        if (pan._value < 0) pan.setValue(0);
        else if (pan._value > maxVal) pan.setValue(maxVal);
      },
    })
  ).current;

  return (
    <Layout>
      <View style={{ flex: 1, width: '92%', marginHorizontal: 'auto', marginTop: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text className="font-roboto font-medium" style={{ fontSize: 28 }}>
              Cases
            </Text>
            <Heartbit height={30} width={80} />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <View style={{ backgroundColor: '#F2E0CD', padding: 10, borderRadius: 20 }}>
              <Heart style={{}} color="#E39348" size={20} />
            </View>
            <View>
              <Image
                source={require('../../../assets/images/avatar.jpg')}
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                  borderColor: COLORS.deep,
                  borderWidth: 1,
                }}
              />
            </View>
          </View>
        </View>
        <Text className="font-roboto text-xl font-normal text-gray-700">
          Continue your training
        </Text>
        <InputBox
          title={'email'}
          placeHolder={'Search Cases...'}
          control={dummyForm.control}
          errors={{}}
          padding={16}
        />

        {guest ? <CardWithBox /> : <CardWithBar />}
        <View style={{ marginTop: 30 }}>
          <Text className="font-roboto  text-3xl font-semibold">Skill Level</Text>

          <View style={{ flexDirection: 'row', gap: 10, marginVertical: 12 }}>
            <View
              style={{
                flex: 2.5,
                borderColor: COLORS.deep,
                borderWidth: 1,
                borderRadius: 6,
                paddingHorizontal: 15,
                paddingVertical: 12,
                justifyContent: 'center',
              }}>
              <View
                style={{ height: 30, justifyContent: 'center' }}
                onLayout={(e) => setSliderWidth(e.nativeEvent.layout.width)}>
                <View
                  style={{
                    height: 10,
                    backgroundColor: '#E6E8EA',
                    borderRadius: 5,
                    width: '100%',
                  }}
                />
                <Animated.View
                  {...panResponder.panHandlers}
                  style={{
                    position: 'absolute',
                    left: 0,
                    height: 24,
                    width: 24,
                    borderRadius: 12,
                    backgroundColor: 'white',
                    borderWidth: 2.5,
                    borderColor: COLORS.deep,
                    justifyContent: 'center',
                    alignItems: 'center',
                    transform: [
                      {
                        translateX: pan.interpolate({
                          inputRange: [0, Math.max(1, sliderWidth - 24)],
                          outputRange: [0, Math.max(1, sliderWidth - 24)],
                          extrapolate: 'clamp',
                        }),
                      },
                    ],
                  }}>
                  <View
                    style={{
                      height: 8,
                      width: 8,
                      borderRadius: 4,
                      backgroundColor: COLORS.deep,
                    }}
                  />
                </Animated.View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 2,
                }}>
                <Text
                  style={{
                    color: COLORS.deep,
                    fontWeight: '700',
                    fontSize: 13,
                  }}>
                  Beginner
                </Text>
                <Text
                  style={{
                    color: '#40464B',
                    fontWeight: '700',
                    fontSize: 13,
                  }}>
                  Try Me
                </Text>
              </View>
            </View>

            <Pressable
              onPress={() => setIsBeastMode(!isBeastMode)}
              style={{
                flex: 1,
                backgroundColor: isBeastMode ? COLORS.orgbtn : '#CFCFCF',
                borderRadius: 6,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 5,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.4,
                shadowRadius: 3,
                elevation: 5,
              }}>
              <Text
                className="text-center font-bold"
                style={{ fontSize: 15, color: isBeastMode ? 'white' : '#40464B' }}>
                Beast{'\n'}Mode
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={{ flexDirection: 'row', gap: 15, marginVertical: 20 }}>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: COLORS.orgbtn,
              borderRadius: 6,
              borderWidth: 1,
              borderColor: COLORS.orgbtn,
            }}>
            <Text className="py-3 text-center text-xl font-medium text-white ">Categories</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: COLORS.deep,
              borderRadius: 6,
            }}>
            <Text className="py-3 text-center text-xl font-medium text-[#346C6C] ">
              Suggested Pathways
            </Text>
          </TouchableOpacity>
        </View>

        <Treatments />
      </View>
    </Layout>
  );
}
