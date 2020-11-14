import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input } from 'reactstrap';
import Button from '../Button/Button';

import styles from './OrderForm.module.scss';

class  OrderForm extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      name: '',
      address: '',
      email: '',
      message: '',
    };
  }
  render() {
    const { cart, submitOrder } = this.props;
    const { name, address, email, message } = this.state;
    if(!cart.items) {
      return null;
    }
    const totalPrice = cart.items.map(item => item.count * item.product.price).reduce((prev, next) => prev + next, 0);
    const deliveryPrice = 10;

    return (
      <div className={'container d-flex justify-content-end mb-5'}>
        <div className={styles.orderBox}>
          <div className={'row ' + styles.productBox}>
            <div className={'col '}>
              {cart?.items?.length} x Product(s)
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
              <Input
                className={styles.input}
                type="text"
                name="name"
                id="clientName"
                placeholder="John Doe"
                value={name}
                onChange={event => this.setState({ name: event.target.value })}
              />
            </FormGroup>
          </div>
          <div className={'row pl-3 '}>
            <FormGroup className={'d-flex flex-row align-items-center'}>
              <Label className={'m-0 pr-2 ' + styles.label} for="clientEmail">Email:</Label>
              <Input
                className={styles.input}
                type="email"
                name="email"
                id="clientEmail"
                placeholder="john.doe@gmail.com"
                value={email}
                onChange={event => this.setState({ email: event.target.value })}
              />
            </FormGroup>
          </div>
          <div className={'row pl-3 mb-3 '}>
            <FormGroup className={'d-flex flex-row align-items-center'}>
              <Label className={'m-0 pr-2 ' + styles.label} for="clientAddress">Address:</Label>
              <Input
                className={styles.input}
                type="text"
                name="address"
                id="clientAddress"
                placeholder="12 Baker Street New York, NY 12345 "
                value={address}
                onChange={event => this.setState({ address: event.target.value })}
              />
            </FormGroup>
          </div>
          <div className={'row pl-3 mb-3 '}>
            <FormGroup className={'d-flex flex-row align-items-center'}>
              <Label className={'m-0 pr-2 ' + styles.label} for="clientMessage">Message:</Label>
              <Input
                className={styles.input}
                type="textarea"
                name="message"
                id="clientMessage"
                placeholder="Add a custom message (optional)... "
                value={message}
                onChange={event => this.setState({ message: event.target.value })}
              />
            </FormGroup>
          </div>
          <div className={'row pl-3 d-flex justify-content-end align-items-center pr-3'}>
            <div className={styles.summaryPrice}>
              {totalPrice !== 0 ? totalPrice + deliveryPrice : 0}$
            </div>
            <div>
              <Button className={styles.buttonOrder} variant='outline'
                disabled={!email || ! name || !address}
                onClick={(e) => {
                  e.preventDefault();
                  submitOrder({ name, email, address, message });
                }}
              >
                Order
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

OrderForm.propTypes = {
  cart: PropTypes.shape( {
    deliveryPrice: PropTypes.number,
    totalPrice: PropTypes.number,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        count: PropTypes.number,
      })
    )}),

  submitOrder: PropTypes.func,
  name: PropTypes.string,
  email: PropTypes.string,
  address: PropTypes.string,
  message: PropTypes.string,
};

export default OrderForm;
