import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input } from 'reactstrap';
import Button from '../Button/Button';

import styles from './OrderForm.module.scss';
import {ProductPropType} from '../PropTypes/ProductPropType';

class  OrderForm extends React.Component {

  render() {
    const { cart: {items}, itemsWithProducts } = this.props;
    const totalPrice = itemsWithProducts.map(item => item.count * item.product.price).reduce((prev, next) => prev + next, 0);
    const deliveryPrice = 10;

    return (
      <div className={'container d-flex justify-content-end mb-5'}>
        <div className={styles.orderBox}>
          <div className={'row ' + styles.productBox}>
            <div className={'col '}>
              {items.length} x Product(s)
            </div>
            <div className={'col d-flex justify-content-end'}>
              {totalPrice}$
            </div>
          </div>
          <div className={'row ' + styles.deliveryBox}>
            <div className={'col '}>
            Delivery cost
            </div>
            <div className={'col d-flex justify-content-end'}>
              {deliveryPrice}$
            </div>
          </div>
          <div className={'row pl-3 '}>
            <FormGroup className={'d-flex flex-row align-items-center'}>
              <Label className={'m-0 pr-2 ' + styles.label} for="clientName">Name:</Label>
              <Input className={styles.input} type="text" name="client" id="clientName" placeholder="John Doe" />
            </FormGroup>
          </div>
          <div className={'row pl-3 '}>
            <FormGroup className={'d-flex flex-row align-items-center'}>
              <Label className={'m-0 pr-2 ' + styles.label} for="clientEmail">Email:</Label>
              <Input className={styles.input} type="email" name="email" id="clientEmail" placeholder="john.doe@gmail.com" />
            </FormGroup>
          </div>
          <div className={'row pl-3 mb-3 '}>
            <FormGroup className={'d-flex flex-row align-items-center'}>
              <Label className={'m-0 pr-2 ' + styles.label} for="clientAddress">Address:</Label>
              <Input className={styles.input} type="text" name="address" id="clientAddress" placeholder="12 Baker Street New York, NY 12345 " />
            </FormGroup>
          </div>
          <div className={'row pl-3 d-flex justify-content-end align-items-center pr-3'}>
            <div className={styles.summaryPrice}>
              {totalPrice !== 0 ? totalPrice + deliveryPrice : deliveryPrice - 10}$
            </div>
            <div>
              <Button className={styles.buttonOrder} variant='outline'>Order</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

OrderForm.propTypes = {
  cart: PropTypes.shape( {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        count: PropTypes.number,
      })
    )}),
  itemsWithProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      count: PropTypes.number,
      product: ProductPropType,
    })
  ),
};

export default OrderForm;