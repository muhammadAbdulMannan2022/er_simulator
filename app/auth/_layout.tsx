import { Stack } from 'expo-router';
import 'nativewind';
import { StatusBar } from 'react-native';
import ToastManager from 'toastify-react-native';
import '../../global.css';

export default function AuthLayout() {
  return (
    <>
      <StatusBar backgroundColor="transparent" translucent={true} barStyle="light-content" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="forgotpass" options={{ headerShown: false }} />
        <Stack.Screen name="otpverify" options={{ headerShown: false }} />
        <Stack.Screen name="setnewpass" options={{ headerShown: false }} />
        <Stack.Screen name="resetsuccessful" options={{ headerShown: false }} />
        <Stack.Screen name="priceplan" options={{ headerShown: false }} />
      </Stack>
      <ToastManager />
    </>
  );
}
