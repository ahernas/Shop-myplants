import React from 'react';
import PropTypes from 'prop-types';

import styles from './Header.module.scss';

import TopBar from '../TopBar/TopBarContainer';
import Hero from '../Hero/Hero';

const Header = props => (
  <header className={styles.root}>
    <TopBar />
    <Hero />
  </header>
);

// Header.propTypes = {};

export default Header;
