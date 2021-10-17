import COLORS from '../../constants/Colors'
import { Platform } from 'react-native'
import ProfileScreen from '../../screens/ProfileScreen';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ProfileStack = createNativeStackNavigator();

const ProfileNavigator = () => (
    <ProfileStack.Navigator
        initialRouteName="Profile"
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
        <ProfileStack.Screen 
            name="Profiles" 
            component={ProfileScreen}
            options={{title: 'Perfil'}} 
            
        />
    </ProfileStack.Navigator>
)
export default ProfileNavigator