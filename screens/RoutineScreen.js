import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

import COLORS from "../constants/Colors"
import { Ionicons } from '@expo/vector-icons';
import React from 'react'

const RoutineScreen = () => {

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.titleProducts}>
  <Text style={styles.topTitle}>Tus Rutinas de Cuidado Facial
  </Text>
 </View>  
<View>
<Text style={styles.textGeneral}>Aquí podrás encontrar tus rutinas personalizadas</Text>
</View>
<View style={styles.containerRoutine}>
    <Text style={styles.titulo}>Rutina de día
<Ionicons name="sunny" size={20} color={COLORS.text} style={styles.icon} />
</Text>
<TextInput style={styles.input} value="Step 1"/>
<TextInput style={styles.input} value="Step 2"/>
<TextInput style={styles.input} value="Step 3"/>
<TextInput style={styles.input} value="Step 4"/>
<TextInput style={styles.input} value="Otros"/>
</View>
<View style={styles.containerRoutine1}>
    <Text style={styles.titulo}>Rutina de noche
<Ionicons name="moon" size={20} color={COLORS.text} style={styles.icon} />
</Text>
<TextInput style={styles.input1} value="Step 1"/>
<TextInput style={styles.input1} value="Step 2"/>
<TextInput style={styles.input1} value="Step 3"/>
<TextInput style={styles.input1} value="Step 4"/>
<TextInput style={styles.input1} value="Otros"/>
</View>
       </ScrollView>
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
    containerRoutine:{
        width: "90%",
        backgroundColor: COLORS.accent,
        flex: 1,
        borderColor: COLORS.title,
        borderRadius: 5,
        borderWidth: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginHorizontal: "5%",
        padding: "5%",
        marginBottom: "10%"
    },
    containerRoutine1:{
        width: "90%",
        backgroundColor: COLORS.primary,
        flex: 1,
        borderColor: COLORS.primary,
        borderRadius: 5,
        borderWidth: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginHorizontal: "5%",
        padding: "5%",
        marginBottom: "5%"
    },
    titulo:{
        fontFamily: "kaisei-Bold",
        fontSize: 18,
        textTransform: "capitalize",
    },
    input: {
        borderBottomColor: COLORS.primary,
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 2,
        paddingVertical: 4,
        fontFamily: "kaisei-Regular",
        width: "100%",
        marginTop: "2%",
        color: COLORS.primary,
    },
    input1: {
        borderBottomColor: COLORS.title,
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 2,
        paddingVertical: 4,
        fontFamily: "kaisei-Regular",
        width: "100%",
        marginTop: "2%",
        color: COLORS.title
    },
})

export default RoutineScreen

