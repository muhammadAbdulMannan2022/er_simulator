import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Layout from 'components/layout';
import { COLORS } from 'constants/color';
import { ArrowDownRight, ArrowUpRight, CircleCheckBig, X } from 'lucide-react-native';
import { router } from 'expo-router';
import Collapsible from 'react-native-collapsible';

const FAQ = () => {
  const [isCollapsed1, setIsCollapsed1] = useState(true);
  // const [isCollapsed2, setIsCollapsed2] = useState(true);
  return (
    <Layout>
      <View
        style={{ justifyContent: 'center', alignItems: 'center', height: 35, marginVertical: 20 }}>
        <Text className="font-roboto font-semibold " style={{ fontSize: 26 }}>
          FAQ
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
      <ScrollView contentContainerStyle={styles.container}>
        {/* Collapsible 1 */}
        <View style={styles.card}>
          <TouchableOpacity style={styles.header} onPress={() => setIsCollapsed1(!isCollapsed1)}>
            <Text style={styles.headerText}>What is a Sim Experience?</Text>
            <View>
              {isCollapsed1 ? (
                <ArrowDownRight color={'#1D3856'} />
              ) : (
                <ArrowUpRight color={'#1D3856'} />
              )}
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={isCollapsed1}>
            <View style={styles.content}>
              <Text style={styles.contentText}>
                A Sim Experience is one full run of an AI-powered simulation scenario. Each plan
                includes a set number of Sim Experiences that reload every month.
              </Text>
            </View>
          </Collapsible>
        </View>
      </ScrollView>
    </Layout>
  );
};

export default FAQ;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  card: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#EDEDED',
    borderRadius: 10,
    overflow: 'hidden',
  },
  header: {
    backgroundColor: '#E4EEEE',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    color: '#1D3856',
    fontSize: 18,
  },
  content: {
    padding: 15,
    backgroundColor: '#E4EEEE',
  },
  contentText: {
    color: '#363636',
    fontSize: 14,
    flexWrap: 'wrap',
  },
});
