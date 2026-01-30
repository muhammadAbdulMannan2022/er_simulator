import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Image, View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
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
  const [image, setImage] = useState<string | null>(null);

  const handlePickImage = async () => {
    // Request permission
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'We need access to your gallery to upload screenshots.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <Layout>
      <View style={{ justifyContent: 'center', alignItems: 'center', height: 35, marginTop: 20 }}>
        <Text className="font-roboto font-semibold " style={{ fontSize: 26 }}>
          Help & Support
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

          <TouchableOpacity
            onPress={handlePickImage}
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 8,
              paddingVertical: 30,
              justifyContent: 'center',
              alignItems: 'center',
              gap: 8,
              backgroundColor: '#FAFAFA',
            }}>
            {image ? (
              <View style={{ width: '100%', height: 200 }}>
                <Image
                  source={{ uri: image }}
                  style={{ width: '100%', height: '100%' }}
                  resizeMode="contain"
                />
                <TouchableOpacity
                  onPress={() => setImage(null)}
                  style={{
                    position: 'absolute',
                    top: 5,
                    right: 5,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    borderRadius: 15,
                    padding: 5,
                  }}>
                  <X size={18} color="#fff" />
                </TouchableOpacity>
              </View>
            ) : (
              <>
                <Camera />
                <Text style={{ fontSize: 16, color: '#527F7B' }}>Tap to add a screenshot</Text>
                <Text style={{ fontSize: 12, color: '#888' }}>JPG, PNG up to 5MB</Text>
              </>
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ width: '92%', alignSelf: 'center', marginTop: 50, marginBottom: 40 }}>
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
          <Text className="font-roboto font-medium" style={{ fontSize: 20, color: '#fff' }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default Support;
