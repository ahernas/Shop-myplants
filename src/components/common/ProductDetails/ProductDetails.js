import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {ProductPropType} from '../PropTypes/ProductPropType';
import Button from '../Button/Button';

import styles from './ProductDetails.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPen,
  faTint,
  faSun,
  faTemperatureHigh,
  faSeedling,
  faArrowsAltV,
  faPlus,
  faMinus, faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

class ProductDetails extends React.Component {
  componentDidMount() {
    this.props.loadProduct();
  }
  render() {
    const { request, changeAddToCartCount, addToCart, count, product} = this.props;
    if(request.error) {
      return <div>Try again</div>;
    }
    if(request.pending || !product) {
      return <div className={'container p-0 mt-5 mb-5'}>LOADING</div>;
    }
    const { name, photo, description, images, water, light, temperature, difficulty, size, price } = product;
    return (
      <div className={'container mb-5 ' + styles.productDetails}>
        <div className={'row mb-2 ' + styles.mainBox}>
          <div className={'col d-flex align-items-center justify-content-end ' + styles.name}>{name}</div>
          <div className={'col d-flex align-items-center justify-content-center'}>
            <img src={photo} alt='view of plant'/>
          </div>
        </div>
        <div className={'row d-flex ' + styles.galleryBox}>
          {images.map(image => (<img className={styles.image} key={image} src={image} alt='image of plant'/>
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
        <div className={'row mt-4 ' + styles.orderDetails}>
          <div className={'d-flex align-items-center ' + styles.amountPriceBox}>
            <div className={'d-flex align-items-center ' + styles.amountBox}>
              <a className={styles.fontOrderBox} onClick={() => changeAddToCartCount(count - 1)}>
                <FontAwesomeIcon icon={faMinus}/>
              </a>
              <div className={'d-flex align-items-center ' + styles.amount}>
                {count}
              </div>
              <a className={styles.fontOrderBox} onClick={() => changeAddToCartCount(count + 1)}>
                <FontAwesomeIcon icon={faPlus}/>
              </a>
            </div>
            <div className={'d-flex align-items-center justify-content-end ' + styles.price}>
              { count * price }$
            </div>
          </div>
          <div className={'d-flex flex-row justify-content-between'}>
            <div className={'d-flex align-items-center justify-content-center'}>
              <Button className={styles.button} variant='main' href="/products">
                <FontAwesomeIcon className='mr-2' icon={faArrowLeft}/>
                Back
              </Button>
            </div>
            <a className='d-flex align-items-center justify-content-center'>
              <Button className={styles.button} onClick={(e) => {
                e.preventDefault();
                addToCart(count).then(() => {
                  this.props.history.push('/cart');});
              }}
              variant='main'>Add to cart
              </Button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  request: PropTypes.shape({
    pending: PropTypes.bool,
    success: PropTypes.bool,
    error: PropTypes.any,
  }),
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  loadProduct: PropTypes.func,
  addToCart: PropTypes.func,
  count: PropTypes.number,
  productId: PropTypes.string,
  product: ProductPropType,
  images: PropTypes.array,
  changeAddToCartCount: PropTypes.func,
};

export default withRouter((props) => <ProductDetails {...props}/>);
