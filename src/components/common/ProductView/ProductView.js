import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductView.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTemperatureHigh, faTint, faSun} from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';

class ProductView extends React.Component {
  render() {
    const { name, photo, light, temperature, water } = this.props;

    return(
      <div className={'container ' + styles.productViewContainer}>
        <div className={'row ' + styles.productView}>
          <div className={'col align-item-center justify-content-center d-flex ' + styles.information}>
            <div className={styles.requirement + ' d-flex flex-column align-items-start justify-content-center'}>
              <div className={' d-flex align-items-center justify-content-center '}>
                <div>
                  <FontAwesomeIcon className={styles.font} icon={faTint}/>
                </div>
                <div className={styles.boxText}>
                  <div className={styles.parameter}>water</div>
                  <div className={styles.property}>{water}</div>
                </div>
              </div>
              <div className={' d-flex align-items-center justify-content-center pt-3 '}>
                <div>
                  <FontAwesomeIcon className={styles.font} icon={faSun}/>
                </div>
                <div className={styles.boxText}>
                  <div className={styles.parameter}>light</div>
                  <div className={styles.property}>{light}</div>
                </div>
              </div>
              <div className={' d-flex align-items-center justify-content-center pt-3 '}>
                <div>
                  <FontAwesomeIcon className={styles.font} icon={faTemperatureHigh}/>
                </div>
                <div className={styles.boxText}>
                  <div className={styles.parameter}>temperature</div>
                  <div className={styles.property}>{temperature}</div>
                </div>
              </div>

            </div>
          </div>
          <div className={'col d-flex justify-content-center align-items-center ' + styles.plant}>
            <div className={'flex-column d-flex justify-content-end '}>
              <div className={styles.title}>{name}</div>
              <div>
                <Button className={'mt-4 ' + styles.button} variant='outline'>See plant</Button>
              </div>
            </div>
            <img src={photo} alt='view of plant'/>
          </div>
        </div>
      </div>
    );
  }
}

ProductView.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  photo: PropTypes.string,
  price: PropTypes.number,
  water: PropTypes.string,
  light: PropTypes.string,
  temperature: PropTypes.string,
};

export default ProductView;
