import React  from 'react';
import NavLinks from './NavLinks';

import styles from './TopBar.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.navigationBox}>
      <NavLinks/>
    </nav>



  );
};

export default Navigation;
