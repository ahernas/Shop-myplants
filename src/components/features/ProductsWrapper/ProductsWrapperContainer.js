import { connect } from 'react-redux';

import ProductsWrapper from './ProductsWrapper';

import { getAll } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  products: getAll(state),

});

export default connect(mapStateToProps)(ProductsWrapper);
