import { FlatList, View } from 'react-native';
import React, { useEffect } from 'react';
import { filterBreads, selectBread } from '../store/actions/bread.actions';
import { useDispatch, useSelector } from 'react-redux';

import BreadItem from '../components/BreadItem';
import TopTitle from '../components/TopTitle';

export default function CategoryBreadsScreen({ navigation }) {
  const dispatch = useDispatch();
  const categoryID = useSelector(state => state.categories.selectedID);
  const breads = useSelector(state => state.breads.filteredBreads);

  useEffect(() => {
    dispatch(filterBreads(categoryID));
  }, [categoryID]);

  const handleSelected = (item) => {
    dispatch(selectBread(item.id));
    navigation.navigate('Detail', {
      name: item.name,
    });
  }

  const renderItemBread = ({ item }) => (
    <BreadItem item={item} onSelected={handleSelected} />
  )

  return (
    <View>
    <TopTitle title="Los mejores Productos" />

    <FlatList
      data={breads}
      keyExtractor={item => item.id}
      renderItem={renderItemBread}
    />
    </View>
  );
}
