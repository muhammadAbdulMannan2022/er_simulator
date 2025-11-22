import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Layout from 'components/layout';
import { COLORS } from 'constants/color';
import { Bookmark, Plus, Save, X } from 'lucide-react-native';
import NewImprovement from 'components/ui/newimprovement';
import SavedImprovement from 'components/ui/savedimprovement';
import { router } from 'expo-router';

const Suggestions = () => {
  const [saved, setSaved] = useState(false);

  return (
    <Layout>
      <View style={{ justifyContent: 'center', alignItems: 'center', height: 35, marginTop: 20 }}>
        <Text className="font-roboto font-semibold " style={{ fontSize: 26 }}>
          Suggestions
        </Text>
        <View style={{ position: 'absolute', top: 0, left: 20 }}>
          <TouchableOpacity
            onPress={() => router.back()}
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
          flexDirection: 'row',
          width: '92%',
          marginHorizontal: 'auto',
          marginTop: 30,
          gap: 20,
        }}>
        <TouchableOpacity
          onPress={() => setSaved((prev) => !prev)}
          style={{
            backgroundColor: saved ? '#fff' : COLORS.deep,
            paddingHorizontal: 20,
            paddingVertical: 12,
            borderRadius: 10,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: COLORS.deep,
            borderWidth: 1,
          }}>
          <Text
            className="font-roboto font-normal"
            style={{ fontSize: 16, color: saved ? COLORS.deep : '#fff' }}>
            New
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSaved((prev) => !prev)}
          style={{
            backgroundColor: saved ? COLORS.deep : '#fff',
            paddingHorizontal: 20,
            paddingVertical: 12,
            borderRadius: 10,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: COLORS.deep,
            borderWidth: 1,
          }}>
          <Text
            className="font-roboto font-normal"
            style={{ fontSize: 16, color: saved ? '#fff' : COLORS.deep }}>
            Saved
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, width: '92%', marginHorizontal: 'auto', marginTop: 30 }}>
        {saved ? <SavedImprovement /> : <NewImprovement />}
      </View>
    </Layout>
  );
};

export default Suggestions;
