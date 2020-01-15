import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';
import siteLogo from '../../assets/images/logo_ah_secondo.png';
import siteLogoSmall from '../../assets/images/logo_ah_small.png';
import { Img, Button } from '../common';
import HeaderUserMenu from './HeaderUserMenu/HeaderUserMenu';
import HeaderUserImage from './HeaderUserImage/HeaderUserImage';
import header from '../../assets/images/header-image.png';

class Header extends Component {
  state = { showUserMenu: false };

  componentDidMount = () => {
    window.document.addEventListener('click', (e) => {
      const { parentNode, classList } = e.srcElement;
      return (
        (classList || (parentNode && parentNode.classList))
        && !classList.contains('header-user-button')
        && (parentNode && parentNode.classList && !parentNode.classList.contains('HeaderUserImage'))
        && this.setState({ showUserMenu: false })
      );
    });
  };

  componentWillUnmount = () => {
    window.scrollTo(0, 0);
  };

  toggleUserMenu = () => {
    const { showUserMenu } = this.state;
    this.setState({ showUserMenu: !showUserMenu });
  };

  render() {
    const { showUserMenu } = this.state;
    return (
      <header className="Header" style={{ display: 'flex', flexDirection: 'column', alignContent: 'start' }}>
        <div className="container">
        </div>
        <div className='header-nav' style={{ display: 'flex', backgroundColor: '#666', fontSize: '2px' }} >
            <nav style={{ display: 'flex', flexDirection: 'row', height: '100%', marginLeft: '80px', }}>
                <Button style={{ color: 'white', backgroundColor: 'transparent', color: 'rgba(255,255,255,.5)' }}>Home</Button>
                <Button style={{ color: 'white', backgroundColor: 'transparent', color: 'rgba(255,255,255,.5)' }}>Pricing</Button>
                <Button style={{ color: 'white', backgroundColor: 'transparent', color: 'rgba(255,255,255,.5)' }} >Contact</Button>
                <Button style={{ marginLeft: '600px', color: 'white', float: 'right', backgroundColor: 'transparent', color: 'rgba(255,255,255,.5)' }}><Link to={'/login'}>Login</Link></Button></nav></div>
      </header>
    );
  }
}

export default Header;
