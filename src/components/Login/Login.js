import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { login } from '../../actions/user'
import './Login.scss';
import { Input, Button, Form, SocialMediaButton, Alert, Img } from '../common';

export class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
    message: '',
    redirect: ''
  };

  componentDidMount() {
    const { location } = this.props;
    const { redirect } = queryString.parse(location.search);
    return this.setState({ redirect: redirect && `/${redirect}` });
  }

  componentWillReceiveProps(nextProps) {
    const { errors } = this.state;
    this.setState({ errors: { ...errors, ...nextProps.errors } });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, errors: {} });
  };

  handleSubmit = (e) => { e.preventDefault();

    const { email, password } = this.state;
    const { login } = this.props;
    login({ email, password });
  };

  render() {
    const { profile, loading } = this.props;
    const { email, password, errors, redirect } = this.state;
    return (
      <div className="loginForm">
        {Object.keys(errors).length ? (
          <Alert
            alertType="danger"
            message={
              errors.credentials
              || errors.account
              || errors.password
              || errors.email
              || errors.message
            }
          />
        ) : (
          ''
        )}
        {!loading && Object.keys(profile).length ? <Redirect to={redirect || '/profile'} /> : ''}
        <Link to="/">
         <h1 style={{ color: 'white', width: '100%', textAlign: 'center' }}>Private reserve</h1>
        </Link>
        <div id="Login">
          <div className="LoginForm large-screen-3 medium-screen-4 small-screen-4">
            <Form formTitle="LOGIN" className="login" onSubmit={this.handleSubmit}>
              <div className="large-screen-4 medium-screen-4 small-screen-4">
                <Input
                  name="email"
                  type="text"
                  className="email"
                  inputClass="radius-1 medium-text"
                  placeholder="Email"
                  onChange={this.handleChange}
                  value={email}
                  isRequired={true}
                />
              </div>

              <div className="large-screen-4 medium-screen-4 small-screen-4">
                <Input
                  name="password"
                  type="password"
                  className="password"
                  inputClass="radius-1 medium-text"
                  placeholder="Password"
                  onChange={this.handleChange}
                  value={password}
                  isRequired={true}
                />
              </div>
              <Link
                to="/forgot-password"
                className="active small-text xlarge-h-padding forgot-Password"
                style={{ color: '#fed100' }}
              >
                Forgot Password?
              </Link>
              <br />
              <div className="large-screen-4">
                <div className="">
                  <Button type="submit" text="Login" padding="small" size={20} loading={loading}>
                    Login
                  </Button>{' '}
                    <Link to="/signup" className="active" style={{ color: 'white' }}>
                      {' '}
                      Register Now
                    </Link>
                  <div className="center-align xlarge-v-padding">
                    <p className="text-grey">Login with your social account</p>
                    <SocialMediaButton name="google" size={38} />
                    <SocialMediaButton name="twitter" size={40} />
                    <SocialMediaButton name="facebook" size={40} />
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>

      </div>
    );
  }
}

Login.defaultProps = { location: { search: '' }, profile: {} };

Login.propTypes = {
  loading: PropTypes.bool,
  profile: PropTypes.object,
  login: PropTypes.func,
  user: PropTypes.object,
  location: PropTypes.object,
  errors: PropTypes.object
};

const mapStateToProps = ({
  user: {
    login: { errors, message, loading },
    profile
  }
}) => ({
  errors,
  message,
  loading,
  profile
});

export default connect(
  mapStateToProps,
  { login }
)(Login);