import CategoriesScreen from "../screens/CategoriesScreen";
import ProductsScreen from '../screens/Products';
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//crea un objeto para el Stack Navigator
const Stack = createNativeStackNavigator();

const ProductsScreenNavigator = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Products" component={ProductsScreen} />
            <Stack.Screen name="Categorias" component={CategoriesScreen} />
        </Stack.Navigator>
    );
}
export {ProductsScreenNavigator}; //stacknavigator para la tab products

//se puede repetir lo mismo para las demas tabs