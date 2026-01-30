import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Layout from 'components/layout';
import { COLORS } from 'constants/color';
import { ChevronLeft, CircleCheckBig, LockKeyhole } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import Frame from '../../assets/svgs/frame.svg';
import { BlurView } from 'expo-blur';
import Beginner from 'assets/svgs/beginner.svg';
import Cardiac from 'assets/svgs/cardiac-border.svg';

const Case = () => {
  const router = useRouter();

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
            <Text
              className="w-[90%] font-roboto text-3xl font-semibold"
              style={{ color: COLORS.deep }}>
              Acute MyocardialInfarction with Cardiogenic Shock
            </Text>
            <Text
              className="w-[90%] font-roboto font-light text-[#646668]"
              style={{ fontSize: 15, marginTop: 10, lineHeight: 20 }}>
              A 58-year-old male presents to the ED with severe chest pain, diaphoresis, and
              hypotension. Practice your approach to STEMI management and cardiogenic shock
              stabilization.
            </Text>
          </View>
          <View>
            <Text
              className="w-[90%] font-roboto text-2xl font-semibold"
              style={{ color: COLORS.deep, marginTop: 30 }}>
              Learning Objectives:
            </Text>
            <View style={{ paddingTop: 20 }}>
              <View style={styles.wrapper}>
                <View style={styles.card}>
                  <LockKeyhole color="#527F7B" />
                  <Text style={styles.text}>Complete the simulation to Unlock</Text>
                </View>

                <BlurView intensity={10} tint="light" style={StyleSheet.absoluteFill} />
                <View
                  style={[
                    styles.card,
                    { position: 'absolute', backgroundColor: 'transparent', marginLeft: 20 },
                  ]}>
                  <Text style={styles.text}>Complete the simulation to Unlock</Text>
                  <LockKeyhole color="#527F7B" />
                </View>
              </View>
            </View>
            <View style={{ paddingTop: 20 }}>
              <View style={styles.wrapper}>
                <View style={styles.card}>
                  <LockKeyhole color="#527F7B" />
                  <Text style={styles.text}>Complete the simulation to Unlock</Text>
                </View>

                <BlurView intensity={10} tint="light" style={StyleSheet.absoluteFill} />
                <View
                  style={[
                    styles.card,
                    { position: 'absolute', backgroundColor: 'transparent', marginLeft: 20 },
                  ]}>
                  <Text style={styles.text}>Complete the simulation to Unlock</Text>
                  <LockKeyhole color="#527F7B" />
                </View>
              </View>
            </View>
            <View style={{ paddingTop: 20 }}>
              <View style={styles.wrapper}>
                <View style={styles.card}>
                  <LockKeyhole color="#527F7B" />
                  <Text style={styles.text}>Complete the simulation to Unlock</Text>
                </View>

                <BlurView intensity={10} tint="light" style={StyleSheet.absoluteFill} />
                <View
                  style={[
                    styles.card,
                    { position: 'absolute', backgroundColor: 'transparent', marginLeft: 20 },
                  ]}>
                  <Text style={styles.text}>Complete the simulation to Unlock</Text>
                  <LockKeyhole color="#527F7B" />
                </View>
              </View>
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
});
