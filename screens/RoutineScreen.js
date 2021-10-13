import * as addressAction from '../store/actions/places.actions'

import { FlatList, Platform, StyleSheet, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import React, { useEffect, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import COLORS from "../constants/Colors"
import HeaderButton from '../components/HeaderButton'
import { Ionicons } from '@expo/vector-icons';
import PlaceItem from '../components/PlaceItem'

const RoutineScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const places = useSelector(state => state.places.places)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item 
                        title="Nueva" 
                        iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                        onPress={() => navigation.push('Nuevo')}/>
                </HeaderButtons>
            )
        })
    }, [navigation])

    useEffect(() => {
        dispatch(addressAction.loadAddres())
    }, [])

    return (
        <View style={styles.container}>
        <View style={styles.titleProducts}>
  <Text style={styles.topTitle}>Tus Rutinas de Cuidado Facial
  </Text>
 </View>  
<View>
<Text style={styles.textGeneral}>Aquí podrás encontrar tus rutinas personalizadas</Text>
</View>

       <FlatList 
            data={places}
            keyExtract={item => item.id}
            renderItem={itemData => (
                <PlaceItem 
                    title={itemData.item.title}
                                        onSelect={() =>{ navigation.navigate('Detalle', { 
                        placeTitle: itemData.item.title,
                        placeID: itemData.item.id
                    })}}
                />
            )}
       />
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

export default RoutineScreen

