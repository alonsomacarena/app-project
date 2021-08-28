import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import COLORS from "../constants/Colors";
import React from "react";

const ButtonMain = props => {
    const {buttonTitle}= props;
    return (
         <TouchableOpacity
        style={styles.button}>
        <Text style={styles.buttonTitle}>{buttonTitle}</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: "20%",
        height: 40,
        backgroundColor: COLORS.accent,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        
    },
    buttonTitle:{
        fontSize: 15,
        color: COLORS.text,
    },
});

export default ButtonMain;