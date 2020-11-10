import React from 'react';
import { connect } from 'react-redux';

import ProductDetails from './ProductDetails';

import { getById } from '../../../redux/productsRedux.js';
import { getById as getByIdProductDetails } from '../../../redux/productDetailsRedux.js';
import {withRouter} from 'react-router-dom';
import {changeAddToCartCount} from '../../../redux/productDetailsRedux';
import {addToCart} from '../../../redux/cartRedux';

const mapStateToProps = (state, {match: {params: {id }}}) => ({
  productId: id,
  product: getById(state, id),
  count: getByIdProductDetails(state, id).addToCartCount,
});

const mapDispatchToProps = (dispatch, {match: {params: {id }}}) => ({
  changeAddToCartCount: (count) => dispatch(changeAddToCartCount({ productId: parseInt(id, 10), count })),
  addToCart: (id, count) => dispatch(addToCart({ id, count })),
});

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(ProductDetails);

export default withRouter((props) => <ConnectedComponent {...props}/>);
