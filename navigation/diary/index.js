import COLORS from '../../constants/Colors'
import DiaryDetailScreen from '../../screens/DiaryDetailScreen';
import DiaryScreen from '../../screens/DiaryScreen';
import NewDiaryEntryScreen from "../../screens/NewDiaryEntryScreen";
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
        <DiaryStack.Screen
            name="DetalleDiario"
            component={DiaryDetailScreen}
            options={{title: 'Detalle Photo Entry'}} 
        />
        <DiaryStack.Screen
            name="Nuevo"
            component={NewDiaryEntryScreen}
            options={{title: 'Nueva Entrada'}} 
        />
    </DiaryStack.Navigator>
)
export default DiaryNavigator