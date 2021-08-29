import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import COLORS from "../constants/Colors";
import React from 'react';

const AddItem = ({
  handleChangeText,
  handleAddItem,
  inputText,
  inputError,
}) => {
  return (
    <React.Fragment>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Agrega tus productos de rutina"
          style={styles.input}
          onChangeText={handleChangeText}
          value={inputText}
        />
       {/*<Button title="ADD"
          color={COLORS.accent}
          onPress={handleAddItem}>
  </Button>*/}
    <TouchableOpacity
        style={styles.button}
        onPress={handleAddItem}
      >
        <Text style={styles.buttonTitle}>ADD</Text>
      </TouchableOpacity>
      </View>
      <Text style={styles.inputError}>{inputError}</Text>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 200,
    fontFamily:"kaisei-regular",
    fontSize: 12,
    color: COLORS.text,
  },
  inputError: {
    color: 'red',
  },
  button: {
    width: "20%",
    height: 40,
    backgroundColor: COLORS.accent,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    
},
buttonTitle:{
    fontSize: 15,
    color: COLORS.text,
    fontFamily:"kaisei-extraBold",
},
});

export default AddItem;