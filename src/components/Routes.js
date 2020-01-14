import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SocialMediaAuth from './SocialMediaAuth';
import Home from './Home';
import Signup from './Signup';
import AdminProfile from './AdminProfile/AdminProfile';
import Login from './Login';
import SelectProfile from './PostAd/SelectProfile';
import AboutYou from './PostAd/AboutYou';

const Routes = () => (
  <Switch>
    <Route exact path="/" component ={Home} />
    <Route exact path="/auth" component ={ SocialMediaAuth } />
    <Route exact path="/signup" component ={Signup } />
    <Route exact path="/login" component ={Login} />
    <Route exact path="/profile" component ={AdminProfile} />
    <Route exact path="/builder/selectProfile" component ={SelectProfile} />
    <Route exact path="/builder/about" component ={AboutYou} />
  </Switch>
);


export default Routes;
