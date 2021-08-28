import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import COLORS from "../../constants/Colors";
import React from 'react';

const ListItem = ({ data, handleModal }) => {
  return (
    <View style={[styles.item, styles.shadow]}>
      <Text style={styles.itemText}>{data.item.value}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleModal(data.item.id)}
      >
        <Text style={styles.buttonTitle}>X</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: COLORS.bg,
  },
  itemText:{
      color: COLORS.text,
      fontSize: 15,
      textTransform: "uppercase",
  },
  button: {
    width: "10%",
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

export default ListItem;