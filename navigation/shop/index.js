import COLORS from '../../constants/Colors'
import CartConfirmScreen from '../../screens/CartConfirmScreen';
import CategoryProductsScreen from '../../screens/CategoryProductsScreen';
import HomeScreen from "../../screens/HomeScreen";
import { Platform } from 'react-native'
import ProductDetailScreen from '../../screens/ProductDetailScreen';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Screens

const ShopStack = createNativeStackNavigator();

const ROUTES = {
  HOME: 'Home',
}

const ShopNavigator = () => (
    <ShopStack.Navigator
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
    <ShopStack.Screen
      name={ROUTES.HOME}
      component={HomeScreen}
      options={{
        title: 'Home',
        headerStyle: { backgroundColor: COLORS.accent },
      }}
    />
    <ShopStack.Screen
      name="Products"
      component={CategoryProductsScreen}
      options={({ route }) => ({
        title: route.params.name,
        headerStyle: { backgroundColor: COLORS.accent },
      })}
    />
    <ShopStack.Screen
      name="Detail"
      component={ProductDetailScreen}
      options={({ route }) => ({
        title: route.params.name,
        headerStyle: { backgroundColor: COLORS.accent },
      })}
    />
     <ShopStack.Screen
      name="CartConfirmScreen"
      component={CartConfirmScreen}
      options={({ route }) => ({
        title: "Confirmar Favoritos",
        headerStyle: { backgroundColor: COLORS.accent },
      })}
    />
  </ShopStack.Navigator>
)


export default ShopNavigator 