import { StyleSheet, Text, View } from 'react-native';

import COLORS from "../constants/Colors";
import React from 'react';
import TopTitle from '../components/TopTitle';
import { useSelector } from 'react-redux';

export default function BreadDetailScreen() {
  const breadID = useSelector(state => state.breads.selectedID);
  const breads = useSelector(state => state.breads.list);
  const bread = breads.find(item => item.id === breadID);
  
  return (
    <View style={styles.container}>
      <TopTitle title="Producto preferido" />
      <View style={styles.detailContainer}>
      <Text style={styles.title}>{bread.name}</Text>
      <Text>{bread.description}</Text>
      <Text>$ {bread.price}</Text>
      <Text>{bread.weight}</Text>
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
