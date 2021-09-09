import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import React from 'react';

const ProductItem = ({ item, onSelected }) => {
  return (
    <TouchableOpacity onPress={() => onSelected(item)}>
      <View style={styles.productItem}>
        <View>
          <Text style={styles.title}>{item.name}</Text>
        </View>
        <View>
        <Text style={styles.details}> {item.brand}</Text>
          <Text style={styles.details}>$ {item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  productItem: {
    padding: 20,
    margin: 10,
    borderRadius: 3,
    backgroundColor: '#ccc'
  },
  title: {
    fontSize: 20,
    fontFamily: 'OpenSansBold',
  },
  details: {
    fontSize: 18,
  },
});

export default ProductItem;