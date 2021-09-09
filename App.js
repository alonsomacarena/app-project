import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import AddItem from './components/AddItem';
import { AntDesign } from '@expo/vector-icons';
import COLORS from "./constants/Colors"
import Footer from "./components/Footer";
import Header from './components/Header';
import List from "./components/List/index";
import Modal from './components/Modal';
import { NavigationContainer } from '@react-navigation/native';
import Products from './screens/Products';
import { ProductsScreenNavigator } from './navigation/CustomNavigation';
import RootNavigator from './navigation/RootNavigation';
import SkincareNavigator from './navigation/SkincareNavigation';
import { StatusBar } from 'expo-status-bar';
import TabNavigator from './navigation/TabNavigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();


  return (
    /*<SkincareNavigator/>*/
    <SafeAreaView style={styles.container}>
    <NavigationContainer>
      {/*no se imprime nada*/}
    <Tab.Screen name="Categories" component={ProductsScreenNavigator} />
      <TabNavigator />
      
    </NavigationContainer>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
 /* screen: {
    padding: 30,
    backgroundColor: COLORS.bg,
    flex: 1,
  },*/
  container: {
    flex: 1,
  },
});