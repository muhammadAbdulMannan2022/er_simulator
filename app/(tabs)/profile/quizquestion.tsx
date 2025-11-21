import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Layout from 'components/layout';
import { COLORS } from 'constants/color';
import Hat from '../../../assets/svgs/hat.svg';
import { Bookmark, Play, Plus, Save, X } from 'lucide-react-native';
import NewImprovement from 'components/ui/newimprovement';
import SavedImprovement from 'components/ui/savedimprovement';
import { router } from 'expo-router';

const options = [
  { option: 'Option 1', selected: false },
  { option: 'Option 2', selected: false },
  { option: 'Option 3', selected: false },
  { option: 'Option 4', selected: false },
];

const Quiz = () => {
  const [selectedOption, setSelectedOption] =
    useState<{ option: string; selected: boolean }[]>(options);

  const handleOption = (index: number) => {
    const updatedOptions = selectedOption.map((opt, i) => ({
      ...opt,
      selected: i === index,
    }));

    setSelectedOption(updatedOptions);
  };

  return (
    <Layout>
      <View style={{ justifyContent: 'center', alignItems: 'center', height: 35, marginTop: 20 }}>
        <Text className="font-roboto font-semibold " style={{ fontSize: 26 }}>
          QUIZ Started
        </Text>
        <View style={{ position: 'absolute', top: 0, left: 20 }}>
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
        </View>
      </View>

      <View
        style={{
          width: '92%',
          marginHorizontal: 'auto',
          backgroundColor: '#fff',
          paddingHorizontal: 20,
          paddingVertical: 15,
          marginTop: 40,
          borderRadius: 20,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.1,
          shadowRadius: 2,
          elevation: 2,
        }}>
        <View>
          <Text
            style={{ fontSize: 24, color: '#163A53', marginBottom: 10 }}
            className="font-roboto font-semibold">
            1. Question
          </Text>
          <Text
            style={{ fontSize: 14, color: '#163A53', marginBottom: 20, flexShrink: 1 }}
            className="font-roboto font-normal">
            should take 5–10 minutes after each simulation to reflect on their actions — what went
            well, what could be done differently, and what they felt during critical moments.
          </Text>
        </View>

        <View style={{ gap: 10, marginBottom: 10 }}>
          {selectedOption.map((opt, index) => (
            <TouchableOpacity
              onPress={() => handleOption(index)}
              key={index}
              style={{
                backgroundColor: opt.selected ? '#E26C39' : '#E4E4E4',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
                paddingHorizontal: 15,
                paddingVertical: 12,
                borderRadius: 8,
              }}>
              <View
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 10,
                  borderColor: opt.selected ? '#fff' : '#163A53',
                  backgroundColor: opt.selected && '#fff',
                  borderWidth: 1,
                }}
              />
              <Text className="font-roboto " style={{ color: opt.selected ? '#fff' : '#163A53' }}>
                {opt.option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={{ gap: 20, width: '92%', alignSelf: 'center', marginVertical: 50 }}>
        <TouchableOpacity
          onPress={() => router.push('/profile/quizresult')}
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
          <Text className="font-roboto font-medium" style={{ fontSize: 20, color: '#fff' }}>
            Submit Answer
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#E4E4E4',
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
          <Text className="font-roboto font-medium" style={{ fontSize: 20, color: '#163A53' }}>
            Saved For Later
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default Quiz;
