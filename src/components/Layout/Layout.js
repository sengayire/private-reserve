import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Header';
import Footer from '../Footer';

export class Layout extends Component {
  state = { style: { minHeight: window.innerHeight, width: '100%', marginTop: '-14px' } };

  componentDidMount = () => {
    window.addEventListener('resize', () => this.setState((prevState) => ({
      ...prevState,
      style: { ...prevState.state, minHeight: window.innerHeight }
    })));
  };

  render() {
    const { style } = this.state;
    const { children } = this.props;
    return (
      <div className="Layout" style={{ marginTop: '250px' }}>
        <Header />
        <div style={style}>{children}</div>
        <Footer />
      </div>
    );
  }
}
export default Layout;