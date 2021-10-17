import { Button, FAB } from 'react-native-elements';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { confirmCart, removeItem } from '../store/actions/cart.actions';
import { connect, useDispatch, useSelector } from 'react-redux'

import COLORS from "../constants/Colors";
import FavoritesItem from "../components/FavoritesItem";
import React from "react";

const CartConfirmScreen = ({navigation}) => {
    const dispatch = useDispatch();

  
    const USERID = useSelector(state => state.auth.userId)
    const ITEMS = useSelector(state => state.cart.items)

    const handlerDeleteItem = (id) => dispatch(removeItem(id))

    const handlerConfirmFavorites = () => dispatch(confirmCart(ITEMS, USERID))
  
    const renderCardItem = (itemData) => (
        <FavoritesItem 
            item={itemData.item}
            onDelete={handlerDeleteItem}
            />
        )
  
        return (
          <View style={styles.container} showsVerticalScrollIndicator={false}> 
              <View style={styles.list}>
                  <FlatList 
                      data={ITEMS}
                      keyExtractor={(item) => item.id.toString()}
                      renderItem={renderCardItem}
                      numColumns={1} />
              </View>
              <View style={styles.confirm}>
                  <Button title="CONFIRMAR" onPress={handlerConfirmFavorites} buttonStyle={styles.button}/>
              </View>
          </View>
      )
  }
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12
    },
    footer: {
        flex: 3,
        borderTopColor: COLORS.text,
        borderTopWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    list: {
        flex: 3
    },
    text: {
        fontSize: 24,
        fontFamily: 'kaisei-Medium',
        padding: 8,
    },
    button: {
      backgroundColor: COLORS.primary,
      marginVertical: 20,
      fontFamily: 'kaisei-extraBold',
    },
    
  })
  export default connect()(CartConfirmScreen)