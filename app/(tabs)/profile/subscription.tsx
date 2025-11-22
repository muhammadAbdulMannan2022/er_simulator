import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Layout from 'components/layout';
import { COLORS } from 'constants/color';
import { CircleCheckBig, X } from 'lucide-react-native';
import { router } from 'expo-router';

const Subscription = () => {
  return (
    <Layout>
      <View style={{ justifyContent: 'center', alignItems: 'center', height: 35, marginTop: 20 }}>
        <Text className="font-roboto font-semibold " style={{ fontSize: 26 }}>
          My Subscription
        </Text>
        <View style={{ position: 'absolute', top: 0, left: 20 }}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={{
              backgroundColor: '#82A4A5',
              borderWidth: 1,
              borderColor: COLORS.deep,
              borderRadius: 40,
              padding: 3,
            }}>
            <X size={35} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1, width: '92%', marginHorizontal: 'auto', marginTop: 30 }}>
        <Text
          className="font-roboto font-semibold "
          style={{ fontSize: 24, color: '#163A53', marginBottom: 15 }}>
          Currents Status
        </Text>
        <View
          style={{
            backgroundColor: COLORS.deep,
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
                backgroundColor: '#527F7B',
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 10,
                marginBottom: 15,
              }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                  <Text className="font-roboto mb-2 text-[22px] font-medium text-white">
                    Free Trial
                  </Text>
                  <Text className="font-roboto mb-2 text-[16px] font-normal text-[#DDDDDD]">
                    Using The Basic Features
                  </Text>
                </View>
                <View style={{ justifyContent: 'center' }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#E26C39',
                      paddingHorizontal: 10,
                      paddingVertical: 12,
                      borderRadius: 8,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text className="font-roboto border-white text-[16px] font-normal text-[#fff]">
                      Upgrade Plan
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex-row items-end">
                <Text className="font-roboto mb-2 text-[26px] font-bold text-[#fff]">Free</Text>
                <Text className="font-roboto mb-2 text-[16px] font-normal text-[#fff]">
                  {' '}
                  / 16 Days
                </Text>
              </View>
            </View>
            <View className="pl-5">
              <View className="mb-3 flex-row items-center gap-2">
                <CircleCheckBig color={'#E26C39'} size={20} />
                <Text className="font-roboto  text-[14px] font-normal text-white">
                  Up to 5 Simulation
                </Text>
              </View>
              <View className="mb-3 flex-row items-center gap-2">
                <CircleCheckBig color={'#E26C39'} size={20} />
                <Text className="font-roboto  text-[14px] font-normal text-white">
                  AI Voice Interactions
                </Text>
              </View>
              <View className="mb-3 flex-row items-center gap-2">
                <CircleCheckBig color={'#E26C39'} size={20} />
                <Text className="font-roboto  text-[14px] font-normal text-white">
                  Basic Feedback
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default Subscription;
