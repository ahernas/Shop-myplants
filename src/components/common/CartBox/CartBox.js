import React from 'react';
import PropTypes from 'prop-types';

import styles from './CartBox.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMinus, faPlus, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {ProductPropType} from '../PropTypes/ProductPropType';

class  CartBox extends React.Component {

  render() {
    const {deleteItem, changeCount, count, product: {_id, name, photo, price}, requestChangeCount} = this.props;

    return (

      <div className={'container d-flex align-items-center ' + styles.product}>
        <div className={styles.imgBox}>
          <img src={photo} alt='image of plant'/>
        </div>
        <div className={styles.nameBox}>
          {name}
        </div>
        <div className={'d-flex align-items-center'}>
          <div className={'d-flex justify-content-start ' + styles.amountBox}>
            <a className={styles.fontOrderBox} onClick={() => !requestChangeCount.pending ? changeCount(count - 1) : null}>
              <FontAwesomeIcon icon={faMinus}/>
            </a>
            <div className={'d-flex align-items-center ' + styles.amount}>
              {count}
            </div>
            <a className={styles.fontOrderBox} onClick={() => !requestChangeCount.pending ? changeCount(count + 1) : null}>
              <FontAwesomeIcon icon={faPlus}/>
            </a>
          </div>
        </div>
        <a className={styles.fontCloseBox} onClick={ () => deleteItem(_id)}>
          <FontAwesomeIcon icon={faTrashAlt}/>
        </a>
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
  deleteItem: PropTypes.func,
  cart: PropTypes.object,
  requestChangeCount: PropTypes.shape({
    pending: PropTypes.bool,
    success: PropTypes.bool,
    error: PropTypes.any,
  }),
};

export default CartBox;
