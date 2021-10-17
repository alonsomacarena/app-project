import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { deleteOrder, getOrders } from '../store/actions/order.action'

import COLORS from "../constants/Colors"
import { Ionicons } from '@expo/vector-icons';
import ItemOrder from '../components/OrderItem'

const OrderScreen = () => {
    const dispatch = useDispatch()
    const USERID = useSelector(state => state.auth.userId)
    const orders = useSelector(state => state.order.items)

    useEffect(() => {
        dispatch(getOrders(USERID))
    },[])
    
    const onHandlerDeleteItem = (id) => dispatch(deleteOrder(id))

    const renderCardItem = (itemData) => (
        <ItemOrder 
            item={itemData.item}
            onDelete={onHandlerDeleteItem}
            />
        )
    return (
        <View style={styles.container} >
        <View style={styles.titleProducts}>
  <Text style={styles.topTitle}>Tus Ordenes
  </Text>
 </View>  
<View>
<Text style={styles.textGeneral}>Aquí podrás encontrar tus rutinas personalizadas</Text>
</View>
    <FlatList 
                data={orders}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderCardItem}
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
      },
      topTitle:{
        fontSize: 20,
        color: COLORS.text,
        textTransform: "capitalize",
        fontFamily:"kaisei-extraBold",
    },


})

export default connect()(OrderScreen)