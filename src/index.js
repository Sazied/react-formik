import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory, BrowserRouter as Router } from 'react-router-dom';


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import AppRouter from './components/AppRouter';
import Auth0ProviderWithHistory from './components/auth0-provider-with-history';


const location = window.location.host.includes('github.io');

ReactDOM.render(
  <React.StrictMode>
    {
      location ? (
        <Router>
          <Auth0ProviderWithHistory>
            <App />
          </Auth0ProviderWithHistory>
        </Router>
      ) : (
        <Router>
          <App />
        </Router>
      )
    }
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();