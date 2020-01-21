import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SocialMediaAuth from './SocialMediaAuth';
import Home from './Home';
import Signup from './Signup';
import AdminProfile from './AdminProfile/AdminProfile';
import Login from './Login';
import SelectProfile from './PostAd/SelectProfile';
import AboutYou from './PostAd/AboutYou';
import ForgotPassword from './ResetPassword/ForgotPassword';
import ResetPassword from './ResetPassword/ResetPassword'
import Details from './PostAd/Details';
import Enhance from './PostAd/Enhance';

const Routes = () => (
  <Switch>
    <Route exact path="/" component ={Home} />
    <Route exact path="/auth" component ={ SocialMediaAuth } />
    <Route exact path="/signup" component ={Signup } />
    <Route exact path="/login" component ={Login} />
    <Route exact path="/profile" component ={AdminProfile} />
    <Route exact path="/builder/selectProfile" component ={SelectProfile} />
    <Route exact path="/builder/about" component ={AboutYou} />
    <Route exact path="/builder/details" component ={Details} />
    <Route exact path="/builder/enhance" component ={Enhance} />
    <Route exact path="/forgot-password" component= {ForgotPassword} />} />
    <Route exact path="/reset-password/:token" component = {ResetPassword} />} />
  </Switch>
);


export default Routes;
