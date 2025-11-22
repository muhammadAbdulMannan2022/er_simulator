import Layout from 'components/layout';
import { COLORS } from 'constants/color';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import {
  X,
  CreditCard,
  Bell,
  Globe,
  CircleQuestionMark,
  Headset,
  TriangleAlert,
  EarthLock,
  LogOut,
} from 'lucide-react-native';
import Suggession from '../../../assets/svgs/suggestion.svg';
import Upload from '../../../assets/svgs/upload.svg';
import Question from '../../../assets/svgs/question.svg';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();
  return (
    <Layout>
      <View style={{ justifyContent: 'center', alignItems: 'center', height: 35, marginTop: 20 }}>
        <Text className="font-roboto font-semibold " style={{ fontSize: 26 }}>
          My Profile
        </Text>
        {/* <View style={{ position: 'absolute', top: 0, left: 20 }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#82A4A5',
              borderWidth: 1,
              borderColor: COLORS.deep,
              borderRadius: 40,
              padding: 3,
            }}>
            <X size={35} color={'#fff'} />
          </TouchableOpacity>
        </View> */}
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
          gap: 50,
          backgroundColor: '#DAE8E8',
          paddingVertical: 15,
        }}>
        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
          <View>
            <Image
              source={require('../../../assets/images/avatar.jpg')}
              style={{
                height: 80,
                width: 80,
                borderRadius: 40,
                borderColor: COLORS.deep,
                borderWidth: 1,
              }}
            />
          </View>
          <View>
            <Text className="font-roboto font-bold " style={{ fontSize: 24, color: COLORS.deep }}>
              Selena Gomez
            </Text>
            <Text className="font-roboto font-normal " style={{ fontSize: 14, color: '#40464B' }}>
              User Specialist
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => router.push('/profile/editprofile')}
          style={{
            backgroundColor: '#527F7B',
            paddingHorizontal: 20,
            paddingVertical: 12,
            borderRadius: 8,
          }}>
          <Text className="font-roboto font-medium " style={{ fontSize: 14, color: '#ffffff' }}>
            Edit Profile
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: '92%', marginHorizontal: 'auto' }}>
        <View style={{ marginTop: 40, marginBottom: 20 }}>
          <Text
            className="font-roboto font-semibold "
            style={{ fontSize: 24, color: '#163A53', marginBottom: 15 }}>
            Career Overview
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 20 }}>
            <View
              style={{
                backgroundColor: '#527F7B',
                flex: 1,
                paddingVertical: 20,
                gap: 12,
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.4,
                shadowRadius: 3,
                elevation: 4,
              }}>
              <Text
                className="font-roboto text-center font-semibold"
                style={{ fontSize: 32, color: '#fff' }}>
                24
              </Text>
              <Text
                className="font-roboto text-center font-normal"
                style={{ fontSize: 16, color: '#fff' }}>
                Taken{'\n'}Cases
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#C6C6C6',
                flex: 1,
                paddingVertical: 20,
                gap: 12,
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.4,
                shadowRadius: 3,
                elevation: 4,
              }}>
              <Text
                className="font-roboto text-center font-semibold"
                style={{ fontSize: 32, color: '#40464B' }}>
                4
              </Text>
              <Text
                className="font-roboto text-center font-normal"
                style={{ fontSize: 16, color: '#40464B' }}>
                Favorite{'\n'}Cases
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#319151',
                flex: 1,
                paddingVertical: 20,
                gap: 12,
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.4,
                shadowRadius: 3,
                elevation: 4,
              }}>
              <Text
                className="font-roboto text-center font-semibold"
                style={{ fontSize: 32, color: '#fff' }}>
                89%
              </Text>
              <Text
                className="font-roboto text-center font-normal"
                style={{ fontSize: 16, color: '#fff' }}>
                Average{'\n'}Score
              </Text>
            </View>
          </View>
        </View>
        <View style={{ gap: 15, marginBottom: 40, marginTop: 30 }}>
          <TouchableOpacity
            onPress={() => router.push('/profile/improvementsugg')}
            style={{
              flexDirection: 'row',
              backgroundColor: '#346C6C',
              padding: 20,
              borderRadius: 10,
              gap: 10,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 3,
              elevation: 4,
            }}>
            <Suggession />
            <Text className="font-roboto font-medium " style={{ fontSize: 20, color: '#fff' }}>
              Suggested Improvements
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              backgroundColor: '#12B0C2',
              padding: 20,
              borderRadius: 10,
              gap: 10,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 3,
              elevation: 4,
            }}>
            <Upload />
            <Text className="font-roboto font-medium " style={{ fontSize: 20, color: '#fff' }}>
              Upload Simulations
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push('/profile/quiz')}
            style={{
              flexDirection: 'row',
              backgroundColor: '#E39348',
              padding: 20,
              borderRadius: 10,
              gap: 10,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 3,
              elevation: 4,
            }}>
            <Question />
            <Text className="font-roboto font-medium" style={{ fontSize: 20, color: '#fff' }}>
              My CME QUIZ
            </Text>
            <View
              style={{
                backgroundColor: '#D20000',
                paddingHorizontal: 15,
                paddingVertical: 4,
                borderRadius: 20,
                marginLeft: 'auto',
              }}>
              <Text className="font-roboto font-normal" style={{ fontSize: 16, color: '#fff' }}>
                4/5
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 40 }}>
          <Text
            className="font-roboto font-semibold "
            style={{ fontSize: 24, color: '#163A53', marginBottom: 15 }}>
            Settings
          </Text>
          <View style={{ gap: 20, marginTop: 10 }}>
            <TouchableOpacity
              onPress={() => router.push('/profile/subscription')}
              style={{
                flexDirection: 'row',
                backgroundColor: '#fff',
                paddingHorizontal: 20,
                paddingVertical: 17,
                borderRadius: 10,
                gap: 10,
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
                elevation: 4,
              }}>
              <CreditCard color={'#163A53'} size={20} />
              <Text className="font-roboto font-normal" style={{ fontSize: 20, color: '#163A53' }}>
                My Subscription
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                backgroundColor: '#fff',
                paddingHorizontal: 20,
                paddingVertical: 17,
                borderRadius: 10,
                gap: 10,
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
                elevation: 4,
              }}>
              <Bell color={'#163A53'} size={20} />
              <Text className="font-roboto font-normal" style={{ fontSize: 20, color: '#163A53' }}>
                Notifications
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                backgroundColor: '#fff',
                paddingHorizontal: 20,
                paddingVertical: 17,
                borderRadius: 10,
                gap: 10,
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
                elevation: 4,
              }}>
              <Globe color={'#163A53'} size={20} />
              <Text className="font-roboto font-normal" style={{ fontSize: 20, color: '#163A53' }}>
                Language
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push('/profile/savedcertificates')}
              style={{
                flexDirection: 'row',
                backgroundColor: '#fff',
                paddingHorizontal: 20,
                paddingVertical: 17,
                borderRadius: 10,
                gap: 10,
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
                elevation: 4,
              }}>
              <CircleQuestionMark color={'#163A53'} size={20} />
              <Text className="font-roboto font-normal" style={{ fontSize: 20, color: '#163A53' }}>
                My CME Certificates
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push('/profile/support')}
              style={{
                flexDirection: 'row',
                backgroundColor: '#fff',
                paddingHorizontal: 20,
                paddingVertical: 17,
                borderRadius: 10,
                gap: 10,
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
                elevation: 4,
              }}>
              <Headset color={'#163A53'} size={20} />
              <Text className="font-roboto font-normal" style={{ fontSize: 20, color: '#163A53' }}>
                Help & Support
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                backgroundColor: '#fff',
                paddingHorizontal: 20,
                paddingVertical: 17,
                borderRadius: 10,
                gap: 10,
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
                elevation: 4,
              }}>
              <EarthLock color={'#163A53'} size={20} />
              <Text className="font-roboto font-normal" style={{ fontSize: 20, color: '#163A53' }}>
                Privacy Policy
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                backgroundColor: '#fff',
                paddingHorizontal: 20,
                paddingVertical: 17,
                borderRadius: 10,
                gap: 10,
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
                elevation: 4,
              }}>
              <TriangleAlert color={'#163A53'} size={20} />
              <Text className="font-roboto font-normal" style={{ fontSize: 20, color: '#163A53' }}>
                Terms & Conditions
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginBottom: 60, flex: 1 }}>
          <TouchableOpacity
            style={{
              width: '100%',
              flexDirection: 'row',
              backgroundColor: '#EDFDFF',
              paddingHorizontal: 20,
              paddingVertical: 17,
              borderRadius: 10,
              gap: 10,
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 3,
              elevation: 4,
            }}>
            <LogOut color={'#40464B'} size={20} />
            <Text className="font-roboto font-medium" style={{ fontSize: 20, color: '#40464B' }}>
              Log Out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
}
