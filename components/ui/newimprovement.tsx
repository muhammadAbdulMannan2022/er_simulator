import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS } from 'constants/color';
import { Bookmark, Plus } from 'lucide-react-native';

const NewImprovement = () => {
  return (
    <>
      <Text
        className="font-roboto font-semibold "
        style={{ fontSize: 24, color: '#163A53', marginBottom: 15 }}>
        Tap and Edit
      </Text>
      <View
        style={{
          gap: 15,
          backgroundColor: '#fff',
          paddingVertical: 20,
          borderRadius: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
          elevation: 3,
        }}>
        <View
          style={{
            flexDirection: 'row',
            gap: 5,
            width: '90%',
            alignSelf: 'center',
          }}>
          <View
            style={{
              height: 10,
              width: 10,
              backgroundColor: COLORS.deep,
              borderRadius: 5,
              marginTop: 3,
            }}
          />
          <Text
            className="font-roboto font-normal"
            style={{ fontSize: 14, color: '#163A53', flexShrink: 1 }}>
            should take 5–10 minutes after each simulation to reflect on their actions — what went
            well, what could be done differently, and what they felt during critical moments.
          </Text>
        </View>
        <View style={{ flexDirection: 'row', gap: 5, width: '90%', alignSelf: 'center' }}>
          <View
            style={{
              height: 10,
              width: 10,
              backgroundColor: COLORS.deep,
              borderRadius: 5,
              marginTop: 3,
            }}
          />
          <Text
            className="font-roboto font-normal"
            style={{ fontSize: 14, color: '#163A53', flexShrink: 1 }}>
            should take 5–10 minutes after each simulation to reflect on their actions — what went
            well, what could be done differently, and what they felt during critical moments.
          </Text>
        </View>
        <View style={{ gap: 15, width: '85%', alignSelf: 'center', marginVertical: 10 }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#E26C39',
              paddingHorizontal: 20,
              paddingVertical: 12,
              borderRadius: 10,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: '#E26C39',
              borderWidth: 1,
              flexDirection: 'row',
              gap: 10,
            }}>
            <Plus size={20} color={'#fff'} />
            <Text className="font-roboto font-normal" style={{ fontSize: 20, color: '#fff' }}>
              Add Improvements
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              paddingHorizontal: 20,
              paddingVertical: 12,
              borderRadius: 10,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: COLORS.deep,
              borderWidth: 1,
              flexDirection: 'row',
              gap: 10,
            }}>
            <Text className="font-roboto font-normal" style={{ fontSize: 20, color: COLORS.deep }}>
              Save
            </Text>
            <Bookmark size={20} color={COLORS.deep} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default NewImprovement;
