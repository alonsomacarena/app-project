import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import COLORS from '../constants/Colors';
import React from 'react';

const PlaceItem = props => {
  return (
      <TouchableOpacity
          onPress={props.onSelect}
          style={styles.placeItem}
      >
          <View style={styles.info}>
              <Text style={styles.title}>{props.title}</Text>
          </View>       
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  placeItem: {
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      paddingVertical: 16,
      paddingHorizontal: 30,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: "red"
  },
  info: {
      marginLeft: 25,
      width: 250,
      justifyContent: 'center',
      alignItems: 'flex-start'
  },
  title: {
      color: COLORS.text,
      fontSize: 18,
      marginBottom: 6
  },
  address: {
      color: '#666',
      fontSize: 16
  }
})

export default PlaceItem
