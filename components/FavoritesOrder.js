/*import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect, useDispatch, useSelector } from 'react-redux'

import COLORS  from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

const FavoritesItem = ({ item, onDelete }) => {
 
 
  return (
    <View style={styles.item}>
      <View style={styles.container}>
        <View style={{width:"80%"}}>
          <View>
        <Text style={styles.header}>{item.itemsId}</Text>
    
        </View>
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
    marginTop: "2%",

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
    alignItems: "flex-start",
    justifyContent: "space-around",
    borderRadius: 6,
      backgroundColor: COLORS.bg,
      borderColor: COLORS.text,
      borderWidth: 1,
      padding: "5%",
      marginBottom:"2%",
  }
});

export default FavoritesItem;*/

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import COLORS from '../constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'

const FavoritesOrder = ({item, onDelete}) => {

    
    return (
        <View style={styles.order}>
            <View style={styles.data}>
                <Text style={styles.text}>solo me imprime date y userId {item.date} + {item.userId}</Text>
                <Text style={styles.text}>elimina bien toda la . como hago para tomar los datos del objeto?</Text>

            </View>
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
        flexDirection: 'column',
        justifyContent:'space-between',
        alignItems: 'flex-start',
        height: 80,
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


export default FavoritesOrder