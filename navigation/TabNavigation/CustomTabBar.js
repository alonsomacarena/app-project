import { StyleSheet, Text, View } from 'react-native';

import {BottomTabBar} from '@react-navigation/bottom-tabs';
import React from 'react';

const CustomTabBar = (props) => {
  return (
    <View
    style={styles.tabBarContainer}
    blurType="dark"
    blurAmount={10}
    blurRadius={25}
    overlayColor="transparent">
    <BottomTabBar {...props} />
  </View>
  )
};

const styles = StyleSheet.create({
    tabBarContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
  });


export default CustomTabBar;