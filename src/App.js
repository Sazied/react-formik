import logo from './logo.svg';
import './App.css';


import React, { Fragment, useState, useEffect, Component} from 'react';

import {
  HashRouter,
  Switch,
  Route,
  Redirect,
  Link,
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
    if(user?.email === 'sazied@polyunity.com' || user?.email === 'marc-andre@polyunity.com') setIsDemo(true)
  }
  
  
  useEffect(() =>{
    isAuth();
  })
  
  console.log(window.location)
  console.log(window.location.origin)

  return (
    <Fragment>
      <HashRouter basename='/'>
        <div className="App">
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
          {/* </Switch> */}
        </div>
      </HashRouter>
    </Fragment>
  );
}


export default App;