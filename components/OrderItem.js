import { Button, StyleSheet, Text, View } from 'react-native'

import COLORS from '../constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'

const OrderItem = ({item, onDelete}) => {
    return (
        <View style={styles.order}>
           
            <View style={styles.actions}>
                <View>
                    <Button 
                        title="Borrar"
                        color={COLORS.primary}
                        icon={
                            <Ionicons name="md-trash" size={24} color="black" />
                        }
                        onPress={() => onDelete(item.id)}
                    />
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
        height: 60
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
    }
})


export default OrderItem
