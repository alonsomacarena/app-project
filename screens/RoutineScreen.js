import {StyleSheet, Text, View} from "react-native";

import React from "react";
import TopTitle from "../components/TopTitle";

const RoutineScreen = () => {
    return (
        <View style={styles.container}>
        <TopTitle title="Rutinas Diarias" />
        <Text style={styles.textGeneral}>Aquí podrás armar tus rutinas de día y de noche</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12
    },
    textGeneral:{
        fontSize: 12,
        fontFamily: "kaisei-Regular",
        textAlign: "center",
        marginVertical: 10,
      }
})

export default RoutineScreen;