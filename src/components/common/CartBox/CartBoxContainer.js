import { connect } from 'react-redux';
import CartBox from './CartBox';

import {changeCountRequest, deleteItemRequest, getRequests} from '../../../redux/cartRedux';

const mapStateToProps = (state, {id}) => ({
  requestChangeCount: getRequests(state)['CHANGE_COUNT'] || {},
});

const mapDispatchToProps = (dispatch, {product: {_id}}) => ({
  changeCount: (count) => dispatch(changeCountRequest(_id, count)),
  deleteItem: () => dispatch(deleteItemRequest(_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartBox);
