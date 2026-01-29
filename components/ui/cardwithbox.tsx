import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { COLORS } from 'constants/color';
import { getGradientColorAt } from 'utils/gradientcolor';

const gradientStops = [
  { stop: 0, color: '#152CAF' },
  { stop: 0.18, color: '#0D2780' },
  { stop: 0.41, color: '#133A75' },
  { stop: 0.68, color: '#377FA9' },
  { stop: 0.95, color: '#2FA4B3' },
  { stop: 1, color: '#2EABB5' },
];

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
        <View style={{}}>
          <Text
            className="font-roboto  text-sm font-normal"
            style={{
              backgroundColor: '#30E50C',
              paddingVertical: 1,
              paddingHorizontal: 6,
              borderRadius: 10,
            }}>
            Case
          </Text>
        </View>
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
