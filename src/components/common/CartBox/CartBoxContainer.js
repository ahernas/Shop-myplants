import React from 'react';
import { connect } from 'react-redux';

import CartBox from './CartBox';

import { getById } from '../../../redux/productsRedux.js';
import {changeCount} from '../../../redux/cartRedux';

const mapStateToProps = (state, {id}) => ({
  product: getById(state, id),

});

const mapDispatchToProps = (dispatch, {id}) => ({
  changeCount: (count) => dispatch(changeCount({ id: parseInt(id, 10), count })),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartBox);
