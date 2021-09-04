import { StyleSheet, Text, View } from 'react-native';

import Header from "../components/Header";
import React from 'react';
import TopTitle from '../components/TopTitle';

const RoutineScreen = () => {
  return (
    <View style={styles.screen}>
       <TopTitle title="rutinas de cuidado" />
       <Header title="agrega tus rutinas de día y de noche" />
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

export default RoutineScreen;