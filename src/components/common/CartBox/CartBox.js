import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './CartBox.module.scss';
import {faMinus, faPlus, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {ProductPropType} from '../PropTypes/ProductPropType';

class  CartBox extends React.Component {

  render() {
    const {changeCount, count, product: {name, photo, price}} = this.props;

    return (

      <div className={'container d-flex flex-row align-items-center justify-content-between ' + styles.product}>
        <div className={styles.imgBox}>
          <img src={photo}/>
        </div>
        <div className={styles.nameBox}>
          {name}
        </div>
        <div className={'d-flex align-items-center'}>
          <div className={'d-flex align-items-center justify-content-start ' + styles.amountBox}>
            <a className={styles.fontOrderBox} onClick={() => changeCount(count - 1)}>
              <FontAwesomeIcon icon={faMinus}/>
            </a>
            <div className={'d-flex align-items-center ' + styles.amount}>
              {count}
            </div>
            <a className={styles.fontOrderBox} onClick={() => changeCount(count + 1)}>
              <FontAwesomeIcon icon={faPlus}/>
            </a>
          </div>
        </div>
        <div className={styles.fontCloseBox}>
          <FontAwesomeIcon icon={faTrashAlt}/>
        </div>
        <div className={styles.price}>
          {price * count}$
        </div>
      </div>
    );
  }
}

CartBox.propTypes = {
  count: PropTypes.number,
  productId: PropTypes.string,
  product: ProductPropType,
  changeCount: PropTypes.func,
  cart: PropTypes.object,
};

export default CartBox;
