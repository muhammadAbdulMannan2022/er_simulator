import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { COLORS } from 'constants/color';
import Trauma from '../../assets/svgs/trauma.svg';
import Pulm from '../../assets/svgs/pulm.svg';
import Cardiac from '../../assets/svgs/cardiac.svg';
import Neuro from '../../assets/svgs/neuro.svg';
import Toxi from '../../assets/svgs/toxi.svg';
import Ped from '../../assets/svgs/ped.svg';
import { router } from 'expo-router';
import { Colors } from 'toastify-react-native/config/theme';
// import CaseList from '../../app/others/caselist'

const Treatments = () => {
  return (
    <View
      style={{
        borderRadius: 15,
        marginBottom: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4,
      }}>
      <ScrollView
        style={{
          height: 225,
          flex: 1,
          paddingHorizontal: 15,
          paddingTop: 25,
          paddingBottom: 5,
        }}>
        <View style={{ flex: 1, flexDirection: 'row', gap: 10, marginBottom: 20 }}>
          <TouchableOpacity
            onPress={() => router.push('/others/caselist')}
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: COLORS.deep,
              borderRadius: 6,
              borderWidth: 0.5,
              borderColor: COLORS.deep,
            }}>
            <Trauma />
            <Text className="py-3 text-center text-xl font-bold text-white ">Trauma</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 5,
              backgroundColor: '#EDFDFF',
              borderRadius: 6,
              borderWidth: 0.5,
              borderColor: COLORS.deep,
            }}>
            <Pulm />
            <Text className="py-3 text-center text-xl font-bold text-[#40464B] ">Pulmonary</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', gap: 10, marginBottom: 20 }}>
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 5,
              backgroundColor: '#EDFDFF',
              borderRadius: 6,
              borderWidth: 0.5,
              borderColor: COLORS.deep,
            }}>
            <Cardiac />
            <Text className="py-3 text-center text-xl font-bold text-[#40464B] ">Cardiac</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 5,
              backgroundColor: '#EDFDFF',
              borderRadius: 6,
              borderWidth: 0.5,
              borderColor: COLORS.deep,
            }}>
            <Neuro />
            <Text className="py-3 text-center text-xl font-bold text-[#40464B] ">Neurological</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', gap: 10, marginBottom: 20 }}>
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 5,
              backgroundColor: '#EDFDFF',
              borderRadius: 6,
              borderWidth: 0.5,
              borderColor: COLORS.deep,
            }}>
            <Toxi />
            <Text className="py-3 text-center text-xl font-bold text-[#40464B] ">Toxicology</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 5,
              backgroundColor: '#EDFDFF',
              borderRadius: 6,
              borderWidth: 0.5,
              borderColor: COLORS.deep,
            }}>
            <Ped />
            <Text className="py-3 text-center text-xl font-bold text-[#40464B] ">Pediatric</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', gap: 10, marginBottom: 20 }}>
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 5,
              backgroundColor: '#EDFDFF',
              borderRadius: 6,
              borderWidth: 0.5,
              borderColor: COLORS.deep,
            }}>
            <Toxi />
            <Text className="py-3 text-center text-xl font-bold text-[#40464B] ">Example</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 5,
              backgroundColor: '#EDFDFF',
              borderRadius: 6,
              borderWidth: 0.5,
              borderColor: COLORS.deep,
            }}>
            <Ped />
            <Text className="py-3 text-center text-xl font-bold text-[#40464B] ">Example</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', gap: 10, marginBottom: 20 }}>
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 5,
              backgroundColor: '#EDFDFF',
              borderRadius: 6,
              borderWidth: 0.5,
              borderColor: COLORS.deep,
            }}>
            <Toxi />
            <Text className="py-3 text-center text-xl font-bold text-[#40464B] ">Example</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 5,
              backgroundColor: '#EDFDFF',
              borderRadius: 6,
              borderWidth: 0.5,
              borderColor: COLORS.deep,
            }}>
            <Ped />
            <Text className="py-3 text-center text-xl font-bold text-[#40464B] ">Example</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', gap: 10, marginBottom: 20 }}>
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 5,
              backgroundColor: '#EDFDFF',
              borderRadius: 6,
              borderWidth: 0.5,
              borderColor: COLORS.deep,
            }}>
            <Toxi />
            <Text className="py-3 text-center text-xl font-bold text-[#40464B] ">Example</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 5,
              backgroundColor: '#EDFDFF',
              borderRadius: 6,
              borderWidth: 0.5,
              borderColor: COLORS.deep,
            }}>
            <Ped />
            <Text className="py-3 text-center text-xl font-bold text-[#40464B] ">Example</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', gap: 10, marginBottom: 20 }}>
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 5,
              backgroundColor: '#EDFDFF',
              borderRadius: 6,
              borderWidth: 0.5,
              borderColor: COLORS.deep,
            }}>
            <Toxi />
            <Text className="py-3 text-center text-xl font-bold text-[#40464B] ">Example</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 5,
              backgroundColor: '#EDFDFF',
              borderRadius: 6,
              borderWidth: 0.5,
              borderColor: COLORS.deep,
            }}>
            <Ped />
            <Text className="py-3 text-center text-xl font-bold text-[#40464B] ">Example</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Treatments;
