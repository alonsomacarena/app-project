import { FlatList, StyleSheet, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import React, { useEffect, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import DiaryItem from '../components/DiaryItem';
import HeaderButton from '../components/HeaderButton';
import TopTitle from "../components/TopTitle";
import { loadDiary } from '../store/actions/diary.actions';

const DiaryScreen = ({ navigation }) => {
    const dispatch = useDispatch();
   const entrys = useSelector(state => state.entrys.entrys);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
               <HeaderButtons HeaderButtonComponent={HeaderButton}>
                   <Item
                        title="Nueva"
                        iconName="md-add"
                        onPress={() => navigation.navigate('Nuevo')}
                   />
               </HeaderButtons> 
            )
        })
    }, [navigation]);

    useEffect(() => {
        dispatch(loadDiary());
    }, []);

    const renderItem = (data) => (
        <DiaryItem
            title={data.item.title}
            image={data.item.image}
            comment={data.item.comment}
            onSelect={() => navigation.navigate('DetalleDiario')}
        />
    )

    return (
        <View style={styles.container}>
          <TopTitle title="Seguimiento de Proceso" />
        <Text style={styles.textGeneral}>Aquí podrás mantener un seguimiento de tu proceso con fotos semanales... No olvides agregar tus comentarios para mantener un registro más detallado!</Text>

        <FlatList
            data={entrys}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12
    },
    textGeneral:{
        fontSize: 12,
        fontFamily: "kaisei-Regular",
        textAlign: "center",
        marginVertical: 10,
      }
})


export default DiaryScreen;