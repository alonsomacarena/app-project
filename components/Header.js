import { StyleSheet, Text, View } from "react-native";

import COLORS from "../constants/Colors";
import React from "react";

const Header = props => {
    const {title} = props;
    return (
    <View style={[styles.header, styles.shadow]}>
        <Text style={styles.headerTitle}>{title}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "90%",
        height: "12%",
        marginTop:"2%",
        marginBottom: 20,
        backgroundColor: COLORS.primary,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
        borderStyle: "solid",
        borderColor: COLORS.text,
        borderWidth: StyleSheet.hairlineWidth,
    },
    headerTitle:{
        fontSize: 16,
        color: COLORS.text,
        textTransform: "capitalize",
        fontFamily:"kaisei-extraBold",
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
});

export default Header;