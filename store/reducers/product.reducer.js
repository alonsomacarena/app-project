import { FILTER_PRODUCTS, SELECT_PRODUCT } from '../actions/product.actions';

import { PRODUCTS } from '../../data/products';

const initialState = {
  list: PRODUCTS,
  filteredProducts: [],
  selectedID: null,
};

const ProductsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SELECT_PRODUCT:
      return {
        ...state,
        selectedID: action.productID,
      };
    case FILTER_PRODUCTS:
      return {
        ...state,
        filteredProducts: state.list.filter(item => item.category === action.categoryID)
      }
    default:
      return state;
  }
}

export default ProductsReducer;