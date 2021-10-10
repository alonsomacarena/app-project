import { Button, FAB } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';
import { connect, useDispatch, useSelector } from 'react-redux'

import COLORS from "../constants/Colors";
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import TopTitle from '../components/TopTitle';
import { addItem } from "../store/actions/cart.actions";

const ProductDetailScreen = ({navigation}) => {
  //const product = useSelector(state => state.products.selected)
  const dispatch = useDispatch();
  const productID = useSelector(state => state.products.selectedID);
  const products = useSelector(state => state.products.list);
  const product = products.find(item => item.id === productID);

  const handlerAddItemCart = () => {
    dispatch(addItem(product));
  }

  return (
    <View style={styles.screen}>
    <View style={styles.container}>
    <TopTitle title="Producto Seleccionado" />
      <View style={styles.detailContainer}>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.subTitle}>{product.brand}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>$ {product.price}</Text>
        </View>
        <Button
        title="Agregar a Favoritos"
        icon={<Ionicons name="add" size={24} color="white" />}
        buttonStyle={styles.button}
        onPress={handlerAddItemCart}
      />
      {/*<FAB
        icon={<Ionicons name="cart" size={24} color={COLORS.text} />}
        placement="right"
        color={COLORS.accent}
        buttonStyle={styles.buttonFab}
        onPress={() => navigation.navigate('CartScreen')}
      />*/}
    </View>
</View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.bg,
},
  container: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailContainer: {
    padding: 20,
    marginTop: 10,
    marginLeft: "5%",
    marginRight: "5%",
    borderRadius: 6,
    backgroundColor: COLORS.primary,
    borderColor: COLORS.text,
    borderWidth: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: 'kaisei-extraBold',
    marginBottom: 10,
    color: COLORS.accent
  },
  subTitle: {
    fontSize: 18,
    fontFamily: 'kaisei-extraBold',
    marginBottom: 10,
  },
  price: {
    fontSize: 30,
    fontFamily: 'kaisei-Medium',
},
description: {
    fontSize: 15,
    fontFamily: 'kaisei-Medium'
},
button: {
  backgroundColor: COLORS.accent,
  marginVertical: 20,
  fontFamily: 'kaisei-extraBold',
},
});

export default connect()(ProductDetailScreen)