import COLORS from '../../constants/Colors'
import NewRoutineScreen from '../../screens/NewRoutineScreen';
import { Platform } from 'react-native'
import React from 'react';
import RoutineDetailScreen from '../../screens/RoutineDetailScreen';
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
            component={RoutineDetailScreen}
            options={{title: 'Detalle rutina'}} 
        />
        <RoutineStack.Screen 
            name="Nuevo"
            component={NewRoutineScreen}
            options={{title: 'Nueva Rutina'}} 
        />
    </RoutineStack.Navigator>
)
export default RoutineNavigator