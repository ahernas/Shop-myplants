import { connect } from 'react-redux';

import {withRouter} from 'react-router-dom';
import OrderForm from './OrderForm';

import { getCart } from '../../../redux/cartRedux';
import {getById} from '../../../redux/productsRedux';
import { submitOrderRequest } from '../../../redux/orderRedux';

const mapStateToProps = (state, {id}) => {
  const cart = getCart(state);
  return {
    cart,
  };
};

const mapDispatchToProps = (dispatch, { history }) => ({
  submitOrder: ({ name, email, address, message }) => {
    dispatch(submitOrderRequest({ name, email, address, message })).then(({_id}) => {
      history.push(`/cart/${_id}/`);
    });
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrderForm));
