import React from 'react';
import PropTypes from 'prop-types';

import styles from './CartBoxWrapper.module.scss';

import CartBox from '../../common/CartBox/CartBoxContainer';

class CartBoxWrapper extends React.Component {

  render() {
    const { cart } = this.props;
    return (
      <div className={'container p-0 mt-5 mb-5'}>
        <div className={styles.wrapper}>
          {cart.items.map(item => (<CartBox key={item.id} {...item}/>
          ))}
        </div>
      </div>
    );
  }
}

CartBoxWrapper.propTypes = {
  cart: PropTypes.shape( {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        count: PropTypes.number,
      })
    )}),
};

export default CartBoxWrapper;
