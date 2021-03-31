import {
  GET_ITEMS,
  SET_LOADING,
  ITEMS_ERROR,
  ADD_ITEM,
  DELETE_ITEM,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_ITEM,
  SEARCH_ITEMS
} from "./types";

// Get items from server
export const getItems = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/https://african-marketplace-bwtt87.herokuapp.com/items");
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

    const res = await fetch("https://african-marketplace-bwtt87.herokuapp.com/items", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
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

//Delete item from server
export const deleteItem = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/https://african-marketplace-bwtt87.herokuapp.com/items/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_ITEM,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: ITEMS_ERROR,
      payload: error.response.data,
    });
  }
};

//UPDATE item from server
export const updateItem = (item) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/https://african-marketplace-bwtt87.herokuapp.com/items/${item.id}`, {
      method: "PUT",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    dispatch({
      type: UPDATE_ITEM,
      payload: item,
    });
  } catch (error) {
    dispatch({
      type: ITEMS_ERROR,
      payload: error.response.data,
    });
  }
};

// Search items 
export const searchItems = (text) => async (dispatch) => {
    try {
      setLoading();
  
      const res = await fetch(`/https://african-marketplace-bwtt87.herokuapp.com/items/?q=${text}`);
      const data = await res.json();
  
      dispatch({
        type: SEARCH_ITEMS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ITEMS_ERROR,
        payload: error.response.data,
      });
    }
  };

// Set Current Item
export const setCurrent = (item) => {
  return {
    type: SET_CURRENT,
    payload: item,
  };
};
// Clear current Item
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
