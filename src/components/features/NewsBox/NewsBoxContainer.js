import { connect } from 'react-redux';

import NewsBox from './NewsBox';

import { getAll } from '../../../redux/newsBoxRedux';

const mapStateToProps = state => ({
  news: getAll(state),
});

export default connect(mapStateToProps)(NewsBox);
