import { connect } from 'react-redux';

import ProductBox from './ProductBox';

import { getAll } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getAll(state),
});

export default connect(mapStateToProps)(ProductBox);
