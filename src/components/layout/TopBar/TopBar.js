import React from 'react';
import PropTypes from 'prop-types';

import styles from './TopBar.module.scss';

import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

class TopBar extends React.Component {

  render() {
    const {company} = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row justify-content-around'>
            <div className={`row text-left align-items-center  ${styles.companyBox}`}>
              <div className={styles.companyName}>{company.name}</div>
              <div className={styles.companyLogo}>
                <img src={company.logo} alt='image of logo'/>
              </div>
            </div>
            <div className='row text-right'>
              <div className={`col-4 text-right col-sm text-right  ${styles.topMenu}`}>
                <Navigation/>
                <MobileNavigation/>
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
