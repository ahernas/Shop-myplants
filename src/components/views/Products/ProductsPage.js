import React from 'react';
import styles from './ProductsPage.module.scss';

import ProductViewsWrapper from '../../features/ProductsViewsWrapper/ProductsViewsWrapperContainer';

const ProductsPage = () => (
  <div className={styles.root}>
    <ProductViewsWrapper/>
  </div>
);

export default ProductsPage;
