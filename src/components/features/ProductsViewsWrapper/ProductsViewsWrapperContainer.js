import { connect } from 'react-redux';

import ProductsViewsWrapper from './ProductsViewsWrapper';

import { getAll } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  products: getAll(state),

});

export default connect(mapStateToProps)(ProductsViewsWrapper);
