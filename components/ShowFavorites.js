import { Button, StyleSheet, View, useColorScheme } from 'react-native'

import { AntDesign } from '@expo/vector-icons'
import COLORS from '../constants/Colors'
import React from 'react'

const ShowFavorites = ({navigation}) => {

    

    const handlerShowFavorites = () => navigation.push('Favoritos')

    return (
        <View>
            <AntDesign name="star" size={24} color={COLORS.text} />
            <Button style={styles.button} title="Ver Favoritos" onPress={handlerShowFavorites} color={COLORS.primary}/>
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

export default ShowFavorites;
