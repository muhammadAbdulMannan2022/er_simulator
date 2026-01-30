import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Layout from 'components/layout';
import { COLORS } from 'constants/color';
import { ChevronLeft } from 'lucide-react-native';
import { cases } from 'utils/dumydata';
import { useRouter } from 'expo-router';

const CaseList = () => {
  const [totalCase, setTotalCase] = useState(cases);
  const router = useRouter();

  const handleSeletedCases = (id: string | number) => {
    setTotalCase((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selected: true } : { ...item, selected: false }
      )
    );
  };

  return (
    <Layout>
      <View style={{ flex: 1, width: '90%', alignSelf: 'center', marginTop: 10 }}>
        <View
          style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => router.replace('../(tabs)/home')}
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

        <View style={{ marginVertical: 20 }}>
          <Text className="font-roboto text-3xl font-semibold" style={{ color: COLORS.deep }}>
            List of Cases
          </Text>
          <View style={{ marginTop: 10 }}>
            {totalCase.map((item, index) => (
              <TouchableOpacity
                onPress={() => handleSeletedCases(item.id)}
                key={index}
                activeOpacity={0.8}
                style={{
                  marginTop: 15,
                  flexDirection: 'row',
                  gap: 15,
                  alignItems: 'center',
                  backgroundColor: item.selected ? COLORS.deep : '#fff',
                  paddingHorizontal: 15,
                  paddingVertical: 12,
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: item.selected ? COLORS.deep : '#E0E7E7',
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 4,
                  elevation: 3,
                }}>
                <View>
                  <Text
                    className="font-roboto text-lg font-bold"
                    style={{
                      backgroundColor: item.selected ? '#fff' : COLORS.deep,
                      color: item.selected ? COLORS.deep : '#fff',
                      paddingHorizontal: 12,
                      paddingVertical: 8,
                      borderRadius: 8,
                      minWidth: 40,
                      textAlign: 'center',
                    }}>
                    {item.id}
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    className="font-roboto text-lg font-medium"
                    style={{ color: item.selected ? '#fff' : '#40464B' }}>
                    {item.case}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          <View style={{ marginTop: 30, marginBottom: 20 }}>
            <TouchableOpacity
              onPress={() => router.push('./case')}
              style={{
                backgroundColor: COLORS.orgbtn,
                borderRadius: 10,
                paddingVertical: 15,
                shadowColor: COLORS.orgbtn,
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 5,
                elevation: 6,
              }}>
              <Text className="text-center text-xl font-bold text-white">Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default CaseList;
