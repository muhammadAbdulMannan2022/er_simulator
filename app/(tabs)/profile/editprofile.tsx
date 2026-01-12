import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import React, { useState } from 'react';
import Layout from 'components/layout';
import { COLORS } from 'constants/color';
import { Bookmark, Play, Plus, Save, User, ChevronLeft } from 'lucide-react-native';
import { useRouter } from 'expo-router';

const EditProfile = () => {
  const router = useRouter();

  return (
    <Layout>
      <View style={{ justifyContent: 'center', alignItems: 'center', height: 35, marginTop: 20 }}>
        <Text className="font-roboto font-semibold " style={{ fontSize: 26 }}>
          Edit Profile
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
            <ChevronLeft size={35} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View
          style={{
            width: '92%',
            marginHorizontal: 'auto',
            marginTop: 40,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}>
          <User size={20} />
          <Text className="font-roboto font-medium" style={{ fontSize: 20, color: '#333' }}>
            Edit Personal Info
          </Text>
        </View>
        <View
          style={{
            width: '92%',
            marginHorizontal: 'auto',
            marginTop: 20,
            gap: 15,
            backgroundColor: '#fff',
            paddingHorizontal: 20,
            paddingVertical: 30,
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.05,
            shadowRadius: 3,
            elevation: 5,
          }}>
          <View style={{ gap: 10, alignItems: 'center' }}>
            <View>
              <Image
                source={require('../../../assets/images/avatar.jpg')}
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 40,
                  borderColor: COLORS.deep,
                  borderWidth: 1,
                }}
              />
            </View>
            <View>
              <Text
                className="font-roboto text-center font-bold "
                style={{ fontSize: 24, color: COLORS.deep }}>
                Selena Gomez
              </Text>
            </View>
          </View>

          <View>
            <Text
              className="font-roboto font-semibold"
              style={{ fontSize: 16, marginBottom: 6, color: '#333' }}>
              Name
            </Text>

            <TextInput
              style={{
                borderWidth: 1,
                borderColor: '#EFEFEF',
                backgroundColor: '#EFEFEF',
                borderRadius: 8,
                paddingHorizontal: 12,
                paddingVertical: 10,
                fontSize: 16,
                color: '#000',
              }}
              placeholder="Selena Gomez"
              placeholderTextColor="#999"
            />
          </View>
          <View>
            <Text
              className="font-roboto font-semibold"
              style={{ fontSize: 16, marginBottom: 6, color: '#333' }}>
              E-mail
            </Text>

            <TextInput
              style={{
                borderWidth: 1,
                borderColor: '#EFEFEF',
                backgroundColor: '#EFEFEF',
                borderRadius: 8,
                paddingHorizontal: 12,
                paddingVertical: 10,
                fontSize: 16,
                color: '#000',
              }}
              placeholder="example@gmail.com"
              placeholderTextColor="#999"
            />
          </View>
          <View>
            <Text
              className="font-roboto font-semibold"
              style={{ fontSize: 16, marginBottom: 6, color: '#333' }}>
              Field of Practice
            </Text>

            <TextInput
              style={{
                borderWidth: 1,
                borderColor: '#EFEFEF',
                backgroundColor: '#EFEFEF',
                borderRadius: 8,
                paddingHorizontal: 12,
                paddingVertical: 10,
                fontSize: 16,
                color: '#000',
              }}
              placeholder="Emergency Medicine"
              placeholderTextColor="#999"
            />
          </View>
          <View>
            <Text
              className="font-roboto font-semibold"
              style={{ fontSize: 16, marginBottom: 6, color: '#333' }}>
              NPI
            </Text>

            <TextInput
              style={{
                borderWidth: 1,
                borderColor: '#EFEFEF',
                backgroundColor: '#EFEFEF',
                borderRadius: 8,
                paddingHorizontal: 12,
                paddingVertical: 10,
                fontSize: 16,
                color: '#000',
              }}
              placeholder="000000000"
              placeholderTextColor="#999"
            />
          </View>
        </View>
        <View style={{ width: '92%', alignSelf: 'center', marginTop: 25, marginBottom: 40 }}>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.deep,
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
            <Text className="font-roboto font-medium" style={{ fontSize: 20, color: '#fff' }}>
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View
          style={{
            width: '92%',
            marginHorizontal: 'auto',

            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}>
          <User size={20} />
          <Text className="font-roboto font-medium" style={{ fontSize: 20, color: '#333' }}>
            Edit Personal Info
          </Text>
        </View>
        <View
          style={{
            width: '92%',
            marginHorizontal: 'auto',
            marginTop: 20,
            gap: 15,
            backgroundColor: '#fff',
            paddingHorizontal: 20,
            paddingVertical: 30,
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
              Current Password
            </Text>

            <TextInput
              style={{
                borderWidth: 1,
                borderColor: '#EFEFEF',
                backgroundColor: '#EFEFEF',
                borderRadius: 8,
                paddingHorizontal: 12,
                paddingVertical: 10,
                fontSize: 16,
                color: '#000',
              }}
              placeholder="Enter Current Password"
              placeholderTextColor="#999"
            />
          </View>
          <View>
            <Text
              className="font-roboto font-semibold"
              style={{ fontSize: 16, marginBottom: 6, color: '#333' }}>
              New Password
            </Text>

            <TextInput
              style={{
                borderWidth: 1,
                borderColor: '#EFEFEF',
                backgroundColor: '#EFEFEF',
                borderRadius: 8,
                paddingHorizontal: 12,
                paddingVertical: 10,
                fontSize: 16,
                color: '#000',
              }}
              placeholder="Enter new Password"
              placeholderTextColor="#999"
            />
          </View>
          <View>
            <Text
              className="font-roboto font-semibold"
              style={{ fontSize: 16, marginBottom: 6, color: '#333' }}>
              Confirm New password
            </Text>

            <TextInput
              style={{
                borderWidth: 1,
                borderColor: '#EFEFEF',
                backgroundColor: '#EFEFEF',
                borderRadius: 8,
                paddingHorizontal: 12,
                paddingVertical: 10,
                fontSize: 16,
                color: '#000',
              }}
              placeholder="Re-enter new Password"
              placeholderTextColor="#999"
            />
          </View>
        </View>
        <View style={{ width: '92%', alignSelf: 'center', marginTop: 25, marginBottom: 40 }}>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.deep,
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
            <Text className="font-roboto font-medium" style={{ fontSize: 20, color: '#fff' }}>
              Update Password
            </Text>
          </TouchableOpacity>
          <Text
            className="font-roboto text-center font-normal"
            style={{ fontSize: 14, color: '#E26C39', marginTop: 10 }}>
            Make sure your new password is at least 8 characters long.
          </Text>
        </View>
      </View>
    </Layout>
  );
};

export default EditProfile;
