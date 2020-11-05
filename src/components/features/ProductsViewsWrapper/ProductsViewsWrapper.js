import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductsViewsWrapper.module.scss';

import ProductView from '../../common/ProductView/ProductView';

class ProductsViewsWrapper extends React.Component {

  render() {
    const { products } = this.props;
    return (
      <div className={'container p-0 mt-5 mb-5'}>
        <div className={styles.wrapper}>
          {products.map(item => (<ProductView key={item.id} {...item}/>

          ))}
        </div>
      </div>
    );
  }
}

ProductsViewsWrapper.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      photo: PropTypes.string,
      water: PropTypes.string,
      light: PropTypes.string,
      temperature: PropTypes.string,
    })
  ),
};

export default ProductsViewsWrapper;
