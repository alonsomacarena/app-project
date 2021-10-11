import { URL_API } from '../../constants/database';

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CONFIRM_FAVORITES = 'CONFIRM_FAVORITES';

export const addItem = (item) => ({
  type: ADD_ITEM,
  item,
});

export const removeItem = (itemID) => ({
  type: REMOVE_ITEM,
  itemID,
});

export const confirmFavorites = (payload, userId) => {
  return async dispatch => {
    try {
      dispatch({
        type: CONFIRM_FAVORITES,
        status: 'loading',
      });

      const response = await fetch(`${URL_API}/favorites.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: Date.now(),
          userId,
          items: { ...payload },
        }),
      });

      const result = await response.json();

      console.log(result)

      dispatch({
        type: CONFIRM_FAVORITES,
        status: 'success',
      });
    } catch (error) {
      console.log(error.message);
      dispatch({
        type: CONFIRM_FAVORITES,
        status: 'error',
      });
    }
  }
}