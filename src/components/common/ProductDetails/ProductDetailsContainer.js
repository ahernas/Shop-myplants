import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import ProductDetails from './ProductDetails';

import { getById } from '../../../redux/productDetailsRedux.js';
import { getRequest, loadProductRequest, changeAddToCartCount } from '../../../redux/productDetailsRedux';
import { addToCartRequest } from '../../../redux/cartRedux';

const mapStateToProps = (state, {match: {params: {id }}}) => ({
  productId: id,
  product: getById(state, id).data,
  count: getById(state, id).addToCartCount || 1,
  request: getRequest(state),
});

const mapDispatchToProps = (dispatch, {match: {params: {id }}}) => ({

  loadProduct: () => dispatch(loadProductRequest(id)),
  addToCart: (count) => dispatch(addToCartRequest(count, id)),
  changeAddToCartCount: (count) => dispatch(changeAddToCartCount({ productId: parseInt(id, 10), count }))});

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(ProductDetails);

export default withRouter((props) => <ConnectedComponent {...props}/>);
