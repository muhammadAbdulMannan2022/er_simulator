import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { COLORS } from 'constants/color';
import Badge from "assets/svgs/badge.svg"

const CardWithBox = () => {

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.deep, borderRadius: 12 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 15,
          marginHorizontal: 10,
          alignItems: 'center',
        }}>
         <Badge style={{ left: -14, position: "absolute"}} width={60} height={60} />
         <Text style={{ fontSize: 10, fontWeight: 500 }}>Case</Text>
        <Text className="font-roboto text-lg font-semibold text-white">Single Trial</Text>
      </View>
      <View style={{ paddingHorizontal: 12, paddingVertical: 20 }}>
        <Text className="font-roboto text-2xl font-semibold text-white">Enter Case Code</Text>
        <Text className="font-roboto w-[80%] text-lg font-normal text-white">
          Carefully enter the code & Try out a free simulation case
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            paddingTop: 10,
            paddingBottom: 15,
            justifyContent: 'space-between',
          }}>
          <TextInput
            style={{
              width: '67%',
              height: 40,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#fff',
              paddingLeft: 15,
              backgroundColor: '#307678',

              //shadow
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 3 },
              shadowOpacity: 0.3,
              shadowRadius: 3,
              elevation: 5,
            }}
            placeholder="Enter Code"
            placeholderTextColor={'#fff'}
          />
          <TouchableOpacity
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 3 },
              shadowOpacity: 0.5,
              shadowRadius: 5,
              elevation: 5,
            }}>
            <Text
              className="font-roboto text-lg font-semibold text-white"
              style={{
                paddingHorizontal: 30,
                paddingVertical: 5,
                backgroundColor: '#09CF9B',
                borderWidth: 1,
                borderColor: '#09CF9B',
                borderRadius: 8,
              }}>
              Start
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardWithBox;
