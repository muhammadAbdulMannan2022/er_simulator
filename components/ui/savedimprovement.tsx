import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from 'constants/color';
import { SquarePen } from 'lucide-react-native';

const SavedImprovement = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      items: [
        'should take 5–10 minutes after each simulation to reflect on their actions — what went well, what could be done differently, and what they felt during critical moments.',
        'should take 5–10 minutes after each simulation to reflect on their actions — what went well, what could be done differently, and what they felt during critical moments.',
        'should take 5–10 minutes after each simulation to reflect on their actions — what went well, what could be done differently, and what they felt during critical moments.',
      ],
      isEditing: false,
    },
    {
      id: 2,
      items: [
        'should take 5–10 minutes after each simulation to reflect on their actions — what went well, what could be done differently, and what they felt during critical moments.',
        'should take 5–10 minutes after each simulation to reflect on their actions — what went well, what could be done differently, and what they felt during critical moments.',
        'should take 5–10 minutes after each simulation to reflect on their actions — what went well, what could be done differently, and what they felt during critical moments.',
      ],
      isEditing: false,
    },
  ]);

  const toggleEdit = (cardIndex) => {
    const newCards = [...cards];
    newCards[cardIndex].isEditing = !newCards[cardIndex].isEditing;
    setCards(newCards);
  };

  const handleTextChange = (text, cardIndex, itemIndex) => {
    const newCards = [...cards];
    newCards[cardIndex].items[itemIndex] = text;
    setCards(newCards);
  };

  return (
    <>
      <Text
        className="font-roboto font-semibold "
        style={{ fontSize: 24, color: '#163A53', marginBottom: 15 }}>
        Saved List
      </Text>
      {cards.map((card, cardIndex) => (
        <View
          key={card.id}
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
            marginBottom: 25,
          }}>
          <View style={{ paddingLeft: 10 }}>
            <Text
              style={{
                backgroundColor: '#E26C39',
                alignSelf: 'flex-start',
                paddingHorizontal: 15,
                paddingVertical: 2,
                borderRadius: 10,
                color: '#fff',
                fontSize: 12,
              }}>
              {card.id}
            </Text>
          </View>

          {card.items.map((item, itemIndex) => (
            <View
              key={itemIndex}
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
                  marginTop: 8,
                }}
              />
              {card.isEditing ? (
                <TextInput
                  className="font-roboto font-normal"
                  style={{
                    fontSize: 14,
                    color: '#163A53',
                    flexShrink: 1,
                    padding: 0,
                  }}
                  multiline
                  value={item}
                  onChangeText={(text) => handleTextChange(text, cardIndex, itemIndex)}
                />
              ) : (
                <Text
                  className="font-roboto font-normal"
                  style={{ fontSize: 14, color: '#163A53', flexShrink: 1 }}>
                  {item}
                </Text>
              )}
            </View>
          ))}

          <View style={{ gap: 15, width: '85%', alignSelf: 'center', marginVertical: 10 }}>
            <TouchableOpacity
              onPress={() => toggleEdit(cardIndex)}
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
              <Text className="font-roboto font-normal" style={{ fontSize: 20, color: '#fff' }}>
                {card.isEditing ? 'Save Changes' : 'Tap and Edit'}
              </Text>
              <SquarePen size={20} color={'#fff'} />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </>
  );
};

export default SavedImprovement;
