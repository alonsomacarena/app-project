import COLORS from '../../constants/Colors'
import DiaryScreen from '../../screens/DiaryScreen';
import { Platform } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const DiaryStack = createNativeStackNavigator();

const DiaryNavigator = () => (
    <DiaryStack.Navigator
        initialRouteName="Diary"
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
        <DiaryStack.Screen 
            name="Diaries" 
            component={DiaryScreen}
            options={{title: 'Registro Fotográfico'}} 
            
        />
    </DiaryStack.Navigator>
)
export default DiaryNavigator