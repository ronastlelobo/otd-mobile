import React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MyTheme } from './src/Utils/Theme';
import Login from './src/Screens/Login/Login';
import MobileNumber from './src/Screens/Login/MobileNumber';
import OTP from './src/Screens/Login/OTP';
import Profile from './src/Screens/Profile/Profile';

const MainStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}
    >
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
};

const LoginStackNavigator = () => {
  return (
    <LoginStack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}
    >
      <LoginStack.Screen name="Login" component={Login} />
      <LoginStack.Screen name="MobileNumber" component={MobileNumber} />
      <LoginStack.Screen name="OTP" component={OTP} />
    </LoginStack.Navigator>
  );
};

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}
    >
      <MainStack.Screen name="LoginStackNavigator" component={LoginStackNavigator} />
      <MainStack.Screen name="ProfileStackNavigator" component={ProfileStackNavigator} />
    </MainStack.Navigator>
  );
};

export default function RootNavigator() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? MyTheme.darkTheme : MyTheme.defaultTheme}>
      <MainStackNavigator />
    </NavigationContainer>
  );
}
