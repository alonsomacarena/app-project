import { Button, FAB } from 'react-native-elements';
import { Dimensions, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { connect, useDispatch, useSelector } from 'react-redux'

import COLORS from "../constants/Colors";
import CartItem from '../components/CartItem';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import TopTitle from '../components/TopTitle';
import { addItem } from "../store/actions/favorites.actions";
import { confirmFavorites } from '../store/actions/favorites.actions';
import { removeItem } from '../store/actions/favorites.actions';

const CartConfirmScreen = ({navigation}) => {
 
    const dispatch = useDispatch();
    const productID = useSelector(state => state.products.selectedID);
    const products = useSelector(state => state.products.list);
    const product = products.find(item => item.id === productID);
  
    const USERID = useSelector(state => state.auth.userId)
    const ITEMS = useSelector(state => state.favorites.items)
    
    const handlerConfirmFavorites = () => {
      dispatch(confirmFavorites(ITEMS, USERID,product));
    }
    const handlerDeleteItem = (id) => dispatch(removeItem(id))


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
            <Button
        title="CONFIRMAR"
        buttonStyle={styles.button}
        onPress={handlerConfirmFavorites}  
        
      />
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
    backgroundColor: COLORS.accent,
    marginVertical: 20,
    fontFamily: 'kaisei-extraBold',
    borderRadius: 6,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    borderColor: COLORS.bg,
    borderWidth: 1,
    padding: "4%",
    marginTop:"15%",
  },
  
})
export default connect()(CartConfirmScreen)