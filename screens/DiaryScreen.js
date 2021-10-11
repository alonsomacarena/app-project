import {StyleSheet, Text, View} from "react-native";

import React from "react";
import TopTitle from "../components/TopTitle";

const DiaryScreen = () => {
    return (
        <View style={styles.container}>
        <TopTitle title="Seguimiento de Proceso" />
        <Text style={styles.textGeneral}>Aquí podrás mantener un seguimiento de tu proceso con fotos semanales</Text>
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

export default DiaryScreen;