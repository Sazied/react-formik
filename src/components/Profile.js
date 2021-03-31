import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";



const Profile = () =>
{
  // const [ isDemo, setIsDemo ] = useState(false);
  
  // const { user, isAuthenticated, isLoading } = useAuth0();
  
  // function isAuth()
  // {
  //   if(user?.email === 'sazied@polyunity.com') setIsDemo(true)
  // }
  
  
  // useEffect(() =>{
  //   isAuth();
  // })

  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }

  return (
    // isAuthenticated ? (
    //   <div>
		// 		<LogoutButton />
		// 		{
		// 			isDemo ? (
		// 				<div>
		// 					<Link to='new-form'>New From</Link>
		// 					<Link to='old-form'>Old From</Link>
		// 				</div>
		// 			) : (
		// 				<h1>Please request Demo</h1>
		// 			)
		// 		}
    //     <img src={user.picture} alt={user.name} />
    //     <h2>{user.name}</h2>
    //     <p>{user.email}</p>
    //   </div>
    // ) : (<LoginButton />)
				<div>
					<Link to='/newform'>New From</Link>
					<Link to='/oldform'>Old From</Link>
				</div>
  );
};

export default Profile;