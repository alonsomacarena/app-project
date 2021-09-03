import {
    Button,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import COLORS from "../constants/Colors";
import React from 'react';

function DeleteModal({
    modalVisible,
    itemSelected,
    handleConfirmDelete,
  }) {
    return (
      <Modal animationType="slide" visible={modalVisible} transparent>
        <View style={styles.modalContainer}>
          <View style={[styles.modalContent, styles.shadow]}>
            <Text style={styles.modalMessage}>¿Estás seguro que deseas borrar?</Text>
            <Text style={styles.modalTitle}>{itemSelected.value}</Text>
            <View>
              <TouchableOpacity
        style={styles.button}
        onPress={handleConfirmDelete}
      >
        <Text style={styles.buttonTitle}>CONFIRMAR</Text>
      </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    )
  }
  
  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalContent: {
      padding: 30,
      backgroundColor: COLORS.bg,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalMessage: {
      fontSize: 18,
      fontFamily:"kaisei-extraBold",
    },
    modalTitle: {
      fontSize: 26,
      marginTop: 10,
      marginBottom: 20,
      textTransform: 'uppercase',
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
    button: {
        width: "80%",
        paddingLeft: 10,
        paddingRight: 10,
        height: 40,
        backgroundColor: COLORS.accent,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        
    },
    buttonTitle:{
        fontSize: 15,
        color: COLORS.text,
    },
  })
  
  export default DeleteModal;