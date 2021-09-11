import { FlatList, View } from 'react-native';
import React, { useEffect } from 'react';
import { filterProducts, selectProduct } from '../store/actions/product.actions';
import { useDispatch, useSelector } from 'react-redux';

import ProductItem from '../components/ProductItem';
import TopTitle from '../components/TopTitle';

export default function CategoryProductsScreen({ navigation }) {
  const dispatch = useDispatch();
  const categoryID = useSelector(state => state.categories.selectedID);
  const products = useSelector(state => state.products.filteredProducts);

  useEffect(() => {
    dispatch(filterProducts(categoryID));
  }, [categoryID]);

  const handleSelected = (item) => {
    dispatch(selectProduct(item.id));
    navigation.navigate('Detail', {
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
      data={products}
      keyExtractor={item => item.id}
      renderItem={renderItemProduct}
    />
    </View>
  );
}
