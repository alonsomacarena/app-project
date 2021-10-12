import {FlatList, StyleSheet, Text, View} from "react-native";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import React, { useEffect, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import RoutinesItem from '../components/RoutinesItem';
import TopTitle from "../components/TopTitle";
import { loadRoutines } from "../store/actions/routine.action"

const RoutineScreen = ({navigation}) => {

    const dispatch = useDispatch();
    const routine = useSelector(state => state.routine.routine);

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
        dispatch(loadRoutines());
    }, []);

    const renderRoutine = (data) => (
        <RoutinesItem
        title={data.item.title}
        turno={data.item.turno}
        horario={data.item.horario}
        step1={data.item.step1}
        step2={data.item.step2}
        step3={data.item.step3}
        step4={data.item.step4}
        otros={data.item.otros}
        onSelect={() => navigation.navigate('DetalleRoutine')}
        />
    )

    return (
        <View>
        <View style={styles.container}>
        <TopTitle title="Rutinas Diarias" />
        <Text style={styles.textGeneral}>Aquí podrás armar tus rutinas de día y de noche</Text>
        </View>
        <FlatList
            data={routine}
            keyExtractor={item => item.id}
            renderItem={renderRoutine}
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

export default RoutineScreen;