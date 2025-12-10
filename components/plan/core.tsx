import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { CircleCheckBig } from 'lucide-react-native';

const Core = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open ? (
        <View
          style={{
            backgroundColor: '#115D6B',
            width: '95%',
            borderRadius: 10,
            padding: 15,
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#579D97',
            marginBottom: 20,
          }}>
          {/* <Text style={styles.text}>Gradient Border ✨</Text> */}
          <View style={{ flex: 1, width: '100%' }}>
            <View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#0C3B44',
                  paddingHorizontal: 5,
                  paddingVertical: 10,
                  borderRadius: 10,
                  marginBottom: 15,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    width: '60%',
                    gap: 10,
                  }}>
                  <TouchableOpacity
                    onPress={() => setOpen(false)}
                    style={{
                      marginTop: 5,
                      height: 20,
                      width: 20,
                      borderColor: '#0F737F',
                      borderWidth: 2,
                      borderRadius: 20,
                      backgroundColor: 'white',
                    }}
                  />
                  <View style={{}}>
                    <Text className="mb-2 font-roboto text-[20px] font-medium text-white">
                      Core
                    </Text>
                    <Text className="mb-2 font-roboto text-[14px] font-normal text-[#C2C2C2]">
                      Most residents choose this
                    </Text>
                    <Text className="mb-2 font-roboto text-[16px] font-medium text-[#10B346]">
                      15 Sim Experiences/month
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    alignItems: 'flex-end',
                    paddingRight: 5,
                  }}>
                  <Text className="mb-2 font-roboto text-[20px] font-bold text-[#10A9B3]">$39</Text>
                  <Text className="mb-2 font-roboto text-[14px] font-normal text-[#C2C2C2]">
                    User | Month
                  </Text>
                  <View
                    style={{
                      backgroundColor: '#016449',
                      paddingHorizontal: 6,
                      paddingVertical: 4,
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                      borderRadius: 10,
                    }}>
                    <Text className=" font-roboto text-[12px] font-medium text-white">
                      1 Month Free
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View className="pl-5">
              <View className="mb-3 flex-row items-center gap-2">
                <CircleCheckBig color={'#C2C2C2'} size={20} />
                <Text className="font-roboto  text-[14px] font-normal text-[#C2C2C2]">
                  Perfect for residents running several sims each month
                </Text>
              </View>
              <View className="mb-3 flex-row items-center gap-2">
                <CircleCheckBig color={'#C2C2C2'} size={20} />
                <Text className="font-roboto  text-[14px] font-normal text-[#C2C2C2]">
                  Sim Experiences reload every month
                </Text>
              </View>
              <View className="mb-3 flex-row items-center gap-2">
                <CircleCheckBig color={'#C2C2C2'} size={20} />
                <Text className="font-roboto  text-[14px] font-normal text-[#C2C2C2]">
                  First month free
                </Text>
              </View>
            </View>
          </View>
        </View>
      ) : (
        <View
          style={{
            backgroundColor: '#0C3B44',
            width: '95%',
            borderRadius: 10,
            padding: 15,
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#579D97',
            marginBottom: 20,
          }}>
          {/* <Text style={styles.text}>Gradient Border ✨</Text> */}
          <View style={{ flex: 1, width: '100%' }}>
            <View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#0C3B44',
                  borderRadius: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    width: '60%',
                    gap: 10,
                  }}>
                  <TouchableOpacity
                    onPress={() => setOpen(true)}
                    style={{
                      marginTop: 5,
                      height: 22,
                      width: 22,
                      borderColor: '#0F737F',
                      borderWidth: 1,
                      borderRadius: 20,
                    }}
                  />
                  <View style={{}}>
                    <Text className="mb-2 font-roboto text-[20px] font-medium text-white">
                      Core
                    </Text>
                    <Text className="mb-2 font-roboto text-[14px] font-normal text-[#C2C2C2]">
                      Most residents choose this
                    </Text>
                    <Text className="mb-2 font-roboto text-[16px] font-medium text-[#10B346]">
                      15 Sim Experiences/month
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    alignItems: 'flex-end',
                    paddingRight: 5,
                  }}>
                  <Text className="mb-2 font-roboto text-[20px] font-bold text-[#10A9B3]">$39</Text>
                  <Text className="mb-2 font-roboto text-[14px] font-normal text-[#C2C2C2]">
                    User | Month
                  </Text>
                  <View
                    style={{
                      backgroundColor: '#016449',
                      paddingHorizontal: 6,
                      paddingVertical: 4,
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                      borderRadius: 10,
                    }}>
                    <Text className=" font-roboto text-[12px] font-medium text-white">
                      1 Month Free
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default Core;
