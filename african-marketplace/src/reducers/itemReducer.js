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
} from "../actions/types";

const initialState = {
  items: null,
  current: null,
  loading: false,
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
        loading: false,
      };
    case DELETE_ITEM: 
      return {
          ...state,
          items: state.items.filter((item)=> item.id !== action.payload),
          loading: false
      }
    case SEARCH_ITEMS:
        return{
            ...state,
            items: action.payload
        }
    case UPDATE_ITEM:
        return{
            ...state,
            items: state.items.map(item => item.id === action.payload.id ? action.payload : item)
        }
    case SET_CURRENT: 
      return {
          ...state,
          current: action.payload
      }
    case CLEAR_CURRENT: 
      return {
          ...state,
          current: null
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ITEMS_ERROR:
      console.error("ITEMS_ERROR", action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
