import React from 'react';
import PropTypes from 'prop-types';
import FeatureBox from '../../common/FeatureBox/FeatureBox';

import styles from './FeatureBoxes.module.scss';

import {
  faTruck,
  faHeadphones,
  faReplyAll,
  faBullhorn,
} from '@fortawesome/free-solid-svg-icons';

const FeatureBoxes = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className='col-6 col-lg-3 col-md-6 col-sm-6'>
          <FeatureBox icon={faTruck} active>
            <h5>Free shipping</h5>
            <p>All orders</p>
          </FeatureBox>
        </div>
        <div className='col-6 col-lg-3 col-md-6 col-sm-6'>
          <FeatureBox icon={faHeadphones}>
            <h5>24/7 customer</h5>
            <p>support</p>
          </FeatureBox>
        </div>
        <div className='col-6 col-lg-3 col-md-6 col-sm-6'>
          <FeatureBox icon={faReplyAll}>
            <h5>Money back</h5>
            <p>guarantee</p>
          </FeatureBox>
        </div>
        <div className='col-6 col-lg-3 col-md-6 col-sm-6'>
          <FeatureBox icon={faBullhorn}>
            <h5>Member discount</h5>
            <p>First order</p>
          </FeatureBox>
        </div>
      </div>
    </div>
  </div>
);

FeatureBoxes.propTypes = {
  children: PropTypes.node,
};

export default FeatureBoxes;
