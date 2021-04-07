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
  //   if(user?.email === 'sazied@polyunity.com' || user?.email === 'marc-andre@polyunity.com') setIsDemo(true)
  // }
  
  
  // useEffect(() =>{
  //   isAuth();
  // })

  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }

  return (
  //   isAuthenticated ? (
  //     <div>
  //       {
  //         isDemo ? (
  //           <>
  //             <img
  //               src="img/sazied.jpg"
  //               alt="profile_image"
  //             />
  //             <ul>
  //               <li><Link to='/'>Home</Link></li>
  //               <li><Link to='/newform'>New From</Link></li>
  //               <li><Link to='/oldform'>Old From</Link></li>
  //             </ul>
  //           </>
  //         ) : (
  //           <h1>Please request Demo</h1>
  //         )
  //       }
	// 			<LogoutButton />
  //       <img src={user.picture} alt={user.name} />
  //       <h2>{user.name}</h2>
  //       <p>{user.email}</p>
  //     </div>
  //   ) : (<LoginButton />)
  // );
  <>
    <img
      src="img/sazied.jpg"
      alt="profile_image"
    />
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/newform'>New From</Link></li>
      <li><Link to='/oldform'>Old From</Link></li>
    </ul>
    </>)
};

export default Profile;