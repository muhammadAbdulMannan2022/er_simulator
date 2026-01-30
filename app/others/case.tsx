import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Layout from 'components/layout';
import { COLORS } from 'constants/color';
import { ChevronLeft, CircleCheckBig, LockKeyhole } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import Frame from '../../assets/svgs/frame.svg';
import { BlurView } from '@react-native-community/blur';
import Beginner from 'assets/svgs/beginner.svg';
import Cardiac from 'assets/svgs/cardiac-border.svg';
import { useEffect, useState } from 'react';

const Case = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Small delay to ensure layout is settled for native blur module
    const timer = setTimeout(() => setIsMounted(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <View style={{ flex: 1, width: '90%', alignSelf: 'center', marginTop: 10 }}>
        <View
          style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => router.push('./caselist')}
            style={{
              backgroundColor: '#82A4A5',
              borderWidth: 1,
              borderColor: COLORS.deep,
              borderRadius: 40,
              padding: 5,
            }}>
            <ChevronLeft size={30} color={'#fff'} />
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
            <View>
              <Beginner />
              <Text style={{ color: COLORS.bglight, position: 'absolute', left: 25, top: 8 }}>
                Beginner
              </Text>
            </View>
            <View>
              <Cardiac />
              <Text style={{ color: 'red', position: 'absolute', left: 25, top: 8 }}>Cardiac</Text>
            </View>
          </View>

          <View>
            <Text className="w-[90%] font-roboto text-3xl font-bold" style={{ color: COLORS.deep }}>
              Acute MyocardialInfarction with Cardiogenic Shock
            </Text>
            <Text
              className="w-[90%] font-roboto font-normal text-[#40464B]"
              style={{ fontSize: 16, marginTop: 12, lineHeight: 24 }}>
              A 58-year-old male presents to the ED with severe chest pain, diaphoresis, and
              hypotension. Practice your approach to STEMI management and cardiogenic shock
              stabilization.
            </Text>
          </View>
          <View>
            <Text
              className="w-[90%] font-roboto text-2xl font-bold"
              style={{ color: COLORS.deep, marginTop: 30 }}>
              Learning Objectives:
            </Text>
            <View style={{ gap: 20, marginTop: 20 }}>
              {isMounted &&
                [
                  'Rapidly recognize STEMI patterns on 12-lead ECG and initiate protocol.',
                  'Implement immediate pharmacological interventions including Aspirin and Heparin.',
                  'Coordinate emergency transfer and stabilization for primary PCI.',
                ].map((objective, index) => (
                  <View key={index} style={styles.objectiveWrapper}>
                    {/* The actual content (hidden under blur) */}
                    <View style={styles.objectiveContent}>
                      <CircleCheckBig color={COLORS.deep} size={20} />
                      <Text style={styles.objectiveText}>{objective}</Text>
                    </View>

                    {/* Blur Overlay */}
                    <BlurView
                      blurType="light"
                      blurAmount={1}
                      reducedTransparencyFallbackColor="white"
                      style={[StyleSheet.absoluteFill, { borderRadius: 12 }]}
                    />

                    {/* Lock Overlay Content */}
                    <View style={styles.lockOverlay}>
                      <LockKeyhole color="#527F7B" size={20} />
                      <Text style={styles.lockText}>Complete the simulation to Unlock</Text>
                    </View>
                  </View>
                ))}
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
  wrapper: {
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#40464B',
  },
  card: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: '#F2F4F6', // subtle base
  },
  text: {
    color: '#9AA3A7',
    fontSize: 16,
    fontWeight: '500',
  },
  objectiveWrapper: {
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E0E7E7',
    backgroundColor: '#fff',
    minHeight: 80,
    justifyContent: 'center',
  },
  objectiveContent: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  objectiveText: {
    flex: 1,
    fontSize: 16,
    color: '#40464B',
    fontWeight: '400',
    lineHeight: 22,
  },
  lockOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingHorizontal: 20,
  },
  lockText: {
    color: '#527F7B',
    fontSize: 15,
    fontWeight: '600',
  },
});
