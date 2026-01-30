import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Layout from 'components/layout';
import { COLORS } from 'constants/color';
import Hat from '../../../assets/svgs/hat.svg';
import { Bookmark, Play, Plus, Save, X } from 'lucide-react-native';
import { useRouter } from 'expo-router';

const Quiz = () => {
  const [activeTab, setActiveTab] = useState<'current' | 'saved'>('current');
  const router = useRouter();

  const currentQuizzes = [
    { id: 1, title: 'Quiz Title 2', questions: 15, answered: 1, progress: 10, color: '#346C6C' },
    { id: 2, title: 'Quiz Title 1', questions: 20, answered: 15, progress: 75, color: '#346C6C' },
  ];

  const savedQuizzes = [
    { id: 3, title: 'Quiz Title 3', questions: 12, color: '#527F7B' },
  ];

  return (
    <Layout>
      {/* Header */}
      <View style={{ justifyContent: 'center', alignItems: 'center', height: 50, marginTop: 10 }}>
        <Text style={{ fontSize: 24, fontWeight: '700', color: '#026672', fontFamily: 'Roboto' }}>
          My QUIZ
        </Text>
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            position: 'absolute',
            left: 20,
            backgroundColor: '#82A4A5',
            borderRadius: 25,
            padding: 2,
          }}>
          <X size={28} color={'#fff'} />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={{ flexDirection: 'row', paddingHorizontal: 16, marginTop: 25, gap: 12 }}>
        <TouchableOpacity
          onPress={() => setActiveTab('current')}
          style={{
            flex: 1,
            backgroundColor: activeTab === 'current' ? '#346C6C' : '#fff',
            paddingVertical: 12,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#346C6C',
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 16, fontWeight: '500', color: activeTab === 'current' ? '#fff' : '#346C6C' }}>
            Current Quiz
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab('saved')}
          style={{
            flex: 1,
            backgroundColor: activeTab === 'saved' ? '#346C6C' : '#fff',
            paddingVertical: 12,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#346C6C',
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 16, fontWeight: '500', color: activeTab === 'saved' ? '#fff' : '#346C6C' }}>
            Saved For Later
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={{ padding: 16, gap: 20 }}>
        {activeTab === 'current' ? (
          currentQuizzes.map((quiz) => (
            <View key={quiz.id} style={{ backgroundColor: '#346C6C', borderRadius: 12, padding: 16 }}>
              <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
                <Hat width={32} height={32} />
                <View>
                  <Text style={{ fontSize: 22, fontWeight: '700', color: '#fff' }}>{quiz.title}</Text>
                  <Text style={{ fontSize: 14, color: '#fff', opacity: 0.8 }}>{quiz.questions} Questions</Text>
                </View>
              </View>

              <TouchableOpacity
                onPress={() => router.push('/profile/quizquestion')}
                style={{
                  backgroundColor: '#E26C39',
                  marginTop: 20,
                  paddingVertical: 14,
                  borderRadius: 10,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 10,
                }}>
                <Play size={20} color={'#fff'} fill="#fff" />
                <Text style={{ fontSize: 18, fontWeight: '700', color: '#fff' }}>Start Quiz</Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          savedQuizzes.map((quiz) => (
            <View key={quiz.id} style={{ backgroundColor: '#527F7B', borderRadius: 12, padding: 16 }}>
              <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
                <Hat width={32} height={32} />
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 22, fontWeight: '700', color: '#fff' }}>{quiz.title}</Text>
                  <Text style={{ fontSize: 14, color: '#fff', opacity: 0.8 }}>{quiz.questions} Questions</Text>
                </View>
                <Bookmark size={24} color="#fff" fill="#fff" />
              </View>

              {/* Progress Section moved to Saved */}
              <View style={{ marginTop: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ fontSize: 14, fontWeight: '600', color: '#fff' }}>Progress</Text>
                  <Text style={{ fontSize: 14, fontWeight: '600', color: '#fff' }}>
                    1 of {quiz.questions} Answered
                  </Text>
                </View>
                <View style={{ height: 10, backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 5, marginTop: 8, overflow: 'hidden' }}>
                  <View style={{ height: '100%', width: `10%`, backgroundColor: '#E26C39', borderRadius: 5 }} />
                </View>
              </View>

              <TouchableOpacity
                onPress={() => router.push('/profile/quizquestion')}
                style={{
                  backgroundColor: '#E26C39',
                  marginTop: 20,
                  paddingVertical: 14,
                  borderRadius: 10,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 10,
                }}>
                <Play size={20} color={'#fff'} fill="#fff" />
                <Text style={{ fontSize: 18, fontWeight: '700', color: '#fff' }}>Start Quiz</Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </View>
    </Layout>
  );
};

export default Quiz;
