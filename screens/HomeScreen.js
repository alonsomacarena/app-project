import { Dimensions, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useEffect} from 'react';
import { confirmFavorites, getFavorites, removeItem } from '../store/actions/favorites.actions';
import { connect, useDispatch, useSelector } from 'react-redux'
import { deleteOrder, getOrders } from '../store/actions/order.action'

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

const USERID = useSelector(state => state.auth.userId)
const orders = useSelector(state => state.orders.items)

useEffect(() => {
    dispatch(getOrders(USERID))
},[])


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
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View>
      <TopTitleSpecial title="Hola," />
      </View>
      
      <View >
            <TopTitle title="Encuentra los mejores productos :" />
      </View> 
      <View>
  <Text style={styles.textGeneral}>Elige tus productos favoritos de cada categoría...</Text>
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
  <Text style={styles.textGeneral}>Aquí podrás encontrar tus productos favoritos. También lo harás en Favoritos...</Text>
  </View>
  <FlatList 
                data={Object.values(orders)}
                keyExtractor={(items) => items.id.toString()}
                renderItem={(data, index) => (
                    <FavoritesItemHome 
                    key={index}
                    item={data.item.items}
            onDelete={onHandlerDeleteItem}
            />
                )
                
        
                }
                horizontal
                contentContainerStyle={styles.list}
                showsHorizontalScrollIndicator={false}
                 />

{/*<View style={styles.titleProducts1}>
       <Text style={styles.topTitle}>Tus Rutinas 
       <Ionicons name="time" size={20} color={COLORS.text}  />
       </Text>
      </View>  
      <View>
  <Text style={styles.textGeneral1}>No te olvides de crear tus rutinas de día y noche! Podes acceder a ellas al hacer click en Rutinas </Text>
  </View>

  <View style={styles.titleProducts1}>
       <Text style={styles.topTitle}>Tu Registro Fotográfico 
       <Ionicons name="journal" size={20} color={COLORS.text}  />
       </Text>
      </View>  
      <View>
  <Text style={styles.textGeneral1}>Mantene un registro semanal de tu proceso al subir tus fotos y comentarios en Registro </Text>
  </View>*/}

  

</View>
    </ScrollView>
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
    width: "90%",
  },
  topTitle:{
    fontSize: 20,
    color: COLORS.text,
    textTransform: "capitalize",
    fontFamily:"kaisei-extraBold",
},
titleProducts1:{
  alignSelf:"flex-start",
  marginLeft:"5%",
  backgroundColor: "transparent"
},
textGeneral1:{
  fontSize: 13,
  fontFamily: "kaisei-Regular",
  textAlign: "left",
  marginLeft: "5%",
  marginTop: "3%",
  width: "90%",
  marginBottom: "5%"
},
})


export default connect()(HomeScreen)