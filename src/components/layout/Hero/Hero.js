import React from 'react';

import styles from './Hero.module.scss';

const Hero = () => (
  <div className={styles.root}>
    <div className='container '>
      <div className='row align-items-end justify-content-center overflow-hidden'>
        <div className={'col pt-5 ' + styles.titles}>
          <div className={styles.subtitle}>Go green.</div>
          <div className={styles.title}>The world of wonderful plants</div>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
