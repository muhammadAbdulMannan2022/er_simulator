import { COLORS } from 'constants/color';
import { ScrollView, StatusBar, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Layout({ children }: { children?: React.ReactNode }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.offWhite }}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.offWhite} />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: COLORS.offWhite,
          paddingBottom: 20,
          paddingTop: insets.top - 50, // Respect the notch here, inside the scroll view
        }}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}>
        {children}
      </ScrollView>
    </View>
  );
}
