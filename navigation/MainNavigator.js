import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AuthNavigator  from './user'
import { NavigationContainer } from "@react-navigation/native";
import ShopNavigator  from './tab'
import { initAuthentication } from '../store/actions/auth.action';

export default () => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.auth.userId);

  useEffect(() => {
    dispatch(initAuthentication());
  }, []);
  
  return (
    <NavigationContainer>
   { userId ? (
        <ShopNavigator />
        ) : (
          <AuthNavigator />
        )}
      
    </NavigationContainer>
  )
}