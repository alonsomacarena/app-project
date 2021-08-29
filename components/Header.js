import { StyleSheet, Text, View } from "react-native";

import COLORS from "../constants/Colors";
import React from "react";

const Header = props => {
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
        height: 70,
        marginTop:50,
        marginBottom: 20,
        backgroundColor: COLORS.primary,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        
    },
    headerTitle:{
        fontSize: 20,
        color: COLORS.text,
        textTransform: "capitalize",
        fontFamily:"kaisei-extraBold",
    },
});

export default Header;