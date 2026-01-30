import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import Layout from 'components/layout';
import { COLORS } from 'constants/color';
import { CircleCheckBig, History, LockKeyhole, X } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import Success from '../../../assets/svgs/success.svg';
import { BlurView } from '@react-native-community/blur';

const QuizResult = () => {
  const router = useRouter();

  const objectives = [
    { text: 'Recognize STEMI On EKG And Initiate Appropriate Treatment', unlocked: true },
    { text: 'Recognize STEMI On EKG And Initiate Appropriate Treatment', unlocked: true },
    { text: 'Recognize STEMI On EKG And Initiate Appropriate Treatment', unlocked: false },
  ];

  return (
    <Layout>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.closeBtn}>
          <X size={28} color={'#fff'} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Result Overview</Text>
      </View>

      {/* Success Banner */}
      <View style={styles.banner}>
        <Success width={80} height={80} />
        <Text style={styles.caseComplete}>Case Complete!</Text>
        <Text style={styles.caseTitle}>Acute Myocardial Infarction With Cardogenic Shock</Text>
      </View>

      {/* Performance Card */}
      <View style={styles.performanceCard}>
        <Text style={styles.overallScore}>85%</Text>
        <Text style={styles.overallLabel}>Overall Performance</Text>

        <View style={styles.statsRow}>
          <View style={[styles.statBox, { backgroundColor: '#579DA2' }]}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Correct{"\n"}Actions</Text>
          </View>
          <View style={[styles.statBox, { backgroundColor: '#D94D4D' }]}>
            <Text style={styles.statValue}>3</Text>
            <Text style={styles.statLabel}>Wrong{"\n"}Actions</Text>
          </View>
          <View style={[styles.statBox, { backgroundColor: '#075F6E' }]}>
            <Text style={styles.statValue}>5:00</Text>
            <Text style={styles.statLabel}>Sim Time{"\n"}(Min)</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.historyBtn}>
          <History size={20} color="#fff" />
          <Text style={styles.historyBtnText}>View Chat History</Text>
        </TouchableOpacity>
      </View>

      {/* Objectives Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Learned Objectives:</Text>
        <View style={styles.objectivesList}>
          {objectives.map((obj, index) => (
            <View key={index} style={styles.objectiveItem} className='border border-[#346C6C]/50'>
              <View style={styles.objectiveContent}>
                <CircleCheckBig color="#346C6C" size={24} />
                <Text style={styles.objectiveText}>{obj.text}</Text>
              </View>

              {!obj.unlocked && (
                <>
                  <BlurView
                    blurType="light"
                    blurAmount={1}
                    style={[StyleSheet.absoluteFill, { borderRadius: 8 }]}
                  />
                  <View style={styles.lockOverlay}>
                    <Text style={styles.lockText}>Complete The Simulation To Unlock</Text>
                    <LockKeyhole size={18} color="#527F7B" />
                  </View>
                </>
              )}
            </View>
          ))}
        </View>
      </View>

      {/* Action Buttons */}
      <View className='flex-row items-center justify-center gap-[15px] px-5 mt-5'>
        <TouchableOpacity className="flex-1 items-center justify-center rounded-lg bg-[#346C6C] py-[15px]">
          <Text className="text-lg font-semibold text-[#fff]">Mark As Complete</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 items-center justify-center rounded-lg bg-[#E26C39] py-[15px]">
          <Text className="text-lg font-semibold text-[#fff]">Retake Simulations</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={styles.nextCaseBtn}>
        <Text style={styles.btnText}>Next case</Text>
      </TouchableOpacity>

      {/* Takeaways Section */}
      <View style={styles.takeawaysSection}>
        <Text style={styles.sectionTitle}>Your Takeaways</Text>
        <View style={styles.takeawaysCard}>
          <Text style={styles.takeawayItem}>• I've Made A Progress On....</Text>
          <Text style={styles.takeawayItem}>• I've Made A Progress On....</Text>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
    position: 'relative',
    height: 50,
  },
  closeBtn: {
    backgroundColor: '#82A4A5',
    borderRadius: 25,
    padding: 2,
    zIndex: 10,
  },
  headerTitle: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    color: '#026672',
    fontFamily: 'Roboto',
  },
  banner: {
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 30,
  },
  caseComplete: {
    fontSize: 28,
    fontWeight: '600',
    color: '#E26C39',
    marginTop: 10,
  },
  caseTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#163A53',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 24,
  },
  performanceCard: {
    backgroundColor: '#346C6C',
    marginHorizontal: 16,
    marginTop: 25,
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
  },
  overallScore: {
    fontSize: 60,
    fontWeight: '700',
    color: '#fff',
  },
  overallLabel: {
    fontSize: 18,
    color: '#fff',
    marginTop: -5,
    opacity: 0.9,
  },
  statsRow: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 12,
  },
  statBox: {
    flex: 1,
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
  },
  statLabel: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
    opacity: 0.9,
    lineHeight: 16,
  },
  historyBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    paddingVertical: 10,
    width: '100%',
    justifyContent: 'center',
    gap: 10,
  },
  historyBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  section: {
    paddingHorizontal: 16,
    marginTop: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#346C6C',
    marginBottom: 12,
  },
  objectivesList: {
    gap: 10,
  },
  objectiveItem: {
    backgroundColor: '#F2F4F5',
    borderRadius: 8,
    overflow: 'hidden',
    minHeight: 80,
    justifyContent: 'center',
  },
  objectiveContent: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  objectiveText: {
    flex: 1,
    fontSize: 14,
    color: '#40464B',
    lineHeight: 18,
  },
  lockOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingHorizontal: 20,
  },
  lockText: {
    color: '#527F7B',
    fontSize: 14,
    fontWeight: '600',
  },
  lockedIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#ccc',
  },
  buttonRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 20,
    gap: 12,
  },
  markCompleteBtn: {
    flex: 1,
    backgroundColor: '#346C6C',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
  },
  retakeBtn: {
    flex: 1,
    backgroundColor: '#E26C39',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
  },
  nextCaseBtn: {
    backgroundColor: '#578484',
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  takeawaysSection: {
    paddingHorizontal: 16,
    marginTop: 25,
    marginBottom: 40,
  },
  takeawaysCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    minHeight: 100,
  },
  takeawayItem: {
    fontSize: 14,
    color: '#40464B',
    marginBottom: 10,
  },
});

export default QuizResult;
