import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AddItem from './components/AddItem';
import { AntDesign } from '@expo/vector-icons';
import ButtonSwitch from "./components/ButtonSwitch";
import COLORS from "./constants/Colors"
import Footer from "./components/Footer";
import Header from './components/Header';
import List from "./components/List/index";
import Modal from './components/Modal';
import Products from './screens/Products';
import SkincareNavigator from './navigation/SkincareNavigation';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

export default function App() {

/*const [userProduct, setUserProduct]= useState("");
  const [inputText, setInputText] = useState('');
  const [inputError, setInputError] = useState('');
  const [itemList, setItemList] = useState([]);

  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleChangeText = (text) => {
    setInputText(text);
    setInputError('');
  };

  const handleAddItem = () => {
    if (inputText) {
      setItemList([
        ...itemList,
        {
          id: Math.random().toString(),
          value: inputText,
        },
      ]);
      setInputText('');
      setInputError('');
    } else {
      setInputError('Required');
    }
  }

  const handleConfirmDelete = () => {
    const id = itemSelected.id;
    setItemList(itemList.filter(item => item.id !== id));
    setModalVisible(false);
    setItemSelected({});
  }*/

  

  const [loaded] = useFonts({
    "kaisei-regular": require('./assets/fonts/KaiseiTokumin-Regular.ttf'),
    "kaisei-medium": require('./assets/fonts/KaiseiTokumin-Medium.ttf'),
    "kaisei-Bold": require('./assets/fonts/KaiseiTokumin-Bold.ttf'),
    "kaisei-extraBold": require('./assets/fonts/KaiseiTokumin-ExtraBold.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

 /* const handleModal = id => {
    setItemSelected(itemList.find(item => item.id === id));
    setModalVisible(true);
  }

  const handlerList = selectedProduct => {
    setUserProduct(selectedProduct);
  }

  let content;

  if(userProduct){
    content = <Products />
  }*/

  return (
    /*<View style={styles.screen}>
      <Header title="Rutina de Cuidado Facial" />
    <AddItem
        handleChangeText={handleChangeText}
        handleAddItem={handleAddItem}
        inputError={inputError}
        inputText={inputText}
    />
      <List
        itemList={itemList}
        handleModal={handleModal}
      />
      <Modal
        modalVisible={modalVisible}
        handleConfirmDelete={handleConfirmDelete}
        itemSelected={itemSelected}
      />
      {content}
     <StatusBar style="auto" />
      <Footer />
    </View>*/
    <SkincareNavigator/>
  );
}


const styles = StyleSheet.create({
  screen: {
    padding: 30,
    backgroundColor: COLORS.bg,
    flex: 1,
  },
});