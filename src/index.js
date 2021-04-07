import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import AppRouter from './components/AppRouter';

ReactDOM.render(
  <React.StrictMode>
    {/* <Auth0Provider
      domain="dev-vaa1s4lm.us.auth0.com"
      clientId="QBB6awxGUWtHx8a5YZsAJd8AXwS7y0GM"
      redirectUri={`${window.location.origin}/react-formik`}
    > */}
      <App />
    {/* </Auth0Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();