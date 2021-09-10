import BreadDetailScreen from '../screens/BreadDetailScreen';
import COLORS from '../constants/Colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryBreadScreen from '../screens/CategoryBreadsScreen';
import { NavigationContainer } from "@react-navigation/native";
import { Platform } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ROUTES = {
  HOME: 'Home',
}

const BreadNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? COLORS.primary : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.text,
        headerTitleStyle: {
          fontFamily: "kaisei-extraBold",
        }
      }}
    >
      <Stack.Screen
        name={ROUTES.HOME}
        component={CategoriesScreen}
        options={{
          title: 'Home',
          headerStyle: { backgroundColor: COLORS.primary },
        }}
      />
      <Stack.Screen
        name="Products"
        component={CategoryBreadScreen}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
      <Stack.Screen
        name="Detail"
        component={BreadDetailScreen}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default BreadNavigator;
