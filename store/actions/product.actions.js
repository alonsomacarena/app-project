export const SELECT_PRODUCT = 'SELECT_PRODUCT';
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';

export const selectProduct = (productID) => ({
  type: SELECT_PRODUCT,
  productID,
});

export const filterProducts = (categoryID) => ({
  type: FILTER_PRODUCTS,
  categoryID,
})