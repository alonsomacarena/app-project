import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import React, { useState } from 'react';

import ButtonMain from '../Button';
import COLORS from "../../constants/Colors";
import { FontAwesome } from '@expo/vector-icons';

const ListItem = ({ data, handleModal}) => {
  
  return (
    <View style={styles.listContainer}>
    <View style={[styles.item, styles.shadow]}>
      <Text style={styles.itemText}>{data.item.value}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleModal(data.item.id)} >
        <FontAwesome name="trash" style={styles.buttonTitle} color={COLORS.text} />
      </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer:{
flexDirection: "column",
flex: 1,
alignItems: "flex-start",
justifyContent: "center",
width: "100%",
marginLeft: "5%",
marginTop: Dimensions.get('window').height > 600 ? 20 : 10,
  },
  item: {
    width: "75%",
    padding: "5%",
    marginTop: "5%",
    marginBottom: "5%",
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
      fontFamily:"kaisei-medium",
  },
  button: {
    width: "15%",
    height: 35,
    backgroundColor: COLORS.accent,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    
},
buttonTitle:{
    fontSize: 18,
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

export default ListItem;