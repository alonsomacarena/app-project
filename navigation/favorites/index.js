import COLORS from '../../constants/Colors'
import FavoritesScreen from "../../screens/FavoritesScreen"
import { Platform } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const FavoriteStack = createNativeStackNavigator();

const FavoriteNavigator = () => (
    <FavoriteStack.Navigator
        initialRouteName="FavoritesScreen"
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
        <FavoriteStack.Screen 
            name="Favorites" 
            component={FavoritesScreen}
            options={{title: 'Tus Productos Favoritos'}} 
        />
    </FavoriteStack.Navigator>
)
export default FavoriteNavigator