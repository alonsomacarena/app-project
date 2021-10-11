import { Button, FAB } from 'react-native-elements';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { connect, useDispatch, useSelector } from 'react-redux'

import COLORS from "../constants/Colors";
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import TopTitle from '../components/TopTitle';
import { addItem } from "../store/actions/favorites.actions";
import { confirmFavorites } from '../store/actions/favorites.actions';

const ProductDetailScreen = ({navigation}) => {
  //const product = useSelector(state => state.products.selected)
  const dispatch = useDispatch();
  const productID = useSelector(state => state.products.selectedID);
  const products = useSelector(state => state.products.list);
  const product = products.find(item => item.id === productID);

  const USERID = useSelector(state => state.auth.userId)
  const ITEMS = useSelector(state => state.favorites.items)
  
  const handlerAddItemFavorites = () => {
    dispatch(addItem(product));
  }
  const handlerConfirmFavorites = () => {
    dispatch(confirmFavorites(ITEMS, USERID));
  }

  return (
    <ScrollView style={styles.screen} showsVerticalScrollIndicator="false">
    <View style={styles.container}>
      <View style={styles.titleContainer}>
    <TopTitle title="Producto Seleccionado" />
    </View>
      <View style={styles.detailContainer}>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.subTitle}>{product.brand}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Button
        title="Agregar a Favoritos"
        icon={<Ionicons name="star" size={24} color={COLORS.bg} style={{paddingRight:6}} />}
        buttonStyle={styles.button}
        onPress={handlerAddItemFavorites} 
        onPress={handlerConfirmFavorites} 
      />
        </View>
       
      {/*<FAB
        icon={<Ionicons name="cart" size={24} color={COLORS.text} />}
        placement="right"
        color={COLORS.accent}
        buttonStyle={styles.buttonFab}
        onPress={() => navigation.navigate('CartScreen')}
      />*/}
    </View>
</ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
},
  container: {
   
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer:{
    marginTop:"8%",
    marginBottom:"5%",
    backgroundColor: COLORS.title,
    padding: "5%",
    borderRadius: 6,
    borderColor: COLORS.text,
    borderWidth: 1,
    width: "90%",
  },
  detailContainer: {
    padding: 20,
    marginTop: "2%",
    marginBottom: "6%",
    marginLeft: "5%",
    marginRight: "5%",
    borderRadius: 6,
    backgroundColor: COLORS.primary,
    borderColor: COLORS.text,
    borderWidth: 1,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    width: "90%",
  },
  title: {
    fontSize: 20,
    fontFamily: 'kaisei-extraBold',
    marginBottom: 10,
    color: COLORS.accent,
  },
  subTitle: {
    fontSize: 18,
    fontFamily: 'kaisei-extraBold',
    marginBottom: 10,
    color: COLORS.text,
  },
description: {
    fontSize: 15,
    fontFamily: 'kaisei-Medium',
    color: COLORS.text,
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
});

export default connect()(ProductDetailScreen)