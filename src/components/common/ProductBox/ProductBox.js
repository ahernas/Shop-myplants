import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProoductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart, faPlus} from '@fortawesome/free-solid-svg-icons';

class ProductBox extends React.Component {
  render() {
    const { name, photo, price, _id } = this.props;

    return(
      <div className={styles.root}>
        <div className={styles.box}>
          <div className={'d-flex justify-content-end pt-4 pr-4'}>
            <a href='/#'>
              <FontAwesomeIcon className={styles.fontHeart} icon={ faHeart }/>
            </a>
          </div>
          <div className={styles.image}>
            <img src={photo} alt='image of plant'/>
          </div>
          <div className={'d-flex justify-content-center align-items-center ' + styles.information}>
            <div className={styles.name}>{name}</div>
            <div className={styles.price}>from {price}$</div>
          </div>
          <div className={'d-flex justify-content-end pb-4 pr-4'}>
            <a href={`/products/${_id}`}>
              <div className={'d-flex justify-content-center align-items-center ' + styles.backgroundPlus}>
                <FontAwesomeIcon className={styles.fontPlus} icon={ faPlus }/>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

ProductBox.propTypes = {
  _id: PropTypes.number,
  name: PropTypes.string,
  photo: PropTypes.string,
  price: PropTypes.number,
};

export default ProductBox;
