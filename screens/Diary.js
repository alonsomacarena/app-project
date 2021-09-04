import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import TopTitle from '../components/TopTitle';

const DiaryScreen = () => {
  return (
    <View style={styles.screen}>
        <TopTitle title="Photo Diary" />
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

export default DiaryScreen;