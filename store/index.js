import { combineReducers, createStore } from "redux";

import CategoryReducer from "./reducers/category.reducer";
import ProductsReducer from "./reducers/product.reducer";

const RootReducer = combineReducers({
  categories: CategoryReducer,
  products: ProductsReducer,
});

export default createStore(RootReducer);