import { connect } from 'react-redux';

import OrderForm from './OrderForm';

import {getCart} from '../../../redux/cartRedux';
import {getById} from '../../../redux/productsRedux';

const mapStateToProps = (state, {id}) => {
  const cart = getCart(state);
  return {
    cart,
    itemsWithProducts: cart.items.map(item => ({
      ...item,
      product:  getById(state, item.id),
    })),
  };
};

export default connect(mapStateToProps)(OrderForm);
