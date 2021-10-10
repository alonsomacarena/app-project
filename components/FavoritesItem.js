import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import COLORS  from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

const FavoritesItem = ({ item, onDelete }) => {


  return (
    <View style={styles.item}>
      <View style={styles.container}>
        <View>
        <Text style={styles.header}>{item.name}</Text>
        <Text style={styles.subheader}>{item.brand}</Text>
        </View>
        <View>
        <TouchableOpacity onPress={() => onDelete(item.id)} style={styles.containerTrash}>
          <Ionicons name="trash" size={24} color={COLORS.text} />
        </TouchableOpacity>
        </View>
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
    marginTop: "10%",

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
    paddingHorizontal: "2%",
    paddingVertical:"10%",
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 5,
  },
  container:{
    flex:1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around",
    borderRadius: 6,
      backgroundColor: COLORS.bg,
      borderColor: COLORS.text,
      borderWidth: 1,
      padding: "5%",
      marginBottom:"2%",
  }
});

export default FavoritesItem;