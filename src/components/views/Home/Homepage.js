import React from 'react';
import styles from './Homepage.module.scss';

import NewsBox from '../../features/NewsBox/NewsBoxContainer';
import GalleryBox from '../../features/GalleryBox/GalleryBox';
import SpecialPriceBox from '../../features/SpecialPriceBox/SpecialPriceBox';
import ProductsWrapper from '../../features/ProductsWrapper/ProductsWrapperContainer';

const HomePage = () => (
  <div className={styles.root}>
    <NewsBox/>
    <GalleryBox/>
    <SpecialPriceBox/>
    <ProductsWrapper/>
  </div>
);

export default HomePage;
