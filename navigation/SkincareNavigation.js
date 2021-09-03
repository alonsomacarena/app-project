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
      <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
      <Stack.Screen name="RoutineScreen" component={RoutineScreen} />
      <Stack.Screen name="DiaryScreen" component={DiaryScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default SkincareNavigator;