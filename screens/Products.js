import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

const ProductsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text> Products Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductsScreen;