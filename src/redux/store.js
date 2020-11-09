import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import initialState from './initialState';

import viewPortReducer from './viewPortRedux';
import productsRedux from './productsRedux';
import companyRedux from './companyRedux';
import productDetailsRedux from './productDetailsRedux';
import cartRedux from './cartRedux';

// define reducers
const reducers = {
  viewport: viewPortReducer,
  products: productsRedux,
  company: companyRedux,
  productDetails: productDetailsRedux,
  cart: cartRedux,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
export const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
