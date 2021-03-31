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
    if(user?.email === 'sazied@polyunity.com') setIsDemo(true)
  }
  
  
  useEffect(() =>{
    isAuth();
  })

  return (
    <Fragment>
      <HashRouter basename='/'>
        <div className="App">
          {/* <Switch> */}
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/newform'>New From</Link></li>
              <li><Link to='/oldform'>Old From</Link></li>
            </ul>
            
            <hr />
            
            <Route
              exact
              path='/'
              // render={() => <Profile />}
              component={Profile}
            />
            <Route
              path='/newform'
              // render={() => 
              //   // isDemo ? (
              //     <FormikContainer />
              //     // ) : (
              //     //   <Redirect to='/' />
              //     //   )
              //     }
              component={FormikContainer}
            />
            <Route
              path='/oldform'
              // render={() => 
              //   // isDemo ? (
              //     <YoutubeForm />
              //   // ) : (
              //   //   <Redirect to='/' />
              //   //   )
              //   }
              component={YoutubeForm}
            />
          {/* </Switch> */}
        </div>
      </HashRouter>
    </Fragment>
  );
}


export default App;