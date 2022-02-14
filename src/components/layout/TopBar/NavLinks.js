import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styles from './TopBar.module.scss';
import {faShoppingCart, faUser} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import PropTypes from 'prop-types';

const NavLinks = (props) => {
  const animateFrom = {opacity: 0, y: -40};
  const animateTo = {opacity: 1, y: 0};


  return (
    <ul>
      <li
        initial={animateFrom}
        animate={animateTo}
        onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/">Home</a>
      </li>
      <li
        initial={animateFrom}
        animate={animateTo}
        onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/products">Products</a>
      </li>
      <li
        initial={animateFrom}
        animate={animateTo}
        onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/plantFinder">Plant finder</a>
      </li>
      <li
        initial={animateFrom}
        animate={animateTo}
        onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/aboutUs">About us</a>
      </li>
      <li
        initial={animateFrom}
        animate={animateTo}
        onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/contacts">Contact</a>
      </li>
      <li
        initial={animateFrom}
        animate={animateTo}
        onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/user">
          <FontAwesomeIcon className={`icons ${styles.icon}`} icon={faUser}/>
        </a>
      </li>
      <li
        initial={animateFrom}
        animate={animateTo}
        onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/cart">
          <FontAwesomeIcon className={styles.icon} icon={faShoppingCart}/>
        </a>
      </li>
    </ul>
  );
};

NavLinks.propTypes = {
  isMobile: PropTypes.bool,
  closeMobileMenu: PropTypes.func,
};

export default NavLinks;
