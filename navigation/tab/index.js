import { StyleSheet, Text, View } from 'react-native'

import COLORS from '../../constants/Colors';
import DiaryScreen from '../diary';
import FavoritesScreen from '../favorites'
import { Ionicons } from '@expo/vector-icons';
import ProfileScreen from "../profile"
import React from 'react';
import RoutineScreen from '../routines';
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
                       <Ionicons name="md-home" size={24} color={COLORS.text} />
                       <Text style={styles.iconText}>Home</Text>
                    </View>
                )
            }}
            screenOptions={{ headerShown: false }}
        />
        <TabsStack.Screen 
            name="RoutineScreen"
            component={RoutineScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.item}>
                       <Ionicons name="time" size={24} color={COLORS.text} />
                       <Text style={styles.iconText}>Rutinas</Text>
                    </View>
                )
            }}
            screenOptions={{ headerShown: false }}
        />
        <TabsStack.Screen 
            name="FavoritesScreen"
            component={FavoritesScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.item}>
                       <Ionicons name="star" size={24} color={COLORS.text} />
                       <Text style={styles.iconText}>Favoritos</Text>
                    </View>
                )
            }}
            screenOptions={{ headerShown: false }}
        />
          <TabsStack.Screen 
            name="DiariesScreen"
            component={DiaryScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.item}>
                       <Ionicons name="journal" size={24} color={COLORS.text} />
                       <Text style={styles.iconText}>Registro</Text>
                    </View>
                )
            }}
            screenOptions={{ headerShown: false }}
        />
          <TabsStack.Screen 
            name="ProfileScreen"
            component={ProfileScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.item}>
                       <Ionicons name="person-circle" size={24} color={COLORS.text} />
                       <Text style={styles.iconText}>Perfil</Text>
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
    },
    iconText:{
        color: COLORS.text,
        fontSize: 11,
    }

})
export default TabsShop
