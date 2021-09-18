import { applyMiddleware, combineReducers, createStore } from "redux";

import AuthReducer from './reducers/auth.reducer';
import CartReducer from "./reducers/cart.reducer";
import CategoryReducer from "./reducers/category.reducer";
import OrderReducer from "./reducers/order.reducer";
import ProductsReducer from "./reducers/product.reducer";
import thunk from 'redux-thunk';

const RootReducer = combineReducers({
  categories: CategoryReducer,
  products: ProductsReducer,
  cart: CartReducer,
  auth: AuthReducer,
  order: OrderReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));