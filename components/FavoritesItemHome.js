/*import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import COLORS  from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

const FavoritesItemHome = ({ item, onDelete }) => {
  const name= (list) => list.map(item => item.name)
  const brand= (list) => list.map(item => item.brand)

  return (
    <View style={styles.gridItem}>
        <View style={styles.item}>
        <Text style={styles.title}>{name(item.items)}</Text>
        <Text style={styles.subtitle}>{brand(item.items)}</Text>
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
        width: Dimensions.get("window").width/2.2,
        height: Dimensions.get("window").height/4,
        marginHorizontal: 10,
        backgroundColor: COLORS.title,
        alignItems: "center",
    },
      title: {
        fontFamily: 'kaisei-Bold',
        textAlign: 'center',
        fontSize: 14,
        paddingTop: "10%",
        paddingHorizontal: "2%",
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

export default FavoritesItemHome;*/

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import COLORS from '../constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'

//const sumTotal= (list) => list.map(item => item.quantity*item.price).reduce((a,b) => a + b, 0)

const OrderItem = ({item, onDelete}) => {
    return (
        <View style={styles.order}>
           
            <View style={styles.actions}>
                <View>
                    <TouchableOpacity onPress={() => onDelete(item.id)} style={styles.containerTrash} >
                     <Ionicons name="md-trash" size={24} color={COLORS.text} />
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    order: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        justifyContent:'space-between',
        height: 60
    },
    data: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        height: 60,
    },
    actions: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'flex-end',
        alignItems: 'center',
        height: 60
    },
    marginRight: {
        marginRight: 6
    },
    containerTrash:{
        backgroundColor: COLORS.accent,
        padding: "4%",
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 5,
      },
    text:{
        fontFamily: "kaisei-Medium",
        fontSize: 14,
    }
})


export default OrderItem