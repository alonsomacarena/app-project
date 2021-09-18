import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux'
import { filterProducts, selectProduct } from '../store/actions/product.actions';

import ProductItem from '../components/ProductItem';
import TopTitle from '../components/TopTitle';

const CategoryProductsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const categoryID = useSelector(state => state.categories.selectedID);
  const product = useSelector(state => state.products.filteredProducts);

  useEffect(() => {
    dispatch(filterProducts(categoryID));
  }, [categoryID]);

  const handleSelected = (item) => {
    dispatch(selectProduct(item.id));
    navigation.push('Detail', {
      name: item.name,
    });
  }

  const renderItemProduct = ({ item }) => (
    <ProductItem item={item} onSelected={handleSelected} />
  )

  return (
    <View>
    <TopTitle title="Los mejores Productos" />

    <FlatList
      data={product}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItemProduct}
    />
    </View>
  );
}
export default connect()(CategoryProductsScreen)