import {API_URL} from '../config';
import axios from 'axios';

/* selectors */
export const getCart = ({ cart }) => cart.data || {};
export const getRequests = ({ cart }) => cart.requests || {};

/* ACTIONS */

// action name creator
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const LOAD_CART = createActionName('LOAD_CART');
const CHANGE_COUNT = createActionName('CHANGE_COUNT');
const ADD_TO_CART = createActionName('ADD_ITEM');
const DELETE_ITEM = createActionName('DELETE_ITEM');

export const startRequest = payload => ({ payload, type: START_REQUEST });
export const endRequest = payload => ({ payload, type: END_REQUEST });
export const errorRequest = payload => ({ payload, type: ERROR_REQUEST });

export const loadCart = payload => ({ payload, type: LOAD_CART });
export const changeCount = payload => ({ payload, type: CHANGE_COUNT });
export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const deleteItem = payload => ({ payload, type: DELETE_ITEM });

/* THUNKS */

export const loadCartRequest = () => {
  return async dispatch => {

    dispatch(startRequest({name: 'LOAD_CART'}));
    try {

      let res = await axios.get(`${API_URL}/cart`);
      dispatch(loadCart(res.data));
      dispatch(endRequest({name: 'LOAD_CART'}));

    } catch(e) {
      dispatch(errorRequest({error: e.message, name: 'LOAD_CART'}));
    }

  };
};

export const changeCountRequest = (id, count) => {
  return async dispatch => {

    dispatch(startRequest({name: 'CHANGE_COUNT'}));
    try {

      let res = await axios.put(`${API_URL}/cart/items/${id}`, {
        count: count,
      });
      dispatch(changeCount(res.data));
      dispatch(endRequest({name: 'CHANGE_COUNT'}));

    } catch(e) {
      dispatch(errorRequest({error: e.message, name: 'CHANGE_COUNT'}));
    }

  };
};

export const addToCartRequest = (count, productId) => {
  return async dispatch => {

    dispatch(startRequest({name: 'ADD_TO_CART'}));
    try {

      let res = await axios.post(`${API_URL}/cart/items`, {
        count: count,
        productId: productId,
      });
      dispatch(addToCart(res.data));
      dispatch(endRequest({name: 'ADD_TO_CART'}));

    } catch(e) {
      dispatch(errorRequest({error: e.message, name: 'ADD_TO_CART'}));
    }

  };
};

export const deleteItemRequest = (id) => {
  return async dispatch => {

    dispatch(startRequest({name: 'DELETE_FROM_CART'}));
    try {

      let res = await axios.delete(`${API_URL}/cart/items/${id}`);
      dispatch(deleteItem(res.data));
      dispatch(endRequest({name: 'DELETE_FROM_CART'}));

    } catch(e) {
      dispatch(errorRequest({error: e.message, name: 'DELETE_FROM_CART'}));
    }

  };
};

const initialState = {
  requests: {},
  data: {},
};


/* reducer */
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_CART:
      return {...statePart, data: action.payload};
    case START_REQUEST:
      return {...statePart, requests: { ...statePart.requests, [action.payload.name]: {pending: true, error: null, success: false} }};
    case END_REQUEST:
      return {...statePart, requests: { ...statePart.requests, [action.payload.name]: {pending: false, error: null, success: true}}};
    case ERROR_REQUEST:
      return {...statePart, requests: { ...statePart.requests, [action.payload.name]: {pending: false, error: action.payload, success: false}}};
    case CHANGE_COUNT: {
      const {count, productId} = action.payload;
      const fixedCount = Math.max(1, count);
      const items = [...statePart.data.items];
      const index = items.findIndex(({product}) => product._id === productId);

      items[index] = {
        ...items[index],
        count: fixedCount,
      };
      return {
        ...statePart,
        data: {
          ...statePart.data,
          items,
        },
      };
    }
    case ADD_TO_CART: {
      const {productId, count} = action.payload;
      return {
        ...statePart,
        data: {
          items: [
            ...statePart.items,
            {_id: productId, count: count},
          ],
        },
      };
    }

    case DELETE_ITEM: {
      const {productId} = action.payload;
      const items = [...statePart.data.items];
      const index = items.findIndex(({product}) => product._id === productId);
      items.splice(index, 1);
      return {
        data: {
          ...statePart.data,
          items,
        },
      };
    }
    default:
      return statePart;
  }
}
