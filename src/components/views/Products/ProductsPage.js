import React from 'react';
import ProductViewsWrapper from '../../features/ProductsViewsWrapper/ProductsViewsWrapperContainer';

import styles from './ProductsPage.module.scss';

const ProductsPage = () => (
  <div className={styles.root}>
    <ProductViewsWrapper/>
  </div>
);

export default ProductsPage;
