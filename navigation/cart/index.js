import COLORS from '../../constants/Colors'
import CartScreen from "../../screens/CartScreen";
import { Platform } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const CartStack = createNativeStackNavigator();

const CartNavigator = () => (
    <CartStack.Navigator
        initialRouteName="Cart"
        screenOptions={{
           /* headerStyle: {
                backgroundColor: Platform.OS === 'android' ? COLORS.bg : '',
            },*/
            headerStyle: {
                backgroundColor: COLORS.accent          
                },
    headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.text,
    headerTitleStyle: {
        fontFamily: "kaisei-extraBold",
    }   
        }}
    >
        <CartStack.Screen 
            name="Cart" 
            component={CartScreen}
            options={{title: 'Carrito de Compra'}} 
        />
    </CartStack.Navigator>
)
export default CartNavigator