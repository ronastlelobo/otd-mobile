/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import RootNavigator from './router';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RootNavigator />
    </SafeAreaView>
  );
};

export default App;
