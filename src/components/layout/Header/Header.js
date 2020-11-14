import React from 'react';
import TopBar from '../TopBar/TopBarContainer';
import Hero from '../Hero/Hero';

import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.root}>
    <TopBar />
    <Hero />
  </header>
);

export default Header;
