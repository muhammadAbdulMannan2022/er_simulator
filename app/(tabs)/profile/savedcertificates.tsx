import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Layout from 'components/layout';
import { COLORS } from 'constants/color';
import Hat from '../../../assets/svgs/hat.svg';
import { Bookmark, CircleCheckBig, Download, Play, Plus, Save, X } from 'lucide-react-native';
import NewImprovement from 'components/ui/newimprovement';
import SavedImprovement from 'components/ui/savedimprovement';
import { useRouter } from 'expo-router';

const SavedCertificate = () => {
  const [saved, setSaved] = useState(false);
  const router = useRouter();

  return (
    <Layout>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 35,
          marginTop: 20,
          marginBottom: 10,
        }}>
        <Text className="font-roboto font-semibold " style={{ fontSize: 26 }}>
          Saved Certificates
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
          marginTop: 35,
          gap: 15,
          backgroundColor: '#fff',
          borderRadius: 12,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 3.84,
          elevation: 5,
        }}>
        <View
          style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
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
                style={{ fontSize: 24, color: '#163A53', marginBottom: 2 }}>
                Quiz Title 2
              </Text>
              <Text className="font-roboto font-normal" style={{ fontSize: 14, color: '#163A53' }}>
                15 Questions
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 5,
              alignItems: 'center',
              marginRight: 15,
              backgroundColor: COLORS.deep,
              paddingHorizontal: 12,
              paddingVertical: 5,
              borderRadius: 20,
            }}>
            <CircleCheckBig size={20} color={'#fff'} />
            <Text className="font-roboto text-white">Completed</Text>
          </View>
        </View>
        <View
          style={{
            width: '92%',
            marginHorizontal: 'auto',
            marginBottom: 15,
          }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text className="font-roboto font-semibold" style={{ fontSize: 14, color: '#163A53' }}>
              Progress
            </Text>
            <Text className="font-roboto font-semibold" style={{ fontSize: 14, color: '#163A53' }}>
              1 of 15 Answered
            </Text>
          </View>
          <View style={{ height: 10, backgroundColor: '#FFD4AC', borderRadius: 5, marginTop: 10 }}>
            <View
              style={{ height: '100%', width: '95%', backgroundColor: '#E26C39', borderRadius: 5 }}
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
              shadowColor: '#000',
              shadowOffset: { width: 3, height: 3 },
              shadowOpacity: 0.3,
              shadowRadius: 3,
              elevation: 5,
            }}>
            <Download size={20} color={'#fff'} strokeWidth={3} />
            <Text className="font-roboto font-medium" style={{ fontSize: 20, color: '#fff' }}>
              Download
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: '92%',
          marginHorizontal: 'auto',
          marginTop: 35,
          gap: 15,
          backgroundColor: '#fff',
          borderRadius: 12,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 3.84,
          elevation: 5,
        }}>
        <View
          style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
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
                style={{ fontSize: 24, color: '#163A53', marginBottom: 2 }}>
                Quiz Title 3
              </Text>
              <Text className="font-roboto font-normal" style={{ fontSize: 14, color: '#163A53' }}>
                15 Questions
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 5,
              alignItems: 'center',
              marginRight: 15,
              backgroundColor: COLORS.deep,
              paddingHorizontal: 12,
              paddingVertical: 5,
              borderRadius: 20,
            }}>
            <CircleCheckBig size={20} color={'#fff'} />
            <Text className="font-roboto text-white">Completed</Text>
          </View>
        </View>
        <View
          style={{
            width: '92%',
            marginHorizontal: 'auto',
            marginBottom: 15,
          }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text className="font-roboto font-semibold" style={{ fontSize: 14, color: '#163A53' }}>
              Progress
            </Text>
            <Text className="font-roboto font-semibold" style={{ fontSize: 14, color: '#163A53' }}>
              1 of 15 Answered
            </Text>
          </View>
          <View style={{ height: 10, backgroundColor: '#FFD4AC', borderRadius: 5, marginTop: 10 }}>
            <View
              style={{ height: '100%', width: '95%', backgroundColor: '#E26C39', borderRadius: 5 }}
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
              shadowColor: '#000',
              shadowOffset: { width: 3, height: 3 },
              shadowOpacity: 0.3,
              shadowRadius: 3,
              elevation: 5,
            }}>
            <Download size={20} color={'#fff'} strokeWidth={3} />
            <Text className="font-roboto font-medium" style={{ fontSize: 20, color: '#fff' }}>
              Download
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

export default SavedCertificate;
