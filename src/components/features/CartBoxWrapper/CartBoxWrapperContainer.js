import { connect } from 'react-redux';

import CartBoxWrapper from './CartBoxWrapper';

import {getCart} from '../../../redux/cartRedux';

const mapStateToProps = state => ({
  cart: getCart(state),

});

export default connect(mapStateToProps)(CartBoxWrapper);
