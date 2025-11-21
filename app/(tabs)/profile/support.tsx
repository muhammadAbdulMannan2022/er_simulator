import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import Layout from 'components/layout';
import { COLORS } from 'constants/color';
import Hat from '../../../assets/svgs/hat.svg';
import { Bookmark, Play, Plus, Save, X } from 'lucide-react-native';
import NewImprovement from 'components/ui/newimprovement';
import SavedImprovement from 'components/ui/savedimprovement';
import { useRouter } from 'expo-router';
import { Input } from 'components/input';
import Camera from '../../../assets/svgs/camera.svg';

const Support = () => {
  const router = useRouter();

  return (
    <Layout>
      <View style={{ justifyContent: 'center', alignItems: 'center', height: 35, marginTop: 20 }}>
        <Text className="font-roboto font-semibold " style={{ fontSize: 26 }}>
          Help & Support
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
          marginTop: 40,
          gap: 25,
          backgroundColor: '#fff',
          padding: 20,
          borderRadius: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.05,
          shadowRadius: 3,
          elevation: 5,
        }}>
        <View>
          <Text
            className="font-roboto font-semibold"
            style={{ fontSize: 16, marginBottom: 6, color: '#333' }}>
            E-mail
          </Text>

          <TextInput
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 8,
              paddingHorizontal: 12,
              paddingVertical: 10,
              fontSize: 16,
              color: '#000',
            }}
            placeholder="Enter your email"
            placeholderTextColor="#888"
          />
        </View>
        <View>
          <Text
            className="font-roboto font-semibold"
            style={{ fontSize: 16, marginBottom: 6, color: '#333' }}>
            Problem
          </Text>

          <TextInput
            multiline
            numberOfLines={5}
            textAlignVertical="top"
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 8,
              paddingHorizontal: 12,
              paddingVertical: 10,
              fontSize: 16,
              color: '#000',
              height: 130,
            }}
            placeholder="Describe your problem..."
            placeholderTextColor="#888"
          />
        </View>
        <View>
          <Text
            className="font-roboto font-semibold"
            style={{ fontSize: 16, marginBottom: 6, color: '#333' }}>
            Screenshot (Optional)
          </Text>

          <View
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 8,

              paddingVertical: 30,
              justifyContent: 'center',
              alignItems: 'center',
              gap: 8,
            }}>
            <Camera />
            <Text>Tap to add a screenshot</Text>
            <Text>JPG, PNG up to 5MB</Text>
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default Support;
