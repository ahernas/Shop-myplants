import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {ProductPropType} from '../PropTypes/ProductPropType';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPen,
  faTint,
  faSun,
  faTemperatureHigh,
  faSeedling,
  faArrowsAltV,
  faPlus,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';

import styles from './ProductDetails.module.scss';
import Button from '../Button/Button';

class ProductDetails extends React.Component {

  render() {
    const { changeAddToCartCount, addToCart, count, product: {id, name, photo, description, images, water, light, temperature, difficulty, size, price }} = this.props;
    return (
      <div className={'container mb-5 ' + styles.productDetails}>
        <div className={'row mb-2 ' + styles.mainBox}>
          <div className={'col d-flex align-items-center justify-content-end ' + styles.name}>{name}</div>
          <div className={'col d-flex align-items-center justify-content-center'}>
            <img src={photo} alt='view of plant'/>
          </div>
        </div>
        <div className={'row d-flex ' + styles.galleryBox}>
          {images.map(image => (<img className={styles.image} key={image} src={image}/>
          ))}
        </div>
        <div className={'row mt-4 ' + styles.descriptionBox}>
          <div className='row pl-3'>
            <div className={'pr-2 d-flex align-items-center justify-content-center'}>
              <FontAwesomeIcon className={styles.font} icon={faPen}/>
            </div>
            <h3>Description</h3>
          </div>
          <p className='pl-4'>{description}</p>
        </div>
        <div className={'row mt-4 justify-content-between ' + styles.requirement}>
          <div className={'d-flex flex-row ' + styles.requirementBox}>
            <div>
              <FontAwesomeIcon className={styles.font} icon={faTint}/>
            </div>
            <div>
              <h3>water</h3>
              <p>{water}</p>
            </div>
          </div>
          <div className={'d-flex flex-row ' + styles.requirementBox}>
            <div>
              <FontAwesomeIcon className={styles.font} icon={faSun}/>
            </div>
            <div>
              <h3>light</h3>
              <p>{light}</p>
            </div>
          </div>
          <div className={'d-flex flex-row ' + styles.requirementBox}>
            <div>
              <FontAwesomeIcon className={styles.font} icon={faTemperatureHigh}/>
            </div>
            <div>
              <h3>temperature</h3>
              <p>{temperature}</p>
            </div>
          </div>
          <div className={'d-flex flex-row ' + styles.requirementBox}>
            <div>
              <FontAwesomeIcon className={styles.font} icon={faSeedling}/>
            </div>
            <div>
              <h3>difficulty</h3>
              <p>{difficulty}</p>
            </div>
          </div>
          <div className={'d-flex flex-row ' + styles.requirementBox}>
            <div>
              <FontAwesomeIcon className={styles.font} icon={faArrowsAltV}/>
            </div>
            <div>
              <h3>size</h3>
              <p>{size}</p>
            </div>
          </div>
        </div>
        <div className={'row mt-4 flex-column ' + styles.orderDetails}>
          <div className={'d-flex flex-row align-items-center'}>
            <div className={'d-flex align-items-center justify-content-start ' + styles.amountBox}>
              <div className={styles.fontOrderBox} onClick={() => changeAddToCartCount(count - 1)}>
                <FontAwesomeIcon icon={faMinus}/>
              </div>
              <div className={'d-flex align-items-center ' + styles.amount}>
                {count}
              </div>
              <div className={styles.fontOrderBox} onClick={() => changeAddToCartCount(count + 1)}>
                <FontAwesomeIcon icon={faPlus}/>
              </div>
            </div>
            <div className={'d-flex align-items-center justify-content-end ' + styles.price}>
              { count * price }$
            </div>
          </div>
          <div className='d-flex justify-content-end align-items-center ' onClick={() => addToCart(id, count)}>
            <Button className={styles.button} variant='main'>Add to cart</Button>
          </div>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  count: PropTypes.number,
  productId: PropTypes.string,
  product: ProductPropType,
  images: PropTypes.array,
  changeAddToCartCount: PropTypes.func,
  addToCart: PropTypes.func,
};

export default withRouter((props) => <ProductDetails {...props}/>);

