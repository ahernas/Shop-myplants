import { connect } from 'react-redux';

import ProductView from './ProductView';

import { getAll } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getAll(state),
});

export default connect(mapStateToProps)(ProductView);
