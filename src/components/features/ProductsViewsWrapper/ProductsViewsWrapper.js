import React from 'react';
import PropTypes from 'prop-types';
import ProductView from '../../common/ProductView/ProductView';

import styles from './ProductsViewsWrapper.module.scss';

class ProductsViewsWrapper extends React.Component {
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
  loadProducts: PropTypes.func,
  request: PropTypes.shape({
    pending: PropTypes.bool,
    success: PropTypes.bool,
    error: PropTypes.any,
  }),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
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
