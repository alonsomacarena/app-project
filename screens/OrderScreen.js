import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { deleteOrder, getOrders } from '../store/actions/order.action'

import COLORS from "../constants/Colors"
import FavoritesItem from '../components/FavoritesItem';
import { Ionicons } from '@expo/vector-icons';

const OrderScreen = ({onDelete}) => {
    const dispatch = useDispatch()
    const USERID = useSelector(state => state.auth.userId)
    const orders = useSelector(state => state.orders.items)

    useEffect(() => {
        dispatch(getOrders(USERID))
    },[])
    
    const onHandlerDeleteItem = (id) => dispatch(deleteOrder(id))

   /* const renderCardItem = (data) => (
        <FavoritesItem 
            item={data.item.items}
            onDelete={onHandlerDeleteItem}
            />
        )*/
    return (
        <View style={styles.container} >
        <View style={styles.titleProducts}>
  <Text style={styles.topTitle}>Tus Productos Favoritos
  </Text>
 </View>  
<View>
<Text style={styles.textGeneral}>Aquí podrás encontrar todos los productos que seleccionaste para tu lista de favoritos</Text>
</View>
    <FlatList 
                data={Object.values(orders)}
                keyExtractor={(item) => item.id.toString()}
                renderItem={(data, index) => (
                   <FavoritesItem 
                   key={index}
            item={data.item.items}
            
            />)}
                numColumns={1} />
       
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titleProducts:{
        alignSelf:"center",
        marginTop: "5%",
      },
    textGeneral:{
        fontSize: 12,
        fontFamily: "kaisei-Regular",
        textAlign: "center",
        marginTop: "3%",
        marginBottom: "5%",
        marginHorizontal: "5%",
        width: "90%",
      },
      topTitle:{
        fontSize: 20,
        color: COLORS.text,
        textTransform: "capitalize",
        fontFamily:"kaisei-extraBold",
    },
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
      container2:{
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

})

export default connect()(OrderScreen)