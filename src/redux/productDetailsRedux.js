import {API_URL} from '../config';
import axios from 'axios';

/* selectors */
export const getById = ({ productDetails }, productId) => productDetails[productId] || {};
export const getRequest = ({ productDetails }) => productDetails.request;

/* ACTIONS */

// action name creator
const reducerName = 'productDetails';
const createActionName = name => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const LOAD_PRODUCT = createActionName('LOAD_PRODUCT');
const changeAddToCartCountActionName = createActionName('changeAddToCartCount');


export const startRequest = payload => ({ payload, type: START_REQUEST });
export const endRequest = payload => ({ payload, type: END_REQUEST });
export const errorRequest = payload => ({ payload, type: ERROR_REQUEST });

export const loadProduct = payload => ({ payload, type: LOAD_PRODUCT });
export const changeAddToCartCount = ({ productId, count }) => ({type: changeAddToCartCountActionName, payload: { productId, count }});

/* THUNKS */

export const loadProductRequest = (id) => {
  return async dispatch => {

    dispatch(startRequest());
    try {

      let res = await axios.get(`${API_URL}/products/${id}`);
      dispatch(loadProduct(res.data));
      dispatch(endRequest());

    } catch(e) {
      dispatch(errorRequest(e.message));
    }

  };
};

const initialState = {
  0: {
    addToCartCount: 1,
    data: {},
  },
  request: {},
};

/* reducer */
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case changeAddToCartCountActionName: {
      const { productId, count } = action.payload;
      const fixedCount = Math.max(1, count);
      return {
        ...statePart,
        [productId]: {
          ...statePart[productId],
          addToCartCount: fixedCount,
        },
      };
    }
    case LOAD_PRODUCT: {
      const productId = action.payload._id;
      return { ...statePart, [productId]: {...statePart[productId], data: action.payload} };
    }
    case START_REQUEST:
      return { ...statePart, request: { pending: true, error: null, success: false } };
    case END_REQUEST:
      return { ...statePart, request: { pending: false, error: null, success: true } };
    case ERROR_REQUEST:
      return { ...statePart, request: { pending: false, error: action.payload, success: false } };
    default:
      return statePart;
  }
}
