import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductsWrapper.module.scss';

import ProductBox from '../../common/ProductBox/ProductBoxContainer';

class ProductsWrapper extends React.Component {

  render() {
    const { products } = this.props;
    console.log({products});
    return (
      <div className={styles.root}>
        <div className={'container p-0 mt-5 mb-5'}>
          <div className={styles.wrapper}>
            {products.map(item => (
              <div
                key={item.id}
                className={'d-flex ' + styles.itemBox}>
                <ProductBox {...item}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

ProductsWrapper.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      photo: PropTypes.string,
    })
  ),
};

export default ProductsWrapper;
