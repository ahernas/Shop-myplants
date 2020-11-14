import { connect } from 'react-redux';
import CartBoxWrapper from './CartBoxWrapper';

import {getCart, getRequests, loadCartRequest} from '../../../redux/cartRedux';

const mapStateToProps = state => ({
  cart: getCart(state),
  requests: getRequests(state),
});

const mapDispatchToProps = dispatch => ({
  loadCartItems: () => dispatch(loadCartRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartBoxWrapper);
