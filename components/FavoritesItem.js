import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { deleteOrder, getOrders } from '../store/actions/order.action'

import COLORS  from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

const FavoritesItem = ({ item, onDelete }) => {
  
  return (
    <View style={styles.item} >
   {item.map((ob) => <View style={styles.container}>
           <View style={{width:"80%"}}>
             <View>
           <Text style={styles.header}>{ob.name}</Text>
           <Text style={styles.subheader}>{ob.brand}</Text>
           </View>
           </View>
        
           <View>
          
           </View>
         </View>)}
         
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
      marginHorizontal: "3%"
  }
});

export default FavoritesItem;