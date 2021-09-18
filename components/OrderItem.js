import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import COLORS from '../constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'

const formatDay = (time) => {
    const date = new Date(time)
    return date.toLocaleDateString()
}

const sumTotal= (list) => list.map(item => item.quantity*item.price).reduce((a,b) => a + b, 0)

const OrderItem = ({item, onDelete}) => {
    return (
        <View style={styles.order}>
            <View style={styles.data}>
                <Text style={styles.text}>{formatDay(item.date)}</Text>
                <Text style={styles.text}>$ {sumTotal(item.items)}</Text>
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
