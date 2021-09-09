import { StyleSheet, Text, View } from 'react-native';

import COLORS from "../../constants/Colors";
import CustomTabBar from "./CustomTabBar";
import DiaryScreen from "../../screens/Diary";
import { FontAwesome } from '@expo/vector-icons';
import Home from "../../screens/Home";
import ProductsScreen from "../../screens/Products";
import ProfileScreen from "../../screens/Profile";
import React from 'react';
import RoutineScreen from "../../screens/Routine";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

/*const screenOptions = (route, color) => {
    let iconName;
  
    switch (route.name) {
      case 'Home':
        iconName = 'home';
        break;
        case 'Routine':
            iconName = 'clock-o';
            break;
      case 'Products':
        iconName = 'star';
        break;
      case "Diary":
        iconName = 'book';
        break;
        case 'Profile':
            iconName = 'user-circle-o';
            break;
      default:
        break;
    }
  
    return <FontAwesome name={iconName} color={COLORS.text} size={24} />;
  };*/
  
const TabNavigator = () => {
  return (
    <Tab.Navigator style={styles.tabNavigationContainer}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? "home"
              : "home";
          } else if (route.name === 'Routine') {
            iconName = focused
              ?  'clock-o'
              :  'clock-o';
          }
          else if (route.name === 'Products') {
            iconName = focused
              ?  'star'
              :  'star';
          }
          else if (route.name === 'Diary') {
            iconName = focused
              ?  'book'
              :  'book';
          }
          else if (route.name === 'Profile') {
            iconName = focused
              ?  'user-circle-o'
              :  'user-circle-o';
          }
          return <FontAwesome name={iconName} color={color} size={size} />;
        },
        tabBarActiveTintColor: COLORS.accent,
        tabBarInactiveTintColor: COLORS.text,

        tabBarStyle:{backgroundColor: COLORS.primary, paddingTop:5, paddingBottom:5,},
 })}
      tabBar={(props) => <CustomTabBar {...props} />}
      >
     <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Routine" component={RoutineScreen} />
      <Tab.Screen name="Products" component={ProductsScreen} />
      <Tab.Screen name="Diary" component={DiaryScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
    taNavigationContainer: {
        borderTopColor: COLORS.bg,
          backgroundColor: 'transparent',
          elevation: 0,
    },
  });


export default TabNavigator;