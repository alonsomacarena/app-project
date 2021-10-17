import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux'
import { filterProducts, selectProduct } from '../store/actions/product.actions';

import COLORS from "../constants/Colors";
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
    <View style={styles.container}>
      <View style={styles.titleContainer}>
    <TopTitle title="Los mejores Productos" />
    </View>
    <FlatList
      data={product}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItemProduct}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    height: Dimensions.get("window").height,
  },
  titleContainer:{
    marginTop:"8%",
    marginBottom:"5%",
  backgroundColor: COLORS.title,
    padding: "5%",
    marginHorizontal:"5%",
    borderRadius: 6,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    borderColor: COLORS.text,
    borderWidth: 1,
  },
})


export default connect()(CategoryProductsScreen)