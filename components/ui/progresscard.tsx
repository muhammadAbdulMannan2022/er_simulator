import { View, Text, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from 'constants/color';
import { LinearGradient } from 'expo-linear-gradient';
import Point from '../../assets/svgs/point.svg';
import { getGradientColorAt } from 'utils/gradientcolor';
import { AlertCircle, ChevronDown, ChevronUp } from 'lucide-react-native';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const gradientStops = [
  { stop: 0, color: '#152CAF' },
  { stop: 0.18, color: '#0D2780' },
  { stop: 0.41, color: '#133A75' },
  { stop: 0.68, color: '#377FA9' },
  { stop: 0.95, color: '#2FA4B3' },
  { stop: 1, color: '#2EABB5' },
];

const ProgressCard = ({ serial, complete }) => {
  const [expanded, setExpanded] = useState(false);
  const color = getGradientColorAt(0.6, gradientStops);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  const actions = [
    'Check oxygen saturation before administering supplemental oxygen.',
    'Check oxygen saturation before administering supplemental oxygen.',
    'Check oxygen saturation before administering supplemental oxygen.',
  ];

  return (
    <View style={{ backgroundColor: 'white', borderRadius: 12, overflow: 'hidden' }}>
      {/* Ribbon Serial */}
      <View style={{ position: 'absolute', top: 0, left: 20, zIndex: 10 }}>
        <View
          style={{
            backgroundColor: '#fff',
            paddingHorizontal: 12,
            paddingBottom: 8,
            paddingTop: 0,
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 2,
            elevation: 3,
          }}>
          <Text className="font-roboto text-lg font-bold text-black">{serial}</Text>
        </View>
        {/* Triangle cutout effect for ribbon usually needs SVG or complex borders, simplifying to a tag for now */}
      </View>

      {/* Main Card Content */}
      <View
        style={{
          backgroundColor: '#447070', // Matching the teal/slate color from screenshot
          paddingTop: 45, // Space for ribbon
          paddingHorizontal: 15,
          paddingBottom: 20,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}>
        {/* Top Right Status */}
        <View style={{ position: 'absolute', top: 15, right: 15 }}>
          <Text className="font-roboto text-xs font-medium text-white">
            {complete ? '100% Complete' : '50% Complete'}
          </Text>
        </View>

        <Text className="font-roboto text-xl font-bold text-white mb-1">
          Acute MI With Cardiogenic Shock
        </Text>
        <Text className="font-roboto text-sm text-gray-200 mb-6">
          58-Year-Old Male Presenting With Chest Pain And Hypotension...
        </Text>

        {/* Progress Section */}
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 10 }}>
          <View style={{ flex: 1, marginBottom: 5 }}>
            {/* Custom Progress Bar */}
            <View style={{ height: 18, justifyContent: 'center' }}>
              <View
                style={{
                  height: 12,
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  borderRadius: 6,
                  overflow: 'hidden',
                  width: '100%',
                  borderWidth: 1,
                  borderColor: 'white',
                }}>
                <LinearGradient
                  colors={['#152CAF', '#2EABB5']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{ width: complete ? '100%' : '50%', height: '100%' }}
                />
              </View>

              {/* Knob */}
              <View
                style={{
                  position: 'absolute',
                  left: complete ? '96%' : '46%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: '#2FA4B3',
                    paddingHorizontal: 8,
                    paddingVertical: 2,
                    borderRadius: 10,
                    marginTop: 20, // Position below the bar
                  }}>
                  <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
                    {complete ? '100 %' : '50 %'}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Action Button */}
          <TouchableOpacity
            style={{
              backgroundColor: complete ? '#579D97' : COLORS.orgbtn,
              paddingHorizontal: 20,
              paddingVertical: 8,
              borderRadius: 6,
              marginLeft: 10,
            }}>
            <Text className="font-roboto text-sm font-semibold text-white">
              {complete ? 'Completed' : 'Resume'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Expandable Footer */}
      <View>
        <TouchableOpacity
          onPress={toggleExpand}
          activeOpacity={0.7}
          style={{
            backgroundColor: 'white',
            paddingVertical: 12,
            paddingHorizontal: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <AlertCircle size={20} color={COLORS.orgbtn} />
            <Text className="font-roboto text-sm font-medium text-gray-700">
              Actions to Reconsider
            </Text>
            <View
              style={{
                backgroundColor: '#FFE5D3',
                paddingHorizontal: 8,
                paddingVertical: 2,
                borderRadius: 10,
              }}>
              <Text style={{ color: COLORS.orgbtn, fontSize: 10, fontWeight: 'bold' }}>3</Text>
            </View>
          </View>
          {expanded ? (
            <ChevronUp size={20} color="#9CA3AF" />
          ) : (
            <ChevronDown size={20} color="#9CA3AF" />
          )}
        </TouchableOpacity>

        {/* Expanded Content */}
        {expanded && (
          <View style={{ backgroundColor: '#F3F4F6', padding: 15, gap: 10 }}>
            {actions.map((action, index) => (
              <View
                key={index}
                style={{
                  backgroundColor: 'white',
                  padding: 12,
                  borderRadius: 8,
                  flexDirection: 'row',
                  gap: 10,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.05,
                  shadowRadius: 2,
                  elevation: 1,
                }}>
                <View
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: COLORS.orgbtn,
                    marginTop: 6,
                  }}
                />
                <Text className="font-roboto text-xs text-gray-600 flex-1 leading-5">
                  {action}
                </Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

export default ProgressCard;
