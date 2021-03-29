import {GET_ITEMS, SET_LOADING, ITEMS_ERROR, ADD_ITEM} from '../actions/types';

const initialState = {
    items: null,
    current: null,
    loading: false,
    error: null
}



export default (state=initialState, action) => {
    switch(action.type) {
        case GET_ITEMS: 
            return {
                ...state,
                items: action.payload,
                loading: false
            }
        case ADD_ITEM: 
            return {
                ...state,
                items: [...state.items, action.payload],
                loading: false
            }
        case SET_LOADING:
            return{
                ...state,
                loading: true
            };
        case ITEMS_ERROR:
            console.error(action.payload);
            return{
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}