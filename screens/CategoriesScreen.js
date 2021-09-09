import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import TopTitle from '../components/TopTitle';

const CategoriesScreen = () => {
  return (
    <View style={styles.screen}>
        <TopTitle title="Categories Screen" />
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

export default CategoriesScreen;