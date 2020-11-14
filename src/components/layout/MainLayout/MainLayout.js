import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import clsx from 'clsx';
import { getViewPort, changeViewPort } from '../../../redux/viewPortRedux';

import styles from './MainLayout.module.scss';

class Component extends React.Component {

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  resize = () => {
    const {changeViewPort} = this.props;
    if (window.innerWidth <= 420) {
      changeViewPort('mobile-slim');
    } else if (window.innerWidth <= 767) {
      changeViewPort('mobile');
    } else if (window.innerWidth <= 991) {
      changeViewPort('tablet-2');
    } else if (window.innerWidth <= 1199) {
      changeViewPort('tablet-3');
    } else {
      changeViewPort('desktop');
    }
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  render() {
    const {className, children} = this.props;
    return (
      <div className={clsx(className, styles.root)}>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  changeViewPort: PropTypes.func,
};

const mapStateToProps = state => ({
  viewport: getViewPort(state),
});

const mapDispatchToProps = dispatch => ({
  changeViewPort: viewPort => dispatch(changeViewPort(viewPort)),
});

export const MainLayout = connect(mapStateToProps, mapDispatchToProps) (Component);


