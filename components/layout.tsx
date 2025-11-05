import { SafeAreaView, ScrollView, StatusBar } from 'react-native';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    // <SafeAreaView className="flex-1">
    <ScrollView className="flex-1 bg-[#E5E5E5]" contentContainerStyle={{ paddingBottom: 20 }}>
      {children}
    </ScrollView>
    // </SafeAreaView>
  );
}
