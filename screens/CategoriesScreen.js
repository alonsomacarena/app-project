import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import GridItem from '../components/GridItem';
import React from 'react';
import TopTitle from '../components/TopTitle';
import TopTitleSpecial from "../components/TopTitleSpecial";
import { selectCategory } from '../store/actions/category.actions';

export default function CategoriesScreen({ navigation }) {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.list); 

  const handleSelectedCategory = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate('Products', {
      name: item.title,
    });
  }

  const renderGridItem = ({ item }) => (
    <GridItem item={item} onSelected={handleSelectedCategory} />
  );

  return (
    <View>
      <TopTitleSpecial title="Hola 'Nombre'," />
            <TopTitle title="Elige los productos para tu rutina" />
    <FlatList
      data={categories}
      keyExtractor={item => item.id}
      renderItem={renderGridItem}
      numColumns={2} 
    />
    </View>
  );
}
