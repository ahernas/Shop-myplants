import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'reactstrap';

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
                    <NavLink href="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink href="/products">Products</NavLink>
                  </li>
                  <li>
                    <NavLink href="/plantfinder">Plant finder</NavLink>
                  </li>
                  <li>
                    <NavLink href="/aboutus">About us</NavLink>
                  </li>
                  <li>
                    <NavLink href="/contacts">Contact</NavLink>
                  </li>
                  <li>
                    <NavLink href="/user">
                      <FontAwesomeIcon className={`icons ${styles.icon}`} icon={faUser}/>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="/cart">
                      <FontAwesomeIcon className={styles.icon} icon={faShoppingCart}/>
                    </NavLink>
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
