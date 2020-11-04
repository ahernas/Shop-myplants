import React from 'react';

import styles from './SpecialPriceBox.module.scss';
import Button from '../../common/Button/Button';

class SpecialPriceBox extends React.Component {

  render() {

    return (
      <div className='container'>
        <div className={'row d-flex justify-content-around align-items-center ' + styles.box}>
          <div className={styles.boxText}>
            <div className={styles.title}>
              <p>Special
                <span> Collection</span>
              </p>
            </div>
            <div className={styles.percent}>
              <p>Save up
                <span> 45%</span>
              </p>
            </div>
            <div className={'d-flex justify-content-end ' + styles.button}>
              <Button variant='main'>Shop now</Button>
            </div>
          </div>
          <div className={styles.boxImage}>
            <img src={'https://i.postimg.cc/HxbnYVRV/photo.png'}/>
          </div>
        </div>
      </div>
    );
  }
}

export default SpecialPriceBox;
