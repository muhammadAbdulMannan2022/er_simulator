import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { cn } from 'utils';

// https://salamina.tech/blog/post/custom-tab-bar-tab-navigation-expo-react-native/
export default function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const [tabBarWidth, setTabBarWidth] = useState(0);
  const tabWidth = tabBarWidth / state.routes.length;
  const translateX = useSharedValue(state.index * tabWidth);

  const indicatorPadding = 20; // px
  const indicatorWidth =
    tabWidth > 2 * indicatorPadding ? tabWidth - 2 * indicatorPadding : tabWidth;

  useEffect(() => {
    translateX.value = withTiming(state.index * tabWidth + indicatorPadding, { duration: 150 });
  }, [state.index, tabWidth, translateX]);

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View
      className="relative flex-row bg-[#fff]"
      style={{
        elevation: 3,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      }}
      onLayout={(e) => setTabBarWidth(e.nativeEvent.layout.width)}>
      {/* Animated Tab Indicator */}
      {tabBarWidth > 0 && (
        <Animated.View
          className="absolute left-0 top-0 z-10 h-2 rounded-lg bg-[#346C6C]"
          style={[{ width: indicatorWidth }, indicatorStyle]}
        />
      )}
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={index}
            android_ripple={{ color: 'transparent' }} // removes ripple
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            className={`pb-safe flex-1 items-center justify-center gap-2 py-4`}>
            {options.tabBarIcon &&
              options.tabBarIcon({
                focused: isFocused,
                color: isFocused ? '#346C6C' : '#BBC3C4',
                size: 28,
              })}
            <Text
              className={cn(
                'text-sm font-medium',
                isFocused ? 'text-[#346C6C]' : 'text-[#BBC3C4]'
              )}>
              {options.title}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
}
