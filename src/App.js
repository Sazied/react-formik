import logo from './logo.svg';
import './App.css';


import React, { Fragment, useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
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
    if(user?.email === 'sazied@polyunity.com') setIsDemo(true)
  }
  
  
  useEffect(() =>{
    isAuth();
  })
  
  
  return (
    <Fragment>
      <Router>
        <div className="App">
          <Switch>
            <Route
              exact
              path='/new-form'
              render={() => 
                // isDemo ? (
                  <FormikContainer />
                  // ) : (
                  //   <Redirect to='/' />
                  //   )
                  }
            />
            <Route
              exact
              path='/old-form'
              render={() => 
                // isDemo ? (
                  <YoutubeForm />
                // ) : (
                //   <Redirect to='/' />
                //   )
                }
            />
            <Route 
              path='/'
              render={() => <Profile />}
            />
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}


export default App;