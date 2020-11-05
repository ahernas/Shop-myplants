import React from 'react';
import styles from './ProductsPage.module.scss';

import ProductViewWrapper from '../../features/ProductsViewsWrapper/ProductsViewsWrapperContainer';

const ProductsPage = () => (
  <div className={styles.root}>
    <ProductViewWrapper/>
  </div>
);

export default ProductsPage;
