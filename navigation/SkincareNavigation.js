import DiaryScreen from "../screens/Diary";
import Home from "../screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import ProductsScreen from "../screens/Products";
import ProfileScreen from "../screens/Profile";
import React from 'react';
import RoutineScreen from "../screens/Routine";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const SkincareNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Routine" component={RoutineScreen} />
      <Stack.Screen name="Diary" component={DiaryScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default SkincareNavigator;