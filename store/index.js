import { applyMiddleware, combineReducers, createStore } from "redux";

import AuthReducer from './reducers/auth.reducer';
import CategoryReducer from "./reducers/category.reducer";
import ProductsReducer from "./reducers/product.reducer";
import thunk from 'redux-thunk';

const RootReducer = combineReducers({
  categories: CategoryReducer,
  products: ProductsReducer,
  auth: AuthReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));