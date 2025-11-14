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
        <View style={{ marginVertical: 20 }}>
          <Text className="font-roboto text-3xl font-semibold">List of Cases</Text>
          <View>
            {totalCase.map((item, index) => (
              <TouchableOpacity
                onPress={() => handleSeletedCases(item.id)}
                key={index}
                style={{
                  marginTop: 20,
                  flexDirection: 'row',
                  gap: 15,
                  alignItems: 'center',
                  backgroundColor: item.selected ? COLORS.deep : '#EFEFEF',
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  borderRadius: 15,

                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.2,
                  shadowRadius: 3,
                  elevation: 4,
                }}>
                <View style={{}}>
                  <Text
                    className="font-roboto text-xl font-bold text-white"
                    style={{
                      backgroundColor: COLORS.deep,
                      paddingHorizontal: 10.5,
                      paddingVertical: 10,
                      borderRadius: 8,
                    }}>
                    {item.id}
                  </Text>
                </View>
                <View style={{ width: '80%' }}>
                  <Text
                    className="font-roboto text-xl font-normal "
                    style={{ color: item.selected ? '#fff' : '#163A53' }}>
                    {item.case}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <View style={{ marginTop: 40 }}>
            <TouchableOpacity
              onPress={() => router.push('./case')}
              style={{
                flex: 1,
                backgroundColor: COLORS.orgbtn,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: COLORS.orgbtn,
              }}>
              <Text className="py-3 text-center text-xl font-bold text-white ">Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default CaseList;
