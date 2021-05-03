import logo from './logo.svg';
import './App.css';


import React, { Fragment, useState, useEffect, Component} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useLocation
} from 'react-router-dom';

import { useAuth0 } from "@auth0/auth0-react";



import FormikContainer from './components/FormikContainer';
import YoutubeForm from './components/YoutubeForm';
import Profile from './components/Profile';
import LogoutButton from './components/LogoutButton';
import LoginButton from './components/LoginButton';


function App()
{
  const [ isDemo, setIsDemo ] = useState(false);
  
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  
  const location = window.location.host.includes('github.io');
  
  function isAuth()
  {
    if((user?.email === 'sazied@polyunity.com' || user?.email === 'marc-andre@polyunity.com') && isAuthenticated) setIsDemo(true)
  }
  
  
  useEffect(() =>{
    isAuth();
  })
  
  
  return (
    <Fragment>
        <div className="App">
          <img 
            src={`${process.env.PUBLIC_URL}/logo192.png`}
            alt='react-logo'
          />
          <Switch>
            <Route
              exact
              path='/'
              render={() => <Profile />}
            />
            <Route
              path='/newform'
              render={() =>
                location ? (
                isDemo ? (
                  <FormikContainer />
                  ) : (
                    <Redirect to='/' />
                  )
                ) : (
                  <FormikContainer />
                )
              }
            />
            <Route
              path='/oldform'
              render={() =>
                location ? (
                  isDemo ? (
                    <YoutubeForm />
                  ) : (
                    <Redirect to='/' />
                    )
                  ) : (
                  <YoutubeForm />
                )
              }
            />
            <Route 
              component={() => (<h1>404 NOT FOUND</h1>)}
            />
          </Switch>
        </div>
    </Fragment>
  );
}


export default App;