import { StyleSheet, Text, View } from "react-native";

import COLORS from "../constants/Colors";
import React from "react";

const TopTitleSpecial = props => {
    const {title} = props;
    return (
    <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "60%",
        marginBottom:"5%",
        marginTop: "5%",
        backgroundColor: "transparent",
        alignItems: "flex-start",
        justifyContent: "center",
        borderRadius: 5,
        marginLeft: "5%",
        
    },
    headerTitle:{
        fontSize: 30,
        color: COLORS.text,
        textTransform: "capitalize",
        fontFamily:"kaisei-extraBold",
    },
});

export default TopTitleSpecial;