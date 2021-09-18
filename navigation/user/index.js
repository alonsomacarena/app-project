import LoginScreen from '../../screens/user/LoginScreen';
import React from 'react';
import RegisterScreen from '../../screens/user/RegisterScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => (
  <AuthStack.Navigator
    initialRouteName="Login"
    screenOptions={{ headerShown: false }}
  >
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="Register" component={RegisterScreen} />
  </AuthStack.Navigator>
);

export default AuthNavigator;