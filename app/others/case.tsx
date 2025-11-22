import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Layout from 'components/layout';
import { COLORS } from 'constants/color';
import { ChevronLeft, CircleCheckBig, LockKeyhole } from 'lucide-react-native';
import { cases } from 'utils/dumydata';
import { useRouter } from 'expo-router';
import Frame from '../../assets/svgs/frame.svg';
import { BlurView } from 'expo-blur';

const Case = () => {
  const [totalCase, setTotalCase] = useState(cases);
  const router = useRouter();

  const handleSeletedCases = (id) => {
    setTotalCase((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selected: true } : { ...item, selected: false }
      )
    );
  };

  return (
    <Layout>
      <View style={{ flex: 1, width: '90%', marginHorizontal: 'auto', marginTop: 20 }}>
        <View
          style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => router.push('./caselist')}
            style={{
              backgroundColor: '#82A4A5',
              borderWidth: 1,
              borderColor: COLORS.deep,
              borderRadius: 40,
              padding: 3,
            }}>
            <ChevronLeft size={35} color={'#fff'} />
          </TouchableOpacity>
          <View>
            <Image
              source={require('../../assets/images/avatar.jpg')}
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
        <View style={{ flex: 1, marginVertical: 20 }}>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              backgroundColor: COLORS.deep,
              alignItems: 'center',
              paddingVertical: 50,
              borderRadius: 10,
            }}>
            <Frame />
          </View>
          <View style={{ flexDirection: 'row', marginVertical: 30, gap: 20 }}>
            <Text className="font-roboto rounded-lg border border-[#2EA485] px-3.5 py-2 font-medium text-[#2EA485]">
              Beginner
            </Text>
            <Text className="font-roboto rounded-lg border border-[#E8564C] px-3.5 py-2 font-medium text-[#E8564C]">
              Cardiac
            </Text>
          </View>

          <View>
            <Text
              className="font-roboto w-[90%] text-3xl font-semibold"
              style={{ color: COLORS.deep }}>
              Acute MyocardialInfarction with Cardiogenic Shock
            </Text>
            <Text
              className="font-roboto w-[90%] font-light text-[#646668]"
              style={{ fontSize: 15, marginTop: 10, lineHeight: 20 }}>
              A 58-year-old male presents to the ED with severe chest pain, diaphoresis, and
              hypotension. Practice your approach to STEMI management and cardiogenic shock
              stabilization.
            </Text>
          </View>
          <View>
            <Text
              className="font-roboto w-[90%] text-2xl font-semibold"
              style={{ color: COLORS.deep, marginTop: 30 }}>
              Learning Objectives:
            </Text>
            <View style={{ paddingTop: 20 }}>
              <BlurView
                intensity={30}
                tint="dark"
                style={{
                  borderRadius: 10,
                  padding: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  gap: 10,
                  borderWidth: 1,
                  overflow: 'hidden',
                  borderColor: '#40464B',
                }}>
                {/* "Normal" text */}
                <Text style={{ color: '#40464B', fontSize: 18 }}>
                  Complete the simulation to Unlock
                </Text>
                <LockKeyhole color={'#527F7B'} />
              </BlurView>
            </View>
            <View style={{ paddingTop: 20 }}>
              <BlurView
                intensity={30}
                tint="dark"
                style={{
                  borderRadius: 10,
                  padding: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  gap: 10,
                  borderWidth: 1,
                  overflow: 'hidden',
                  borderColor: '#40464B',
                }}>
                {/* "Normal" text */}
                <Text style={{ color: '#40464B', fontSize: 18 }}>
                  Complete the simulation to Unlock
                </Text>
                <LockKeyhole color={'#527F7B'} />
              </BlurView>
            </View>
            <View style={{ paddingTop: 20 }}>
              <BlurView
                intensity={30}
                tint="dark"
                style={{
                  borderRadius: 10,
                  padding: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  gap: 10,
                  borderWidth: 1,
                  overflow: 'hidden',
                  borderColor: '#40464B',
                }}>
                {/* "Normal" text */}
                <Text style={{ color: '#40464B', fontSize: 18 }}>
                  Complete the simulation to Unlock
                </Text>
                <LockKeyhole color={'#527F7B'} />
              </BlurView>
            </View>
          </View>

          <View style={{ marginTop: 40 }}>
            <TouchableOpacity
              onPress={() => router.push('./chatbox')}
              style={{
                flex: 1,
                backgroundColor: COLORS.orgbtn,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: COLORS.orgbtn,
              }}>
              <Text className="py-3 text-center text-xl font-bold text-white ">Start Case</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default Case;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
