import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { deleteOrder, getOrders } from '../store/actions/order.action'

import ItemOrder from '../components/OrderItem'

const OrdersScreen = () => {
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
        <View style={styles.container}>
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
        flex: 1,
        padding: 18
    }
})

export default connect()(OrdersScreen)
