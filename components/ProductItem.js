import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import COLORS from "../constants/Colors";
import React from 'react';

const ProductItem = ({ item, onSelected }) => {
    return (
      <TouchableOpacity onPress={() => onSelected(item)}>
        <View style={styles.productItem}>
          <View>
            <Text style={styles.title}>{item.name}</Text>
          </View>
          <View>
            <Text style={styles.details}>{item.brand}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  
  const styles = StyleSheet.create({
    productItem: {
      padding: 20,
      marginTop: 10,
      marginRight: "5%",
      marginLeft: "5%",
      borderRadius: 6,
      backgroundColor: COLORS.bg,
      borderColor: COLORS.text,
      borderWidth: 1,
    },
    title: {
      fontSize: 20,
      fontFamily: 'kaisei-extraBold',
      color: COLORS.text,
    },
    details: {
      fontSize: 18,
      color: COLORS.text,
    },
  });
  
  export default ProductItem;