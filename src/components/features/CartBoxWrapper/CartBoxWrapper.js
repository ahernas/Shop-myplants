import React from 'react';
import PropTypes from 'prop-types';
import CartBox from '../../common/CartBox/CartBoxContainer';
import Button from '../../common/Button/Button';

import styles from './CartBoxWrapper.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

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
        <a className={'d-flex justify-content-end mt-4'}>
          <Button
            className={styles.buttonArrowRight}
            variant="outline"
            href="/products"
          >
            Continue shopping
            <FontAwesomeIcon className={'ml-2 ' + styles.arrowRight} icon={faArrowRight}/>
          </Button>
        </a>
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
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default CartBoxWrapper;
