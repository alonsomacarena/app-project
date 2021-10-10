import { Dimensions, FlatList, ScrollView, StyleSheet, View } from 'react-native'
import { connect, useDispatch, useSelector } from 'react-redux'

import GridItem from '../components/GridItem';
import React from 'react';
import TopTitle from '../components/TopTitle';
import TopTitleSpecial from "../components/TopTitleSpecial";
import { selectCategory } from '../store/actions/category.actions';

const CategoriesScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.list)

  const handleSelectedCategory = (item) => {
    dispatch(selectCategory(item.id));
    navigation.push('Products', {
      name: item.title,
    });
  }

  const renderGridItem = ({ item }) => (
    <GridItem item={item} onSelected={handleSelectedCategory} />
  );

  return (
    <View style={styles.container}>
      <TopTitleSpecial title="Hola," />
            <TopTitle title="Elige los productos para tu rutina" />
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderGridItem} 
      //numColumns={2}
    horizontal
contentContainerStyle={styles.list}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "transparent",
  },
  list:{
marginRight: 100,
marginLeft:"2%",
marginTop: "5%",
  }

})


export default connect()(CategoriesScreen)