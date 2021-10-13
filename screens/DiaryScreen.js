import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import React, { useEffect, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import DiaryItem from '../components/DiaryItem';
import { FlatList } from 'react-native'
import HeaderButton from '../components/HeaderButton';
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
        <FlatList
            data={entrys}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
        />
    )
}

export default DiaryScreen;