import { connect } from 'react-redux';

import OrderForm from './OrderForm';

import {getCart} from '../../../redux/cartRedux';

const mapStateToProps = (state, {id}) => {
  const cart = getCart(state);
  return {
    cart,
  };
};

export default connect(mapStateToProps)(OrderForm);
