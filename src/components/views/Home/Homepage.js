import React from 'react';
import styles from './Homepage.module.scss';

import NewsBox from '../../features/NewsBox/NewsBoxContainer';
import GalleryBox from '../../features/GalleryBox/GalleryBox';

const HomePage = () => (
  <div className={styles.root}>
    <NewsBox/>
    <GalleryBox/>
  </div>
);

export default HomePage;
