import AuthNavigator from './user/AuthNavigator';
import { NavigationContainer } from "@react-navigation/native";
import ProductNavigator from "./ProductNavigator"
import React from 'react';
import { useSelector } from 'react-redux';

const MainNavigator = () => {
  const userId = useSelector(state => state.auth.userId);

  return (
    <NavigationContainer>
      {userId
        ? <ProductNavigator />
        : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;