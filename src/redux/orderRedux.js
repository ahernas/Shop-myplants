import {API_URL} from '../config';
import axios from 'axios';

/* selectors */
export const getRequests = ({ order }) => order.requests || {};

/* ACTIONS */

// action name creator
const reducerName = 'orders';
const createActionName = name => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const SUBMIT_ORDER = createActionName('SUBMIT_ORDER');

export const startRequest = payload => ({ payload, type: START_REQUEST });
export const endRequest = payload => ({ payload, type: END_REQUEST });
export const errorRequest = payload => ({ payload, type: ERROR_REQUEST });

export const submitOrder = payload => ({ payload, type: SUBMIT_ORDER });

/* THUNKS */

export const submitOrderRequest = ({name, email, address, message}) => {
  return async dispatch => {

    dispatch(startRequest({name: 'SUBMIT_ORDER'}));
    try {

      let res = await axios.post(`${API_URL}/order`, {
        name: name,
        email: email,
        address: address,
        message: message,
      });
      dispatch(submitOrder(res.data));
      dispatch(endRequest({name: 'SUBMIT_ORDER'}));

      return res.data;
    } catch(e) {
      dispatch(errorRequest({error: e.message, name: 'SUBMIT_ORDER'}));
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

    case START_REQUEST:
      return {...statePart, requests: { ...statePart.requests, [action.payload.name]: {pending: true, error: null, success: false} }};
    case END_REQUEST:
      return {...statePart, requests: { ...statePart.requests, [action.payload.name]: {pending: false, error: null, success: true}}};
    case ERROR_REQUEST:
      return {...statePart, requests: { ...statePart.requests, [action.payload.name]: {pending: false, error: action.payload, success: false}}};

    case SUBMIT_ORDER: {
      return {
        ...initialState,
        data: action.payload,
      };
    }

    default:
      return statePart;
  }
}
