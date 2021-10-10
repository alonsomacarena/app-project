import { Dimensions, FlatList, StyleSheet, View } from 'react-native'
import { connect, useDispatch, useSelector } from 'react-redux'

import COLORS from "../constants/Colors"
import GridItem from '../components/GridItem';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import TopTitle from '../components/TopTitle';
import TopTitleSpecial from "../components/TopTitleSpecial";
import { selectCategory } from '../store/actions/category.actions';

const HomeScreen = ({navigation}) => {
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
      <View>
      <TopTitleSpecial title="Hola," />
      </View>
      <View>
            <TopTitle title="Elige los productos para tu rutina" />
      </View>      
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderGridItem} 
      //numColumns={2}
    horizontal
contentContainerStyle={styles.list}
showsHorizontalScrollIndicator={false}
    />
    <View style={styles.containerFavorites}>
     <View style={styles.containerFavoritesTitle}>
      <TopTitle title="Tus productos Favoritos" />  
      <Ionicons name="star" size={24} color={COLORS.text}  />      
     </View>
     
     </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      flexDirection: "column",
      height: Dimensions.get("window").height,
  },
  list:{
marginRight: 100,
marginLeft:"2%",
marginTop: "5%",
marginBottom:"20%",

  },
  containerFavoritesTitle:{
    flex: 1,
    flexDirection: 'row',
    width: Dimensions.get("window").width/1.5,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft:"3%",
  },
  containerFavorites:{
    marginTop: "10%",
    width: "100%",
    height: "42%",

  },

})


export default connect()(HomeScreen)