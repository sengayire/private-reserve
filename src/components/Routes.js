import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SocialMediaAuth from './SocialMediaAuth';
import Home from './Home';
import Signup from './Signup';
import AdminProfile from './AdminProfile/AdminProfile';
import Login from './Login';


const Routes = () => (
  <Switch>
    <Route exact path="/" component ={Home} />
    <Route exact path="/auth" component ={ SocialMediaAuth } />
    <Route exact path="/signup" component ={Signup } />
    <Route exact path="/login" component ={Login} />
    <Route exact path="/profile" component ={AdminProfile} />
  </Switch>
);


export default Routes;
