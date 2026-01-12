import { View, Text, TouchableOpacity, ScrollView, FlatList, Dimensions } from 'react-native';
import React, { useState, useRef } from 'react';
import Layout from 'components/layout';
import { COLORS } from 'constants/color';
import { Check, Circle, Clock, CheckCircle2, X } from 'lucide-react-native';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');

const plans = [
  {
    id: '1',
    name: 'Starter',
    price: '$19',
    subtitle: 'Getting Started',
    color: '#14363A',
    dotColor: '#1E585D',
    priceColor: '#2EABB5',
    featureColor: '#4ADE80',
  },
  {
    id: '2',
    name: 'Pro',
    price: '$49',
    subtitle: 'Most Popular',
    color: '#163A53', // Deep Blue
    dotColor: '#205072',
    priceColor: '#30C5D2',
    featureColor: '#4ADE80',
  },
  {
    id: '3',
    name: 'Business',
    price: '$99',
    subtitle: 'For Teams',
    color: '#2C1B47', // Deep Purple
    dotColor: '#452A6F',
    priceColor: '#A476E8',
    featureColor: '#4ADE80',
  },
];

const Subscription = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleScroll = (event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);
    if (roundIndex !== activeIndex) {
      setActiveIndex(roundIndex);
    }
  };

  const renderPlan = ({ item }) => (
    <View style={{ width: width * 0.92, paddingHorizontal: 5 }}>
      <View
        style={{
          backgroundColor: item.color,
          borderRadius: 12,
          padding: 20,
          borderWidth: 1,
          borderColor: item.color,
          borderStyle: 'dashed',
        }}>
        {/* Plan Header */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            {/* Custom Radio Button */}
            <View
              style={{
                height: 24,
                width: 24,
                borderRadius: 12,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 14,
                  width: 14,
                  borderRadius: 7,
                  backgroundColor: item.dotColor,
                }}
              />
            </View>
            <Text className="font-roboto font-bold text-white" style={{ fontSize: 22 }}>
              {item.name}
            </Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text
              className="font-roboto font-bold"
              style={{ fontSize: 28, color: item.priceColor }}>
              {item.price}
            </Text>
            <Text className="font-roboto text-gray-400" style={{ fontSize: 12 }}>
              User | Month
            </Text>
          </View>
        </View>

        <View style={{ marginLeft: 34, marginBottom: 20 }}>
          <Text className="font-roboto text-gray-300" style={{ fontSize: 14 }}>
            {item.subtitle}
          </Text>
          <Text
            className="font-roboto"
            style={{ fontSize: 14, marginTop: 2, color: item.featureColor }}>
            5 Sim Experiences/month
          </Text>
        </View>

        {/* Features List */}
        <View style={{ gap: 12 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <View
              style={{
                backgroundColor: '#E26C39',
                borderRadius: 10,
                padding: 2,
              }}>
              <Check size={12} color="white" />
            </View>
            <Text className="font-roboto text-white font-normal text-sm flex-1">
              Great for trying out AI powered ER simulations
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <View
              style={{
                backgroundColor: '#E26C39',
                borderRadius: 10,
                padding: 2,
              }}>
              <Check size={12} color="white" />
            </View>
            <Text className="font-roboto text-white font-normal text-sm flex-1">
              Sim Experiences reload every month
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <View
              style={{
                backgroundColor: '#E26C39',
                borderRadius: 10,
                padding: 2,
              }}>
              <Check size={12} color="white" />
            </View>
            <Text className="font-roboto text-white font-normal text-sm flex-1">
              First month free
            </Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <Layout>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
          <Text className="font-roboto font-semibold " style={{ fontSize: 26, color: '#163A53' }}>
            My Subscription
          </Text>
          <Text
            className="font-roboto font-normal"
            style={{ fontSize: 14, color: '#E26C39', marginTop: 5 }}>
            Unlock your full potential with Pro
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

        <View style={{ marginTop: 30 }}>
          <FlatList
            data={plans}
            renderItem={renderPlan}
            keyExtractor={(item) => item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            contentContainerStyle={{ paddingHorizontal: (width * 0.08) / 2 }} // Center content roughly if parent margin not used
            // Actually, simpler to just wrap FlatList in the parent margin view OR keep separate
            // Let's use the parent container approach for layout consistency but FlatList needs full width for scrolling
          />

          {/* Wrapper for the rest of content to maintain alignment */}
          <View style={{ width: '92%', marginHorizontal: 'auto' }}>
            {/* Pagination Dots */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 8,
                marginVertical: 20,
              }}>
              {plans.map((_, index) => (
                <View
                  key={index}
                  style={{
                    height: 8,
                    width: 8,
                    borderRadius: 4,
                    backgroundColor: index === activeIndex ? '#346C6C' : '#D1D5DB',
                  }}
                />
              ))}
            </View>

            {/* Current Status */}
            <Text
              className="font-roboto font-bold"
              style={{ fontSize: 22, color: '#163A53', marginBottom: 15 }}>
              Current Status
            </Text>

            <View
              style={{
                backgroundColor: '#346C6C',
                borderRadius: 12,
                padding: 20,
              }}>
              <View
                style={{
                  backgroundColor: '#447C7C', // Slightly lighter inner bg
                  borderRadius: 8,
                  padding: 15,
                  borderWidth: 1,
                  borderColor: '#5B8F8F',
                  marginBottom: 20,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                    <Text className="font-roboto font-bold text-white" style={{ fontSize: 20 }}>
                      Free Trial
                    </Text>
                    <View
                      style={{
                        backgroundColor: '#2F5D5D',
                        paddingHorizontal: 6,
                        paddingVertical: 2,
                        borderRadius: 4,
                      }}>
                      <Text style={{ color: '#A5DCDC', fontSize: 10, fontWeight: 'bold' }}>
                        ACTIVE
                      </Text>
                    </View>
                  </View>

                  {/* Basic Plan Button */}
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#E26C39',
                      paddingHorizontal: 12,
                      paddingVertical: 8,
                      borderRadius: 6,
                    }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12 }}>
                      Basic Plan
                    </Text>
                  </TouchableOpacity>
                </View>

                <View
                  style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 10 }}>
                  <Clock size={14} color="#D1D5DB" />
                  <Text className="font-roboto text-gray-300" style={{ fontSize: 14 }}>
                    16 Days Remains
                  </Text>
                </View>
                <Text
                  className="font-roboto text-gray-400"
                  style={{ fontSize: 12, marginTop: 8 }}>
                  Started Oct 24, 2023
                </Text>
              </View>

              {/* Features below inner card */}
              <View style={{ gap: 10, paddingLeft: 5 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                  <CheckCircle2 size={20} color="#E26C39" fill="#E26C39" stroke={'white'} />
                  <Text className="font-roboto text-white font-normal">Up To 5 Simulations</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                  <CheckCircle2 size={20} color="#E26C39" fill="#E26C39" stroke={'white'} />
                  <Text className="font-roboto text-white font-normal">Basic Feedback</Text>
                </View>
              </View>
            </View>

            {/* Footer Disclaimer */}
            <Text
              className="font-roboto text-center"
              style={{
                fontSize: 12,
                color: '#E26C39',
                marginTop: 20,
                lineHeight: 18,
                paddingHorizontal: 10,
                marginBottom: 30,
              }}>
              You’re In Your Free First Month. Your Sim Experiences Will Continue Each Month As Long
              As Your Subscription Stays Active
            </Text>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};

export default Subscription;
