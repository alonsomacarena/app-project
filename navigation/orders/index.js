import COLORS from '../../constants/Colors'
import OrderScreen from '../../screens/OrderScreen';
import { Platform } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const OrderStack = createNativeStackNavigator();

const OrderNavigator = () => (
    <OrderStack.Navigator
        initialRouteName="OrdersScreen"
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
        <OrderStack.Screen 
            name="Ordenes" 
            component={OrderScreen}
            options={{title: 'Ordenes'}} 
        />
    </OrderStack.Navigator>
)
export default OrderNavigator