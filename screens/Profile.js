import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import TopTitle from '../components/TopTitle';

const ProfileScreen = () => {
  return (
    <View style={styles.screen}>
        <TopTitle title="Mi Perfil" />
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

export default ProfileScreen;