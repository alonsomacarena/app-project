import COLORS from '../../constants/Colors'
import NewPlaceScreen from '../../screens/NewPlaceScreen';
import PlaceDetailScreen from '../../screens/PlaceDetailScreen';
import { Platform } from 'react-native'
import React from 'react';
import RoutineScreen from '../../screens/RoutineScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RoutineStack = createNativeStackNavigator();

const RoutineNavigator = () => (
    <RoutineStack.Navigator
        initialRouteName="RoutineScreen"
        screenOptions={{
            headerStyle: {
                        backgroundColor: COLORS.accent          
                        },
            headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.text,
            headerTitleStyle: {
                fontFamily: "kaisei-extraBold",
            }
        }}
    >
        <RoutineStack.Screen 
            name="Routines" 
            component={RoutineScreen}
            options={{title: 'Rutinas'}} 
            
        />
        <RoutineStack.Screen
            name="Detalle"
            component={PlaceDetailScreen}
            options={{title: 'Detalle Rutina'}} 
        />
        <RoutineStack.Screen
            name="Nuevo"
            component={NewPlaceScreen}
            options={{title: 'Nueva direccion'}} 
        />
    </RoutineStack.Navigator>
)
export default RoutineNavigator