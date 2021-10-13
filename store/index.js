import { applyMiddleware, combineReducers, createStore } from "redux";

import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthReducer from './reducers/auth.reducer';
import CategoryReducer from "./reducers/category.reducer";
import FavoritesReducer from "./reducers/favorites.reducer";
import PlacesReducer from "./reducers/places.reducer";
import ProductsReducer from "./reducers/product.reducer";
import thunk from 'redux-thunk';

/*const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['favorites']
  };*/


const RootReducer = combineReducers({
  categories: CategoryReducer,
  products: ProductsReducer,
  favorites: FavoritesReducer,
  places: PlacesReducer,
  auth: AuthReducer,
  
});

export default createStore(RootReducer, applyMiddleware(thunk));
/*export const persistor = persistStore(store);*/
