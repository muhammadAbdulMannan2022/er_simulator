import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS } from 'constants/color';
import { LinearGradient } from 'expo-linear-gradient';
import Point from '../../assets/svgs/point.svg';
import { getGradientColorAt } from 'utils/gradientcolor';

const gradientStops = [
  { stop: 0, color: '#152CAF' },
  { stop: 0.18, color: '#0D2780' },
  { stop: 0.41, color: '#133A75' },
  { stop: 0.68, color: '#377FA9' },
  { stop: 0.95, color: '#2FA4B3' },
  { stop: 1, color: '#2EABB5' },
];

const CardWithBar = () => {
  const color = getGradientColorAt(0.6, gradientStops);
  console.log(color);

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
            In Progress
          </Text>
        </View>
        <Text className="font-roboto text-lg font-semibold text-white">50% Complete</Text>
      </View>
      <View style={{ paddingHorizontal: 12, paddingVertical: 20 }}>
        <Text className="font-roboto text-2xl font-semibold text-white">
          Acute MI with Cardiogenic Shock
        </Text>
        <Text className="font-roboto text-lg font-normal text-white">
          58-year-old male presenting with chest pain and hypotension...
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            paddingTop: 10,
            paddingBottom: 20,
          }}>
          <View
            style={{
              flex: 1,

              // Shadow for iOS + elevation for Android
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 6,
            }}>
            <LinearGradient
              colors={['#152CAF', '#0D2780', '#133A75', '#377FA9', '#2FA4B3', '#2EABB5']}
              locations={[0, 0.18, 0.41, 0.68, 0.95, 1]}
              style={{
                width: '90%',
                height: 22,
                borderRadius: 10,
                borderWidth: 3,
                borderColor: '#fff',
              }}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            />
            <Point
              style={{
                position: 'absolute',
                top: 19,
                left: 5 + 130,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 3,
                elevation: 5,
              }}
              fill={color}
            />
            <View
              style={{
                position: 'absolute',
                top: 38,
                left: 4 + 118,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0,
                shadowRadius: 4,
                elevation: 5,
              }}>
              <View
                style={{
                  paddingRight: 5,
                  paddingLeft: 10,
                  paddingVertical: 2,
                  borderRadius: 10,
                  backgroundColor: color,
                  borderWidth: 1,
                  borderColor: '#fff',
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: '900',
                    fontSize: 12,
                  }}>
                  55%
                </Text>
              </View>
            </View>
          </View>
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
                paddingHorizontal: 22,
                paddingVertical: 5,
                backgroundColor: COLORS.orgbtn,
                borderWidth: 1,
                borderColor: COLORS.orgbtn,
                borderRadius: 8,
              }}>
              Resume
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardWithBar;
