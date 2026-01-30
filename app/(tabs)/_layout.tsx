import NoRippleTabButton from 'components/no-rippler-pressable';
import { Tabs } from 'expo-router';
import { Briefcase, Settings2, UserRound } from 'lucide-react-native';
import { StatusBar, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { cn } from 'utils';
import CustomTabBar from 'components/CustomTabBar';
import { StyledTabs } from 'components/tabs';
import { Svg, Path } from 'react-native-svg';

export default function Layout() {
  const insets = useSafeAreaInsets();

  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <SafeAreaView className="flex-1 bg-offWhite" edges={['top', 'left', 'right']}>
        <View className={cn('flex-1 border-none bg-[#fff]')}>
          <StyledTabs
            screenOptions={{
              headerShown: false,
              tabBarStyle: {
                height: 40 + (insets.bottom || 0),
                paddingBottom: insets.bottom || 0,
                backgroundColor: '#fff',
                borderTopWidth: 0,
                // iOS shadow
                shadowColor: '#000',
                shadowOffset: { width: 0, height: -4 },
                shadowOpacity: 0.1,
                shadowRadius: 6,

                // Android shadow
                elevation: 6,
              },
              tabBarActiveTintColor: '#346C6C',
              tabBarInactiveTintColor: '#fff',
              tabBarButton: (props) => <NoRippleTabButton {...props} />,
            }}
            tabBar={(props) => <CustomTabBar {...props} />}>
            <Tabs.Screen
              name="home"
              options={{
                title: 'Home',
                tabBarIcon: ({ color }) => (
                  <Svg width="33" height="34" viewBox="0 0 33 34" fill="none">
                    <Path
                      d="M29.7528 8.00838L20.2582 1.30944C17.6703 -0.51906 13.6978 -0.419323 11.2088 1.52553L2.95055 8.02501C1.3022 9.32158 0 11.9812 0 14.0757V25.5453C0 29.7841 3.41209 33.2416 7.61538 33.2416H25.3846C29.5879 33.2416 33 29.8007 33 25.5619V14.2918C33 12.0477 31.5659 9.28833 29.7528 8.00838ZM17.7363 26.5926C17.7363 27.2741 17.1758 27.8393 16.5 27.8393C15.8242 27.8393 15.2637 27.2741 15.2637 26.5926V21.6057C15.2637 20.9242 15.8242 20.359 16.5 20.359C17.1758 20.359 17.7363 20.9242 17.7363 21.6057V26.5926Z"
                      fill={color}
                    />
                  </Svg>
                ),
              }}
            />
            <Tabs.Screen
              name="my-plan"
              options={{
                title: 'My Sims',
                tabBarIcon: ({ color }) => (
                  <Svg width="19" height="28" viewBox="0 0 19 28" fill="none">
                    <Path
                      d="M2.5 27.5C1.8125 27.5 1.22417 27.2554 0.735 26.7663C0.245833 26.2771 0.000833333 25.6883 0 25V2.5C0 1.8125 0.245 1.22417 0.735 0.735C1.225 0.245833 1.81333 0.000833333 2.5 0H15C15.6875 0 16.2763 0.245 16.7663 0.735C17.2563 1.225 17.5008 1.81333 17.5 2.5V6.375C17.875 6.52083 18.1771 6.75 18.4062 7.0625C18.6354 7.375 18.75 7.72917 18.75 8.125V10.625C18.75 11.0208 18.6354 11.375 18.4062 11.6875C18.1771 12 17.875 12.2292 17.5 12.375V25C17.5 25.6875 17.2554 26.2763 16.7663 26.7663C16.2771 27.2563 15.6883 27.5008 15 27.5H2.5ZM8.75 6.25C9.10417 6.25 9.40125 6.13 9.64125 5.89C9.88125 5.65 10.0008 5.35333 10 5C9.99917 4.64667 9.87917 4.35 9.64 4.11C9.40083 3.87 9.10417 3.75 8.75 3.75C8.39583 3.75 8.09917 3.87 7.86 4.11C7.62083 4.35 7.50083 4.64667 7.5 5C7.49917 5.35333 7.61917 5.65042 7.86 5.89125C8.10083 6.13208 8.3975 6.25167 8.75 6.25Z"
                      fill={color}
                    />
                  </Svg>
                ),
              }}
            />
            <Tabs.Screen
              name="settings"
              options={{
                title: 'Progress',
                tabBarIcon: ({ color }) => (
                  <Svg width="29" height="30" viewBox="0 0 29 30" fill="none">
                    <Path
                      d="M28.0888 8.5306V23.5269C28.0794 23.7086 28.027 23.8855 27.936 24.043C27.8449 24.2006 27.7178 24.3343 27.565 24.4331L27.0737 24.7269C24.6225 26.1456 22.465 27.3944 20.285 28.6519V12.4344L6.24375 4.31685C8.67375 2.92185 11.095 1.5131 13.5275 0.124354C13.6898 0.0425906 13.8689 0 14.0506 0C14.2323 0 14.4115 0.0425906 14.5738 0.124354L28.0863 7.9281V8.5306H28.0888ZM17.1625 14.2331C13.9575 12.38 10.7517 10.5283 7.545 8.6781C7.38246 8.59729 7.2034 8.55523 7.02187 8.55523C6.84035 8.55523 6.66129 8.59729 6.49875 8.6781C4.33208 9.9281 2.16583 11.1798 0 12.4331L10.1412 18.2881V29.9994C12.3062 28.7506 14.4663 27.4919 16.6375 26.2556C16.7894 26.1561 16.9159 26.0225 17.0069 25.8653C17.0978 25.7082 17.1507 25.5319 17.1613 25.3506L17.1625 14.2331ZM0.00124998 24.1456L7.0175 28.1969V20.0869L0.00124998 24.1456Z"
                      fill={color}
                    />
                  </Svg>
                ),
              }}
            />
            <Tabs.Screen
              name="profile"
              options={{
                title: 'Profile',
                tabBarIcon: ({ color }) => (
                  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <Path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.66667 5.33333C6.66667 3.91885 7.22857 2.56229 8.22876 1.5621C9.22896 0.561903 10.5855 0 12 0C13.4145 0 14.771 0.561903 15.7712 1.5621C16.7714 2.56229 17.3333 3.91885 17.3333 5.33333C17.3333 6.74782 16.7714 8.10438 15.7712 9.10457C14.771 10.1048 13.4145 10.6667 12 10.6667C10.5855 10.6667 9.22896 10.1048 8.22876 9.10457C7.22857 8.10438 6.66667 6.74782 6.66667 5.33333ZM6.66667 13.3333C4.89856 13.3333 3.20286 14.0357 1.95262 15.286C0.702379 16.5362 0 18.2319 0 20C0 21.0609 0.421427 22.0783 1.17157 22.8284C1.92172 23.5786 2.93913 24 4 24H20C21.0609 24 22.0783 23.5786 22.8284 22.8284C23.5786 22.0783 24 21.0609 24 20C24 18.2319 23.2976 16.5362 22.0474 15.286C20.7971 14.0357 19.1014 13.3333 17.3333 13.3333H6.66667Z"
                      fill={color}
                    />
                  </Svg>
                ),
              }}
            />
          </StyledTabs>
        </View>
      </SafeAreaView>
    </>
  );
}
