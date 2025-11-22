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
import CardWithBar from 'components/ui/cardwithbar';
import ProgressCard from 'components/ui/progresscard';

const Progress = () => {
  const router = useRouter();
  const [completed, setCompleted] = useState(true);
  return (
    <Layout>
      <View style={{ justifyContent: 'center', alignItems: 'center', height: 35, marginTop: 20 }}>
        <Text className="font-roboto font-semibold " style={{ fontSize: 26 }}>
          Progress Overview
        </Text>
        {/* <View style={{ position: 'absolute', top: 0, left: 20 }}>
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
        </View> */}
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
            gap: 5,
            padding: 15,
          }}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text
              className="font-roboto font-semibold"
              style={{ fontSize: 24, color: '#fff', marginBottom: 2 }}>
              Progress Level 4
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#41E600',
                justifyContent: 'center',
                paddingHorizontal: 15,
                borderRadius: 10,
              }}>
              <Text className="font-roboto font-normal" style={{ fontSize: 14, color: '#41E600' }}>
                Beginner
              </Text>
            </View>
          </View>
          <View>
            <Text className="font-roboto font-normal" style={{ fontSize: 14, color: '#fff' }}>
              (4 Simulation completed)
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '92%',
            marginHorizontal: 'auto',
            marginBottom: 15,
          }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}></View>
          <View style={{ height: 12, backgroundColor: '#fff', borderRadius: 5 }}>
            <View
              style={{ height: '100%', width: '70%', backgroundColor: '#E26C39', borderRadius: 5 }}
            />
          </View>
          <Text
            className="font-roboto font-normal"
            style={{ fontSize: 14, color: '#fff', marginTop: 1 }}>
            Started: Jan 15, 2026
          </Text>
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
          onPress={() => setCompleted((prev) => !prev)}
          style={{
            backgroundColor: completed ? COLORS.deep : '#fff',
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
            style={{ fontSize: 16, color: completed ? '#fff' : COLORS.deep }}>
            Completed Case
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCompleted((prev) => !prev)}
          style={{
            backgroundColor: completed ? '#fff' : COLORS.deep,
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
            style={{ fontSize: 16, color: completed ? COLORS.deep : '#fff' }}>
            Incomplete Case
          </Text>
        </TouchableOpacity>
      </View>
      {completed ? (
        <View style={{ width: '92%', marginHorizontal: 'auto', marginTop: 20, gap: 20 }}>
          <ProgressCard serial={1} complete={completed} />
          <ProgressCard serial={2} complete={completed} />
          <ProgressCard serial={3} complete={completed} />
        </View>
      ) : (
        <View style={{ width: '92%', marginHorizontal: 'auto', marginTop: 20, gap: 20 }}>
          <ProgressCard serial={1} complete={completed} />
          <ProgressCard serial={2} complete={completed} />
          <ProgressCard serial={3} complete={completed} />
        </View>
      )}
    </Layout>
  );
};

export default Progress;
