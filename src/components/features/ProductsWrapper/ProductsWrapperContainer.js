import { connect } from 'react-redux';
import ProductsWrapper from './ProductsWrapper';

import { getAll } from '../../../redux/productsRedux.js';
import {getRequest, loadProductsRequest} from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getAll(state),
  request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch(loadProductsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsWrapper);
