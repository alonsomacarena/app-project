import { StyleSheet, Text, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import COLORS from "./constants/Colors";
import ProductNavigator from './navigation/ProductNavigator';
import { Provider } from 'react-redux';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import store from './store';
import { useFonts } from 'expo-font';

export default function App() {

  const [loaded] = useFonts({
    "kaisei-regular": require('./assets/fonts/KaiseiTokumin-Regular.ttf'),
    "kaisei-medium": require('./assets/fonts/KaiseiTokumin-Medium.ttf'),
    "kaisei-Bold": require('./assets/fonts/KaiseiTokumin-Bold.ttf'),
    "kaisei-extraBold": require('./assets/fonts/KaiseiTokumin-ExtraBold.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  


  return (
    <Provider store={store}>
      <ProductNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
