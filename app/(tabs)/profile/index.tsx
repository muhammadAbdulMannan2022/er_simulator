import Layout from 'components/layout';
import { COLORS } from 'constants/color';
import { Image, Text, TouchableOpacity, View, Modal, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import {
  X,
  CreditCard,
  Bell,
  Globe,
  CircleQuestionMark,
  Headset,
  TriangleAlert,
  EarthLock,
  LogOut,
  FileQuestionMark,
  ChevronDown,
} from 'lucide-react-native';
import Suggession from '../../../assets/svgs/suggestion.svg';
import Upload from '../../../assets/svgs/upload.svg';
import Question from '../../../assets/svgs/question.svg';
import { useRouter } from 'expo-router';

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [languageModalVisible, setLanguageModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const router = useRouter();
  return (
    <Layout>
      <View style={{ justifyContent: 'center', alignItems: 'center', height: 35, marginTop: 20 }}>
        <Text className="font-roboto font-semibold " style={{ fontSize: 26 }}>
          My Profile
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 30,
          // gap: 50,
          backgroundColor: '#DAE8E8',
          paddingVertical: 15,
          paddingHorizontal: 12,
        }}>
        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
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
            <Text className="font-roboto font-bold " style={{ fontSize: 24, color: COLORS.deep }}>
              Selena Gomez
            </Text>
            <Text className="font-roboto font-normal " style={{ fontSize: 14, color: '#40464B' }}>
              User Specialist
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => router.push('/profile/editprofile')}
          style={{
            backgroundColor: '#527F7B',
            paddingHorizontal: 20,
            paddingVertical: 12,
            borderRadius: 8,
          }}>
          <Text className="font-roboto font-medium " style={{ fontSize: 14, color: '#ffffff' }}>
            Edit Profile
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: '92%', marginHorizontal: 'auto' }}>
        <View style={{ marginTop: 40, marginBottom: 20 }}>
          <Text
            className="font-roboto font-semibold "
            style={{ fontSize: 24, color: '#163A53', marginBottom: 15 }}>
            Career Overview
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 20 }}>
            <View
              style={{
                backgroundColor: '#527F7B',
                flex: 1,
                paddingVertical: 20,
                gap: 12,
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.4,
                shadowRadius: 3,
                elevation: 4,
              }}>
              <Text
                className="text-center font-roboto font-semibold"
                style={{ fontSize: 32, color: '#fff' }}>
                24
              </Text>
              <Text
                className="text-center font-roboto font-normal"
                style={{ fontSize: 16, color: '#fff' }}>
                Taken{'\n'}Cases
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#C6C6C6',
                flex: 1,
                paddingVertical: 20,
                gap: 12,
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.4,
                shadowRadius: 3,
                elevation: 4,
              }}>
              <Text
                className="text-center font-roboto font-semibold"
                style={{ fontSize: 32, color: '#40464B' }}>
                4
              </Text>
              <Text
                className="text-center font-roboto font-normal"
                style={{ fontSize: 16, color: '#40464B' }}>
                Favorite{'\n'}Cases
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#319151',
                flex: 1,
                paddingVertical: 20,
                gap: 12,
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.4,
                shadowRadius: 3,
                elevation: 4,
              }}>
              <Text
                className="text-center font-roboto font-semibold"
                style={{ fontSize: 32, color: '#fff' }}>
                89%
              </Text>
              <Text
                className="text-center font-roboto font-normal"
                style={{ fontSize: 16, color: '#fff' }}>
                Average{'\n'}Score
              </Text>
            </View>
          </View>
        </View>
        {/* Simulations Dashboard */}
        <View style={{ marginTop: 20 }}>
          <View
            style={{
              backgroundColor: '#1E5A9F',
              borderRadius: 10,
              padding: 15,
              paddingBottom: 25,
            }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>Remaining Simulations</Text>
              <Text style={{ color: '#fff', fontSize: 22, fontWeight: '700' }}>2</Text>
            </View>
            
            <View style={{ height: 8, backgroundColor: '#fff', borderRadius: 4, marginTop: 15, overflow: 'hidden', flexDirection: 'row' }}>
              <View style={{ flex: 0.6, backgroundColor: '#0C3B6E' }} />
              <View style={{ flex: 0.4 }} />
            </View>
            
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
              <Text style={{ color: '#fff', fontSize: 10 }}>Renew Date : <Text style={{ fontWeight: '700', color: '#00F2B1' }}>14 December</Text></Text>
              <Text style={{ color: '#fff', fontSize: 12, opacity: 0.8 }}>3/5</Text>
            </View>
          </View>
        </View>

        <View style={{ gap: 15, marginBottom: 40, marginTop: 25 }}>
          <TouchableOpacity
            onPress={() => router.push('/profile/improvementsugg')}
            style={{
              flexDirection: 'row',
              backgroundColor: '#406D6B',
              padding: 16,
              borderRadius: 10,
              gap: 12,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 3,
              elevation: 4,
            }}>
            <Suggession width={24} height={24} />
            <Text className="font-roboto font-medium " style={{ fontSize: 18, color: '#fff' }}>
              Suggested Improvements
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              backgroundColor: '#10A9B3',
              padding: 16,
              borderRadius: 10,
              gap: 12,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 3,
              elevation: 4,
            }}>
            <Upload width={24} height={24} />
            <Text className="font-roboto font-medium " style={{ fontSize: 18, color: '#fff' }}>
              Upload Simulations
            </Text>
          </TouchableOpacity>
          <Text style={{ textAlign: 'center', fontSize: 11, color: '#163A53', marginTop: -5 }}>
            ( 24H Processing If Approved )
          </Text>
          
          <TouchableOpacity
            onPress={() => router.push('/profile/quiz')}
            style={{
              flexDirection: 'row',
              backgroundColor: '#E39348',
              padding: 16,
              borderRadius: 10,
              gap: 12,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 3,
              elevation: 4,
            }}>
            <Question width={24} height={24} />
            <Text className="font-roboto font-medium" style={{ fontSize: 18, color: '#fff' }}>
              My Quiz
            </Text>
            <View
              style={{
                backgroundColor: '#D20000',
                paddingHorizontal: 12,
                paddingVertical: 4,
                borderRadius: 15,
                marginLeft: 'auto',
              }}>
              <Text className="font-roboto font-semibold" style={{ fontSize: 14, color: '#fff' }}>
                4/5
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ marginBottom: 40 }}>
          <Text
            className="font-roboto font-semibold "
            style={{ fontSize: 24, color: '#163A53', marginBottom: 15 }}>
            Settings
          </Text>
          <View style={{ gap: 12 }}>
            <TouchableOpacity
              onPress={() => router.push('/profile/subscription')}
              style={styles.settingItem}>
              <CreditCard color={'#163A53'} size={20} />
              <Text style={styles.settingText}>My Subscription</Text>
            </TouchableOpacity>

            <View style={styles.settingItem}>
              <Bell color={'#163A53'} size={20} />
              <Text style={styles.settingText}>Notifications</Text>
              <TouchableOpacity
                onPress={() => setNotificationsEnabled(!notificationsEnabled)}
                activeOpacity={0.8}
                style={{
                  padding: 2,
                  marginLeft: 'auto',
                  width: 45,
                  height: 24,
                  borderRadius: 12,
                  backgroundColor: notificationsEnabled ? '#E37648' : '#D1D5DB',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    backgroundColor: '#fff',
                    marginLeft: notificationsEnabled ? 'auto' : 0,
                  }}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => setLanguageModalVisible(true)}
              style={styles.settingItem}>
              <Globe color={'#163A53'} size={20} />
              <Text style={styles.settingText}>Language</Text>
              <View style={styles.languagePill}>
                <Text style={styles.languageText}>{selectedLanguage}</Text>
                <ChevronDown size={14} color="#527F7B" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push('/profile/savedcertificates')}
              style={styles.settingItem}>
              <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', flex: 1 }}>
                <CircleQuestionMark color={'#163A53'} size={20} />
                <Text style={styles.settingText}>My Learning Certificates</Text>
              </View>
              <View style={styles.certBadge}>
                <Text style={styles.certBadgeText}>5</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push('/profile/faq')}
              style={styles.settingItem}>
              <FileQuestionMark color={'#163A53'} size={20} />
              <Text style={styles.settingText}>FAQ</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push('/profile/support')}
              style={styles.settingItem}>
              <Headset color={'#163A53'} size={20} />
              <Text style={styles.settingText}>Help & Support</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingItem}>
              <EarthLock color={'#163A53'} size={20} />
              <Text style={styles.settingText}>Privacy Policy</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingItem}>
              <TriangleAlert color={'#163A53'} size={20} />
              <Text style={styles.settingText}>Terms & Conditions</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginBottom: 60 }}>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={{
              width: '100%',
              flexDirection: 'row',
              backgroundColor: '#EDFDFF',
              paddingVertical: 15,
              borderRadius: 10,
              gap: 10,
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 3,
              elevation: 2,
            }}>
            <LogOut color={'#40464B'} size={20} />
            <Text className="font-roboto font-medium" style={{ fontSize: 18, color: '#40464B' }}>
              Log Out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            backgroundColor: COLORS.bgdeep + 'AA',
          }}>
          <View
            style={{
              width: '100%',
              backgroundColor: 'white',
              borderRadius: 20,
              paddingBottom: 60,
              padding: 25,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}>
            <Text
              className="font-roboto font-bold"
              style={{ fontSize: 24, color: '#163A53', marginBottom: 15 }}>
              Log Out
            </Text>
            <Text
              className="font-roboto"
              style={{
                fontSize: 16,
                color: '#40464B',
                textAlign: 'center',
                marginBottom: 30,
              }}>
              Are you sure you want to Log out?
            </Text>
            <View style={{ flexDirection: 'row', gap: 15, width: '100%' }}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  // Add actual logout logic here
                  router.replace('/auth/login');
                }}
                style={{
                  flex: 1,
                  backgroundColor: '#D24B4B',
                  paddingVertical: 12,
                  borderRadius: 10,
                  alignItems: 'center',
                }}>
                <Text
                  className="font-roboto font-bold"
                  style={{ fontSize: 16, color: 'white' }}>
                  Log Out
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={{
                  flex: 1,
                  backgroundColor: '#E5E7EB',
                  paddingVertical: 12,
                  borderRadius: 10,
                  alignItems: 'center',
                }}>
                <Text
                  className="font-roboto font-bold"
                  style={{ fontSize: 16, color: '#4B5563' }}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Language Selection Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={languageModalVisible}
        onRequestClose={() => setLanguageModalVisible(false)}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setLanguageModalVisible(false)}
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              padding: 20,
              paddingBottom: 40,
            }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <Text style={{ fontSize: 20, fontWeight: '700', color: '#163A53' }}>Select Language</Text>
              <TouchableOpacity onPress={() => setLanguageModalVisible(false)}>
                <X size={24} color="#163A53" />
              </TouchableOpacity>
            </View>
            {['English', 'Spanish', 'French', 'German', 'Chinese'].map((lang) => (
              <TouchableOpacity
                key={lang}
                onPress={() => {
                  setSelectedLanguage(lang);
                  setLanguageModalVisible(false);
                }}
                style={{
                  paddingVertical: 15,
                  borderBottomWidth: 1,
                  borderBottomColor: '#F3F4F6',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: selectedLanguage === lang ? '#346C6C' : '#40464B',
                    fontWeight: selectedLanguage === lang ? '700' : '400',
                  }}>
                  {lang}
                </Text>
                {selectedLanguage === lang && (
                  <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#346C6C' }} />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </Layout>
  );
}

const styles = StyleSheet.create({
  settingItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    gap: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  settingText: {
    fontFamily: 'Roboto',
    fontSize: 18,
    color: '#163A53',
    fontWeight: '400',
  },
  languagePill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#E6F0F0',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 15,
    marginLeft: 'auto',
    borderWidth: 1,
    borderColor: '#A8D3D3',
  },
  languageText: {
    fontSize: 12,
    color: '#527F7B',
    fontWeight: '500',
  },
  certBadge: {
    backgroundColor: '#38A181',
    width: 35,
    height: 22,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  certBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});
