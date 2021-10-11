import { StyleSheet, Text, View } from 'react-native';
import { persistor, store } from './store';

import COLORS from "./constants/Colors";
import MainNavigator from "./navigation/MainNavigator";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import React from 'react';
//import store from './store';
import { useFonts } from 'expo-font';

export default function App() {

  const [loaded] = useFonts({
    "kaisei-Regular": require('./assets/fonts/KaiseiTokumin-Regular.ttf'),
    "kaisei-Medium": require('./assets/fonts/KaiseiTokumin-Medium.ttf'),
    "kaisei-Bold": require('./assets/fonts/KaiseiTokumin-Bold.ttf'),
    "kaisei-extraBold": require('./assets/fonts/KaiseiTokumin-ExtraBold.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <MainNavigator />
      </PersistGate>
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
