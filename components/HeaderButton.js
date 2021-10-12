import COLORS from "../constants/Colors";
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import React from 'react';

const CustomHeaderButton = props => (
  <HeaderButton
    {...props}
    IconComponent={Ionicons}
    iconSize={23}
    color={Platform.OS === 'android' ? 'white' : COLORS.text}
  />
);

export default CustomHeaderButton;