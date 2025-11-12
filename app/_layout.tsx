import { Stack } from 'expo-router';
import 'nativewind';
import ToastManager from 'toastify-react-native';
import '../global.css';
import { KeyboardProvider } from 'react-native-keyboard-controller';

export default function RootLayout() {
  return (
    <KeyboardProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
      <ToastManager />
    </KeyboardProvider>
  );
}
