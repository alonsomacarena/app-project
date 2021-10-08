import LoginScreen from '../../screens/user/LoginScreen';
import OnboardingScreen from '../../screens/OnboardingScreen';
import React from 'react';
import RegisterScreen from '../../screens/user/RegisterScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => (

    <AuthStack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{ headerShown: false }}
    >
       <AuthStack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          screenOptions={{ headerShown: false }}

        />
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
    );


export default AuthNavigator;