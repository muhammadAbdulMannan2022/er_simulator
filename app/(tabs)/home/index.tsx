import Layout from 'components/layout';
import { Text, View, Image, Pressable, TouchableOpacity, TouchableHighlight } from 'react-native';
import Heartbit from '../../../assets/svgs/heartbit.svg';
import { Heart } from 'lucide-react-native';
import InputBox from 'components/ui/inputbox';
import { useForm } from 'react-hook-form';
import { COLORS } from 'constants/color';
import { LinearGradient } from 'expo-linear-gradient';
import Point from '../../../assets/svgs/point.svg';
import { getGradientColorAt } from 'utils/gradientcolor';
import CardWithBar from 'components/ui/cardwithbar';
import Trauma from '../../../assets/svgs/trauma.svg';
import Treatments from 'components/ui/treatments';
import CardWithBox from 'components/ui/cardwithbox';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function Index() {
  const dummyForm = useForm();
  const [guest, useGuest] = useState(false);

  const router = useRouter();

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
        <Text className="font-roboto text-xl font-normal text-gray-700 ">
          Countinue your training
        </Text>
        <InputBox
          title={'email'}
          placeHolder={'Search Cases...'}
          control={dummyForm.control}
          errors={{}}
        />

        {guest ? <CardWithBox /> : <CardWithBar />}
        <View style={{ marginTop: 30 }}>
          <Text className="font-roboto  text-3xl font-semibold">Skill Level</Text>

          <View style={{ flexDirection: 'row', gap: 10, marginVertical: 12 }}>
            <View
              style={{
                flex: 1,
                backgroundColor: COLORS.deep,
                borderRadius: 6,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.4,
                shadowRadius: 3,
                elevation: 5,
              }}>
              <Text className="py-3 text-center text-lg font-bold text-white ">Beginner</Text>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: '#CFCFCF',
                borderRadius: 6,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.4,
                shadowRadius: 3,
                elevation: 5,
              }}>
              <Text className="py-3 text-center text-lg font-bold text-[#40464B] ">Try Me</Text>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: '#CFCFCF',
                borderRadius: 6,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.4,
                shadowRadius: 3,
                elevation: 5,
              }}>
              <Text className="py-3 text-center text-lg font-bold text-[#40464B] ">Beast Mode</Text>
            </View>
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
