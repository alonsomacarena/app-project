import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import COLORS from "../constants/Colors";

/*no funciona este switch */
const ButtonSwitch = props => {
    const {title}= props;
    const [selectedProduct, setSelectedProduct]= useState("");
    return (

         <TouchableOpacity
        style={styles.button} onPress={()=> props.onButtonSwitch(selectedProduct)} >
             <Text style={styles.buttonTitle}>FAV</Text>
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
    fontFamily:"kaisei-extraBold",
    },
});

export default ButtonSwitch;