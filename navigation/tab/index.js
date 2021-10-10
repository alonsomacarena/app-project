import { StyleSheet, Text, View } from 'react-native'

import CartScreen from '../cart'
import { Ionicons } from '@expo/vector-icons';
import OrdersScreen from '../orders'
import React from 'react';
import ShopScreen from '../shop'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screen





const TabsStack = createBottomTabNavigator()

const TabsShop = () => (
    <TabsStack.Navigator
        initialRouteName="Shop"
        screenOptions={{
            "tabBarShowLabel": false,
            "tabBarStyle": [
              {
                "display": "flex"
              },
              null
            ],
            "headerShown": false, 
          }}
        
    >
        <TabsStack.Screen 
            name="Shop"
            component={ShopScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.item}>
                       <Ionicons name="md-home" size={24} color="black" />
                       <Text>Home</Text>
                    </View>
                )
            }}
            screenOptions={{ headerShown: false }}
        />
        <TabsStack.Screen 
            name="CartScreen"
            component={CartScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.item}>
                       <Ionicons name="md-cart" size={24} color="black" />
                       <Text>Carrito</Text>
                    </View>
                )
            }}
            screenOptions={{ headerShown: false }}
        />
        <TabsStack.Screen 
            name="OrderScreen"
            component={OrdersScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.item}>
                       <Ionicons name="md-list" size={24} color="black" />
                       <Text>Ordenes</Text>
                    </View>
                )
            }}
            screenOptions={{ headerShown: false }}
        />
        
    </TabsStack.Navigator>
)


const styles = StyleSheet.create({
    shadow: {
        shadowColor:'#7f5df0',
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

})
export default TabsShop
