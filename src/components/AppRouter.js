import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';


import App from '../App';


const AppRouter = () =>
{
	const location = window.location.host.includes('github.io');
	
	return (
		<>
			{
				location ? (
					<HashRouter>
						<App />
					</HashRouter>
				) : (
					<BrowserRouter>
						<App />
					</BrowserRouter>
				)
			}
		</>
	)
}

export default AppRouter;