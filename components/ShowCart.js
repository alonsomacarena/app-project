import { Button, StyleSheet, View, useColorScheme } from 'react-native'

import { AntDesign } from '@expo/vector-icons'
import COLORS from '../constants/Colors'
import React from 'react'

const ShowCart = ({navigation}) => {

    const handlerShowCart = () => navigation.push('Cart')

    return (
        <View>
            <AntDesign name="shoppingcart" size={24} color={COLORS.text} />
            <Button style={styles.button} title="Ver Carrito" onPress={handlerShowCart} color={COLORS.primary}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        bottom: 0
    }
})

export default ShowCart
