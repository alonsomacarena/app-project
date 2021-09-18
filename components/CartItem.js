import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import COLORS  from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

const CartItem = ({ item, onDelete }) => {
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.header}>{item.name}</Text>
        <Text style={styles.subheader}>{item.brand}</Text>
      </View>
      <View style={styles.detail}>
        <View>
          <Text style={styles.text}>Cantidad: {item.quantity}</Text>
          <Text style={styles.text, styles.textBold}>$ {item.price}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item.id)} style={styles.containerTrash}>
          <Ionicons name="trash" size={24} color={COLORS.text} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  header: {
    fontSize: 18,
    fontFamily: 'kaisei-extraBold',
  },
  subheader: {
    fontSize: 16,
    fontFamily: 'kaisei-extraBold',
  },
  detail: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: "1%",
    marginBottom: "1%",
  },
  text: {
    fontSize: 15,
    fontFamily: 'kaisei-Medium',
  },
  textBold: {
    fontFamily: 'kaisei-Bold',
  },
  containerTrash:{
    backgroundColor: COLORS.accent,
    padding: "2%",
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 5,
  }
});

export default CartItem;