import { FlatList, StyleSheet, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import React, { useEffect, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import DiaryDetailItem from '../components/DiaryDetailItem';
import HeaderButton from '../components/HeaderButton';
import { loadDiary } from '../store/actions/diary.actions';

const DiaryDetailScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const entrys = useSelector(state => state.entrys.entrys);
    

    useEffect(() => {
        dispatch(loadDiary());
    }, []);

    const renderItem = (data) => (
        <DiaryDetailItem
            title={data.item.title}
            image={data.item.image}
            comment={data.item.comment}
        />
    )

    return (
        <View style={styles.container}>
        <FlatList
            data={entrys}
            keyExtractor={(item) => item.id.toString()}
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


export default DiaryDetailScreen;