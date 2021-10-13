import { FlatList, Platform, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'

import COLORS from "../constants/Colors"

const RoutineScreen = () => {

    return (
        <View style={styles.container}>
        <View style={styles.titleProducts}>
  <Text style={styles.topTitle}>Tus Rutinas de Cuidado Facial
  </Text>
 </View>  
<View>
<Text style={styles.textGeneral}>Aquí podrás encontrar tus rutinas personalizadas</Text>
</View>
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titleProducts:{
        alignSelf:"center",
        marginTop: "5%",
      },
    textGeneral:{
        fontSize: 12,
        fontFamily: "kaisei-Regular",
        textAlign: "center",
        marginTop: "3%",
        marginBottom: "5%",
      },
      topTitle:{
        fontSize: 20,
        color: COLORS.text,
        textTransform: "capitalize",
        fontFamily:"kaisei-extraBold",
    },
})

export default RoutineScreen

