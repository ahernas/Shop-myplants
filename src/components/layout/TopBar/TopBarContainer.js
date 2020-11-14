import { connect } from 'react-redux';
import TopBar from './TopBar';

import { getAll } from '../../../redux/companyRedux';

const mapStateToProps = state => ({
  company: getAll(state),
});

export default connect(mapStateToProps)(TopBar);
