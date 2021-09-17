import COLORS from '../constants/Colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryProductsScreen from '../screens/CategoryProductsScreen';
import { Platform } from 'react-native';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ROUTES = {
  HOME: 'Home',
}

const ProductNavigator = () => (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? COLORS.accent : '',
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
          headerStyle: { backgroundColor: COLORS.accent },
        }}
      />
      <Stack.Screen
        name="Products"
        component={CategoryProductsScreen}
        options={({ route }) => ({
          title: route.params.name,
          headerStyle: { backgroundColor: COLORS.accent },
        })}
      />
      <Stack.Screen
        name="Detail"
        component={ProductDetailScreen}
        options={({ route }) => ({
          title: route.params.name,
          headerStyle: { backgroundColor: COLORS.accent },
        })}
      />
    </Stack.Navigator>
);

export default ProductNavigator;
