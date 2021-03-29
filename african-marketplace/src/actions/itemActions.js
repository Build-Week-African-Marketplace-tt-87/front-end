import { GET_ITEMS, SET_LOADING, ITEMS_ERROR, ADD_ITEM } from "./types";

// Get items from server
export const getItems = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch("/items");
    const data = await res.json();

    dispatch({
      type: GET_ITEMS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ITEMS_ERROR,
      payload: error.response.data,
    });
  }
};

//Add new item
export const addItem = (item) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch({
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_ITEM,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ITEMS_ERROR,
      payload: error.response.data,
    });
  }
};

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
