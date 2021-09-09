import { StyleSheet, Text, View } from "react-native";

import COLORS from "../constants/Colors";
import React from "react";

const NestedScreen = ({route}) => {
    return(
        <View style={styles.screen}>
            <Text style={styles.text}>{route.params.msg}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: COLORS.accent
    },
    text:{
        fontFamily: "kaisei-Bold",
        color: COLORS.text,
        fontSize: 20,
    },
})

export default NestedScreen;
