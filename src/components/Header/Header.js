import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Header.scss';
import { ShoppingCartOutlined } from '@material-ui/icons';

import { logout } from '../../actions/user';

class Header extends Component {
  state = {
    isAuth: false,
    username: '',
    firstName: '',
    lastName: ''
  };

  componentWillMount = () => {
    const { isAuth, firstName, username, lastName } = this.props;

    this.setState({ isAuth, firstName, username, lastName });
  };


  logout = (e) => {
    e.preventDefault();
    const { logout } = this.props;
    logout();
  };

  render() {
    const { username, isAuth } = this.state;
    return (
      <header className="Header fluid">
        <div className="container">
          <div className='logo'>
            <div className='logo-title'><span className='logo-title-first'>Private</span><span className='logo-title-second'>Reserve</span ></div>
          </div>
          <div className='header-content'>
            <div className='account-info'>
              <span>Hi, kamikolove.bookings@gmail.com</span>
              <span>|</span>
              <span>EG-460304</span>
              <span className='account-balance'>Balance: CA$0.00</span>
            </div>
            <div className='account-shopping-cart'>
              <span><ShoppingCartOutlined style={{ color: 'white' }} /></span>
              <span className='carts-numbers'>0</span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({
  user: {
    isAuth,
    profile: { username, firstName, lastName, role }
  }
}) => ({
  isAuth,
  username,
  firstName,
  lastName,
  role
});

export default connect(mapStateToProps, { logout })(Header);
