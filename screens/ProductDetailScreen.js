import { StyleSheet, Text, View } from 'react-native';

import COLORS from "../constants/Colors";
import React from 'react';
import TopTitle from '../components/TopTitle';
import { useSelector } from 'react-redux';

export default function ProductDetailScreen() {
  const productID = useSelector(state => state.products.selectedID);
  const products = useSelector(state => state.products.list);
  const product = products.find(item => item.id === productID);
  
  return (
    <View style={styles.container}>
      <TopTitle title="Producto preferido" />
      <View style={styles.detailContainer}>
      <Text style={styles.title}>{product.name}</Text>
      <Text>{product.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailContainer: {
    padding: 20,
    margin: 10,
    borderRadius: 3,
    backgroundColor: COLORS.bg,
    borderColor: COLORS.text,
    borderWidth: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: 'kaisei-extraBold',
    marginBottom: 10,
  },
});
