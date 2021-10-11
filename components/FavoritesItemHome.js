import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { confirmFavorites, removeItem } from '../store/actions/favorites.actions';

import COLORS  from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

const FavoritesItemHome = ({ item, onDelete }) => {


  return (
    <View style={styles.gridItem}>
        <View style={styles.item}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subtitle}>{item.brand}</Text>
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
    gridItem: {
        flex: 3,
        borderRadius: 6,
        justifyContent: "flex-start",
        marginTop: "2%",
        marginBottom:"50%",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        backgroundColor: "transparent",
    
      },
      item: {
        borderRadius: 6,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 3,
        paddingBottom: 15,
        paddingRight:8,
        width: Dimensions.get("window").width/2.5,
        height: Dimensions.get("window").height/5,
        marginHorizontal: 10,
        backgroundColor: COLORS.title,
        alignItems: "center",
    },
      title: {
        fontFamily: 'kaisei-Bold',
        textAlign: 'center',
        fontSize: 14,
      },
    subtitle: {
        fontFamily: 'kaisei-Medium',
        textAlign: 'center',
        fontSize: 14,
      },
      containerTrash:{
       borderColor: COLORS.text,
       borderWidth: 1,
        paddingHorizontal: "2%",
        paddingVertical:"2%",
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 5,
        marginTop: "5%",
        backgroundColor: COLORS.primary,
      },
});

export default FavoritesItemHome;