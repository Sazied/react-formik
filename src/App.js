import logo from './logo.svg';
import './App.css';


import React, { Fragment, useState, useEffect, Component} from 'react';

import {
  HashRouter as Router,
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
  
  function isAuth()
  {
    if((user?.email === 'sazied@polyunity.com' || user?.email === 'marc-andre@polyunity.com') && isAuthenticated) setIsDemo(true)
  }
  
  
  useEffect(() =>{
    isAuth();
  })
  
  console.log(window.location)
  console.log(window.location.origin)

  return (
    <Fragment>
      <Router>
        <div className="App">
          <img 
            src={`${process.env.PUBLIC_URL}/logo192.png`}
            alt='react-logo'
          />
          {/* <Switch> */}
            <Route
              exact
              path='/'
              render={() => <Profile />}
            />
            <Route
              path='/newform'
              render={() => 
                isDemo ? (
                  <FormikContainer />
                  ) : (
                    <Redirect to='/' />
                    )
                  }
            />
            <Route
              path='/oldform'
              render={() => 
                isDemo ? (
                  <YoutubeForm />
                ) : (
                  <Redirect to='/' />
                  )
                }
            />
            <Route 
              component={() => (<h1>404 NOT FOUND</h1>)}
            />
          {/* </Switch> */}
        </div>
      </Router>
    </Fragment>
  );
}


export default App;