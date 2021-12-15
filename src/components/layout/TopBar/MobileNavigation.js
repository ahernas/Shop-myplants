import React  from 'react';
import NavLinks from './NavLinks';

import styles from './TopBar.module.scss';

import {CgMenu} from 'react-icons/cg';
import {CgClose} from 'react-icons/cg';
import {useState} from 'react';

const MobileNavigation = () => {

  const [open, setOpen] = useState(false);

  const hamburgerIcon = <CgMenu className={styles.hamburger}
    onClick={() => setOpen(!open)}
  />;

  const closeIcon = <CgClose className={styles.hamburger}
    onClick={() => setOpen(!open)}
  />;

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className={styles.mobileNavigation}>
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
};

export default MobileNavigation;
