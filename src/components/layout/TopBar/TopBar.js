import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import styles from './TopBar.module.scss';

class TopBar extends React.Component {


  render() {
    const {company} = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row justify-content-between'>
            <div className='row text-left align-items-center'>
              <div className={styles.companyName}>{company.name}</div>
              <div className={styles.companyLogo}>
                <img src={company.logo}/>
              </div>
            </div>
            <div className='row text-right'>
              <div className={`col-4 text-right col-sm text-right  ${styles.topMenu}`}>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/products">Products</a>
                  </li>
                  <li>
                    <a href="/plantFinder">Plant finder</a>
                  </li>
                  <li>
                    <a href="/aboutUs">About us</a>
                  </li>
                  <li>
                    <a href="/contacts">Contact</a>
                  </li>
                  <li>
                    <a href="/user">
                      <FontAwesomeIcon className={`icons ${styles.icon}`} icon={faUser}/>
                    </a>
                  </li>
                  <li>
                    <a href="/cart">
                      <FontAwesomeIcon className={styles.icon} icon={faShoppingCart}/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TopBar.propTypes = {
  company: PropTypes.object,
};

export default TopBar;
