import { Dimensions, StyleSheet, Text, View } from "react-native";

import COLORS from "../constants/Colors";
import React from "react";

/*const width = Dimensions.get('window').width;*/

const TopTitle = props => {
    const {title} = props;

    return (
    <View style={styles.header}>
        <Text style={styles.headerTitle} numberOfLines={2}>{title}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "10%",
        marginTop:"2%",
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        
    },
    headerTitle:{
        fontSize: 20,
        color: COLORS.text,
        textTransform: "capitalize",
        fontFamily:"kaisei-extraBold",
    },
});

export default TopTitle;