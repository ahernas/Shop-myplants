import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductsWrapper.module.scss';

import ProductBox from '../../common/ProductBox/ProductBox';

class ProductsWrapper extends React.Component {

  componentDidMount() {
    this.props.loadProducts();
  }
  render() {
    const { products, request } = this.props;
    if(request.pending) {
      return <div className={'container p-0 mt-5 mb-5'}>LOADING</div>;
    }
    if(request.error) {
      return <div>Try again</div>;
    }

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
  loadProducts: PropTypes.func,
  request: PropTypes.shape({
    pending: PropTypes.bool,
    success: PropTypes.bool,
    error: PropTypes.any,
  }),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id:  PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.number,
      photo: PropTypes.string,
    })
  ),
};

export default ProductsWrapper;
