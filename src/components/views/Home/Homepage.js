import React from 'react';
import styles from './Homepage.module.scss';

import NewsBox from '../../features/NewsBox/NewsBoxContainer';

const HomePage = () => (
  <div className={styles.root}>
    <NewsBox />
  </div>
);

export default HomePage;
