import { Button, FAB } from 'react-native-elements';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { confirmCart, removeItem } from '../store/actions/cart.actions';
import { connect, useDispatch, useSelector } from 'react-redux'

import COLORS from "../constants/Colors";
import CartItem from '../components/CartItem';
import React from 'react';

const CartScreen = () => {
 
  const ITEMS = useSelector(state => state.cart.items)
  const TOTAL = useSelector(state => state.cart.total)
  const USERID = useSelector(state => state.auth.userId)
  
  const dispatch = useDispatch()
  
  const handlerDeleteItem = (id) => dispatch(removeItem(id))

  const handlerConfirmCart = () => dispatch(confirmCart(ITEMS, USERID))

  const renderCardItem = (itemData) => (
      <CartItem 
          item={itemData.item}
          onDelete={handlerDeleteItem}
          />
      )

      return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList 
                    data={ITEMS}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderCardItem}
                    numColumns={1} />
            </View>
            <View style={styles.confirm}>
                <Button title="CONFIRMAR" onPress={handlerConfirmCart} buttonStyle={styles.button}/>
            </View>
            <View style={styles.footer}>
                <Text style={styles.text}>TOTAL</Text>
                <Text style={styles.text}>$ {TOTAL}</Text>
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
      flex: .2,
      borderTopColor: COLORS.text,
      borderTopWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end'
  },
  list: {
      flex: .8
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
export default connect()(CartScreen)
