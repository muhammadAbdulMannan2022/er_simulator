import { COLORS } from 'constants/color';
import { ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.offWhite }}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.offWhite} />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, backgroundColor: COLORS.offWhite, paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
