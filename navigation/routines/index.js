import COLORS from '../../constants/Colors'
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
    </RoutineStack.Navigator>
)
export default RoutineNavigator