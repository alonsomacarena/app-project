import AuthNavigator  from './user'
import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import ShopNavigator  from './tab'
import { useSelector } from 'react-redux';

export default () => {
  const isLoggedIn = useSelector(state => state.auth.token)
  
  return (
    <NavigationContainer>
   { isLoggedIn ? (
        <ShopNavigator />
        ) : (
          <AuthNavigator />
        )}
      
    </NavigationContainer>
  )
}