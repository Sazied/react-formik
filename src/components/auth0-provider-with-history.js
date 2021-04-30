import React from 'react';
import { useHistory } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';


const Auth0ProviderWithHistory = ({ children }) =>
{
	const history = useHistory();
	
	const onRedirectCallback = (appState) =>
	{
		if(appState) console.log(appState);
		
		history.push(appState?.returnTo || window.location.pathname);
	};
	
	
	return(
		<Auth0Provider
			domain="dev-vaa1s4lm.us.auth0.com"
			clientId="QBB6awxGUWtHx8a5YZsAJd8AXwS7y0GM"
			redirectUri={`${window.location.origin}/react-formik`}
			onRedirectCallback={onRedirectCallback}
		>
			{children}
		</Auth0Provider>
	)
}


export default Auth0ProviderWithHistory;