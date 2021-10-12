import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import COLORS  from '../constants/Colors';
import React from 'react';

const PlaceItem = ({ title, turno, horario, step1, step2, step3, step4, otros, onSelect }) => {
  return (
    <TouchableOpacity
      onPress={onSelect}
      style={styles.placeItem}
    >
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.address}>{turno} + {horario}</Text>
        <Text style={styles.address}>{step1}</Text>
        <Text style={styles.address}>{step2}</Text>
        <Text style={styles.address}>{step3}</Text>
        <Text style={styles.address}>{step4}</Text>
        <Text style={styles.address}>{otros}</Text>


      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  placeItem: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    marginLeft: 25,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    color: COLORS.text,
    fontSize: 18,
    marginBottom: 6,
  },
  address: {
    color: '#777',
    fontSize: 16,
  }
});

export default PlaceItem;