import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Layout from 'components/layout';
import { COLORS } from 'constants/color';
import Hat from '../../../assets/svgs/hat.svg';
import { Bookmark, Play, Plus, Save, X } from 'lucide-react-native';
import NewImprovement from 'components/ui/newimprovement';
import SavedImprovement from 'components/ui/savedimprovement';
import { useRouter } from 'expo-router';

const Quiz = () => {
  const [saved, setSaved] = useState(false);
  const router = useRouter();

  return (
    <Layout>
      <View style={{ justifyContent: 'center', alignItems: 'center', height: 35, marginTop: 20 }}>
        <Text className="font-roboto font-semibold " style={{ fontSize: 26 }}>
          My CME QUIZ
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
            Current Quiz
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
            Saved For Later
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '92%',
          marginHorizontal: 'auto',
          marginTop: 35,
          gap: 15,
          backgroundColor: COLORS.deep,
          borderRadius: 12,
        }}>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            padding: 15,
          }}>
          <Hat style={{ marginTop: 3 }} />
          <View>
            <Text
              className="font-roboto font-semibold"
              style={{ fontSize: 24, color: '#fff', marginBottom: 2 }}>
              Quiz Title 2
            </Text>
            <Text className="font-roboto font-normal" style={{ fontSize: 14, color: '#fff' }}>
              15 Questions
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '92%',
            marginHorizontal: 'auto',
            marginBottom: 15,
          }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text className="font-roboto font-semibold" style={{ fontSize: 14, color: '#fff' }}>
              Progress
            </Text>
            <Text className="font-roboto font-semibold" style={{ fontSize: 14, color: '#fff' }}>
              1 of 15 Answered
            </Text>
          </View>
          <View style={{ height: 10, backgroundColor: '#fff', borderRadius: 5, marginTop: 10 }}>
            <View
              style={{ height: '100%', width: '10%', backgroundColor: '#E26C39', borderRadius: 5 }}
            />
          </View>
        </View>
        <View
          style={{
            gap: 15,
            width: '90%',
            alignSelf: 'center',
            marginVertical: 10,
            paddingTop: 5,
            paddingBottom: 20,
          }}>
          <TouchableOpacity
            onPress={() => router.push('/profile/quizquestion')}
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
            <Play size={20} color={'#fff'} strokeWidth={3} />
            <Text className="font-roboto font-medium" style={{ fontSize: 20, color: '#fff' }}>
              Start Quiz
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

export default Quiz;
