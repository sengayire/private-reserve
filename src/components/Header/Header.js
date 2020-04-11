import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';
import welcome from '../../assets/images/bgImage.png';
import siteLogo from '../../assets/images/logo_ah_secondo.png';
import siteLogoSmall from '../../assets/images/logo_ah_small.png';
import { Img, Button } from '../common';
import HeaderUserMenu from './HeaderUserMenu/HeaderUserMenu';
import HeaderUserImage from './HeaderUserImage/HeaderUserImage';
import header from '../../assets/images/header-image.png';
import { logout } from '../../actions/user';

class Header extends Component {
  state = {
    isAuth: false,
    username: '',
    firstName: '',
    lastName: '',
  };

  componentWillMount = () => {
    const { isAuth, firstName, username, lastName } = this.props;

    this.setState({ isAuth, firstName, username, lastName });
  };

  // componentWillUnmount = () => {
  //   window.scrollTo(0, 0);
  // };

  // toggleUserMenu = () => {
  //   const { showUserMenu } = this.state;
  //   this.setState({ showUserMenu: !showUserMenu });
  // };
  logout = e => {
    e.preventDefault();
    const { logout } = this.props;
    logout();
  };

  render() {
    const { username, isAuth } = this.state;
    return (
      <header
        className='Header fluid'
        style={{ display: 'flex', flexDirection: 'column', alignContent: 'start' }}
      >
        <div className='container'>
          <a className='logo'>
            <img src={welcome} />
          </a>
        </div>
        <div className='header-nav'>
          <nav
            style={{ display: 'flex', flexDirection: 'row', height: '100%', marginLeft: '80px' }}
          >
            <Link to='/'>
              <Button>Home</Button>
            </Link>
            <Button>Pricing</Button>
            <Button>Contact</Button>
            <Button style={{ marginLeft: '600px', float: 'right', backgroundColor: 'transparent' }}>
              {(isAuth && (
                <Link
                  className='logout'
                  to='/'
                  style={{ color: 'rgba(255,255,255,.5)' }}
                  onClick={this.logout}
                >
                  Logout
                </Link>
              )) || (
                <Link className='right-btn' style={{ color: 'rgba(255,255,255,.5)' }} to={'/login'}>
                  Login
                </Link>
              )}
            </Button>
          </nav>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({
  user: {
    isAuth,
    profile: { username, firstName, lastName, role },
  },
}) => ({
  isAuth,
  username,
  firstName,
  lastName,
  role,
});

export default connect(mapStateToProps, { logout })(Header);
