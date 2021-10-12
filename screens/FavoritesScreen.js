import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'

import COLORS from "../constants/Colors"
import FavoritesItem from '../components/FavoritesItem';
import { Ionicons } from '@expo/vector-icons';

const FavoritesScreen = () => {
    const dispatch = useDispatch()
    
  const ITEMS = useSelector(state => state.favorites.items)
  const TOTAL = useSelector(state => state.favorites.total)
const USERID = useSelector(state => state.auth.userId)

    const onHandlerDeleteItem = (item) => {
        dispatch(removeItem(item.id))
      }
 

    const renderCardItem = (itemData) => (
        <FavoritesItem
            item={itemData.item}
            onDelete={onHandlerDeleteItem}
            />
        )

    return (
        <View style={styles.container}>
             <View style={styles.titleProducts}>
       <Text style={styles.topTitle}>Tus Productos Favoritos
       <Ionicons name="star" size={24} color={COLORS.text}  />
       </Text>
      </View>  
  <View>
  <Text style={styles.textGeneral}>Aquí podrás encontrar tus productos favoritos</Text>
  </View>
            <FlatList 
                data={ITEMS}
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
    },
    titleProducts:{
        alignSelf:"center",
      },
    textGeneral:{
        fontSize: 12,
        fontFamily: "kaisei-Regular",
        textAlign: "center",
        marginTop: "3%",
      },
      topTitle:{
        fontSize: 20,
        color: COLORS.text,
        textTransform: "capitalize",
        fontFamily:"kaisei-extraBold",
    },
})

export default connect()(FavoritesScreen)
