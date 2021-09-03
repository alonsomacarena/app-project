import React, { useState } from 'react';
import { StyleSheet, Text, View } from "react-native";

import { AntDesign } from '@expo/vector-icons';
import COLORS from "../constants/Colors";
import { FontAwesome } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

const Footer = props => {

    return (
    <View style={[styles.footerContainer, styles.shadow]}>
        <FontAwesome name="home" style={styles.footerIcons} />
        <FontAwesome name="clock-o" style={styles.footerIcons}  />
        <FontAwesome name="star" style={styles.footerIcons} />
        <FontAwesome name="book" style={styles.footerIcons} />
        <FontAwesome name="user-circle-o" style={styles.footerIcons} />
    </View>
    )
}

const styles = StyleSheet.create({
    footerContainer: {
        width: "100%",
        height: "10%",
        flexDirection: "row",
        backgroundColor: COLORS.primary,
        alignItems: "center",
        justifyContent: "space-around",
        borderRadius: 5,
        borderTopColor: COLORS.text,    
    },
    footerIcons:{
        fontSize: 30,
        color: COLORS.text,
    },   
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
      },
});

export default Footer;