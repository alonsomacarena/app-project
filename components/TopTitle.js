import { StyleSheet, Text, View } from "react-native";

import COLORS from "../constants/Colors";
import React from "react";

const TopTitle = props => {
    const {title} = props;
    return (
    <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "10%",
        marginTop:"5%",
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",   
    },
    headerTitle:{
        fontSize: 25,
        color: COLORS.text,
        textTransform: "capitalize",
        fontFamily:"kaisei-extraBold",
    },
});

export default TopTitle;