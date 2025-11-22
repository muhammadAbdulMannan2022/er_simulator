import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Layout from 'components/layout';
import { COLORS } from 'constants/color';
import Hat from '../../../assets/svgs/hat.svg';
import { Bookmark, Download, Mail, Play, Plus, Save, User, X } from 'lucide-react-native';
import NewImprovement from 'components/ui/newimprovement';
import SavedImprovement from 'components/ui/savedimprovement';
import { useRouter } from 'expo-router';
import Success from '../../../assets/svgs/success.svg';

const QuizResult = () => {
  const router = useRouter();

  return (
    <Layout>
      <View style={{ justifyContent: 'center', alignItems: 'center', height: 35, marginTop: 20 }}>
        <Text className="font-roboto font-semibold " style={{ fontSize: 26 }}>
          CME Quiz Result
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
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 40, gap: 10 }}>
        <Success />
        <Text className="font-roboto font-medium " style={{ fontSize: 30, color: '#E26C39' }}>
          Case Complete!
        </Text>
        <Text className="font-roboto font-medium " style={{ fontSize: 20, color: '#163A53' }}>
          Quiz Title
        </Text>
      </View>
      <View
        style={{
          width: '92%',
          marginHorizontal: 'auto',
          backgroundColor: COLORS.deep,
          padding: 20,
          marginTop: 30,
          borderRadius: 20,
        }}>
        <Text
          className="font-roboto font-bold "
          style={{
            fontSize: 58,
            color: '#fff',
            textAlign: 'center',
          }}>
          85%
        </Text>
        <Text
          className="font-roboto font-medium "
          style={{
            fontSize: 22,
            color: '#fff',
            textAlign: 'center',
            marginTop: -8,
            marginBottom: 20,
          }}>
          Overall Performance
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 20 }}>
          <View
            style={{
              backgroundColor: '#579D97',
              flex: 1,
              paddingVertical: 20,
              gap: 12,
              borderRadius: 6,
            }}>
            <Text
              className="font-roboto text-center font-semibold"
              style={{ fontSize: 32, color: '#fff' }}>
              12
            </Text>
            <Text
              className="font-roboto text-center font-normal"
              style={{ fontSize: 16, color: '#fff' }}>
              Correct{'\n'}Actions
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#CC4548',
              flex: 1,
              paddingVertical: 20,
              gap: 12,
              borderRadius: 6,
            }}>
            <Text
              className="font-roboto text-center font-semibold"
              style={{ fontSize: 32, color: '#fff' }}>
              3
            </Text>
            <Text
              className="font-roboto text-center font-normal"
              style={{ fontSize: 16, color: '#fff' }}>
              Wrong{'\n'}Actions
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#045E6D',
              flex: 1,
              paddingVertical: 20,
              gap: 12,
              borderRadius: 6,
            }}>
            <Text
              className="font-roboto text-center font-semibold"
              style={{ fontSize: 32, color: '#fff' }}>
              15
            </Text>
            <Text
              className="font-roboto text-center font-normal"
              style={{ fontSize: 16, color: '#fff' }}>
              Total{'\n'}Question
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 25,
            marginBottom: 15,
            alignItems: 'center',
            backgroundColor: '#2C7B4C',
            paddingHorizontal: 8,
            paddingVertical: 15,
            borderRadius: 8,
            borderColor: '#1A9D00',
            borderWidth: 1,
          }}>
          <Text
            className="font-roboto font-bold "
            style={{
              fontSize: 15,
              color: '#fff',
              textAlign: 'center',
            }}>
            Congratulations! You’ve earned 1 CME credit
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '92%',
          marginHorizontal: 'auto',
          marginTop: 40,
          gap: 20,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            gap: 8,
            backgroundColor: '#E4E4E4',
            paddingHorizontal: 20,
            paddingVertical: 12,
            borderRadius: 8,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Mail size={16} />
          <Text className="font-roboto font-normal" style={{ fontSize: 16, color: '#163A53' }}>
            Send to Email
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            gap: 8,
            backgroundColor: '#E4E4E4',
            paddingHorizontal: 20,
            paddingVertical: 12,
            borderRadius: 8,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <User size={16} />
          <Text className="font-roboto font-normal" style={{ fontSize: 16, color: '#163A53' }}>
            Save To Profile
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: '92%', alignSelf: 'center', marginTop: 20, marginBottom: 40 }}>
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
          <Download size={20} color={'#fff'} />
          <Text className="font-roboto font-medium" style={{ fontSize: 20, color: '#fff' }}>
            Download result pdf
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default QuizResult;
