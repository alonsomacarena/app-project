import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react';
import { confirmFavorites, getFavorites, removeItem } from '../store/actions/favorites.actions';
import { connect, useDispatch, useSelector } from 'react-redux'

import COLORS from "../constants/Colors"
import FavoritesItemHome from '../components/FavoritesItemHome';
import GridItem from '../components/GridItem';
import { Ionicons } from '@expo/vector-icons';
import TopTitle from '../components/TopTitle';
import TopTitleSpecial from "../components/TopTitleSpecial";
import { selectCategory } from '../store/actions/category.actions';

const HomeScreen = ({navigation}) => {
 const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.list)

  const ITEMS = useSelector(state => state.favorites.items)
  const TOTAL = useSelector(state => state.favorites.total)
const USERID = useSelector(state => state.auth.userId)


  const handleSelectedCategory = (item) => {
    dispatch(selectCategory(item.id));
    navigation.push('Products', {
      name: item.title,
    });
  }

  const onHandlerDeleteItem = (item) => {
    dispatch(removeItem(item.id))
  }

  const renderGridItem = ({ item }) => (
    <GridItem item={item} onSelected={handleSelectedCategory} />
  );


  const renderFavoritesItem = (itemData) => (
    <FavoritesItemHome 
        item={itemData.item}
        onDelete={onHandlerDeleteItem}
        />
    )

  return (
    <SafeAreaView style={styles.container}>
      <View>
      <TopTitleSpecial title="Hola," />
      </View>
      
      <View >
            <TopTitle title="Elige los productos para tu rutina" />
      </View> 
      <View style={styles.screen}>  
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderGridItem} 
      //numColumns={2}
    horizontal
contentContainerStyle={styles.list}
showsHorizontalScrollIndicator={false}
    />

     <View style={styles.titleProducts}>
       <Text style={styles.topTitle}>Tus Productos Favoritos
       <Ionicons name="star" size={24} color={COLORS.text}  />
       </Text>
      </View>  
  <View>
  <Text style={styles.textGeneral}>Aquí podrás encontrar tus productos favoritos</Text>
  </View>
     <FlatList
    data={ITEMS}
    keyExtractor={(item) => item.id.toString()}
    renderItem={renderFavoritesItem}
    horizontal
contentContainerStyle={styles.list}
showsHorizontalScrollIndicator={false}
    />
</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      
  },
  screen:{
    flex: 3, 
    justifyContent: "center" 
  },

  list:{
marginLeft:"2%",
marginTop: "5%",
marginBottom:"20%",

  },
  titleProducts:{
    alignSelf:"flex-start",
    marginLeft:"5%",
  },
  textGeneral:{
    fontSize: 13,
    fontFamily: "kaisei-Regular",
    textAlign: "left",
    marginLeft: "5%",
    marginTop: "3%",
  },
  topTitle:{
    fontSize: 20,
    color: COLORS.text,
    textTransform: "capitalize",
    fontFamily:"kaisei-extraBold",
},
})


export default connect()(HomeScreen)