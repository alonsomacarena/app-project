import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import AddItem from '../components/AddItem';
import COLORS from "../constants/Colors"
import Header from "../components/Header";
import List from "../components/List/index";
import Modal from "../components/Modal";
import { StatusBar } from 'expo-status-bar';
import TopTitle from '../components/TopTitle';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProductsScreen = ({navigation}) => {
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
  }

  const handleModal = id => {
    setItemSelected(itemList.find(item => item.id === id));
    setModalVisible(true);
  }

  return (
    <View style={styles.screen}>
      <TopTitle title="Tus Productos Favoritos" />
      <Header title="Agrega tus productos favoritos" />
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
     <StatusBar style="auto" />
{/*este touchableOpacity va a pushear screens nuevas al fondo con un mensaje a la nueva pantalla */}
     <TouchableOpacity onPress={()=>navigation.navigate("NestesScreen",{msg:"Desde Products"})} style={styles.button} > 
     <Text>Ir a Categorias</Text>
       </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    backgroundColor: COLORS.accent,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});

export default ProductsScreen;