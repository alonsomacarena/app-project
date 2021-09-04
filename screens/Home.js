import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import TopTitleSpecial from '../components/TopTitleSpecial';

/*const Home = ({navigation}) => {*/
  const Home = () => {
  
  return (
    <ScrollView
    indicatorStyle="white"
    contentContainerStyle={[
      styles.scrollContentContainer,
  ]} >
    <TopTitleSpecial title="Hola 'Nombre'," />
  </ScrollView>
    
  )
}
   /*<View style={styles.screen}>
      <Text>Home Screen</Text>
      <Button title="Ir a productos" onPress={() =>{navigation.navigate("ProductsScreen")}} />
    </View>*/
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;