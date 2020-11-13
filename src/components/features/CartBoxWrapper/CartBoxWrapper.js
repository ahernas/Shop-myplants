import React from 'react';
import PropTypes from 'prop-types';

import styles from './CartBoxWrapper.module.scss';

import CartBox from '../../common/CartBox/CartBoxContainer';

class CartBoxWrapper extends React.Component {
  componentDidMount() {
    this.props.loadCartItems();
  }

  render() {
    const { cart, requests } = this.props;
    if(requests['LOAD_CART']?.pending || !cart) {
      return <div className={'container p-0 mt-5 mb-5'}>LOADING</div>;
    }
    if(requests['LOAD_CART']?.error) {
      return <div>Try again</div>;
    }

    return (
      <div className={'container p-0 mt-5 mb-5'}>
        <div className={styles.wrapper}>
          {cart.items?.map(item => (<CartBox key={item.id} {...item}/>
          ))}
        </div>
      </div>
    );
  }
}

CartBoxWrapper.propTypes = {
  loadCartItems: PropTypes.func,
  requests: PropTypes.shape(PropTypes.shape({
    pending: PropTypes.bool,
    success: PropTypes.bool,
    error: PropTypes.any,
  })),
  cart:  PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        productId: PropTypes.number,
        count: PropTypes.number,
      })),
  }),
};

export default CartBoxWrapper;
