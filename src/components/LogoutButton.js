import React from "react";

import { useAuth0 } from "@auth0/auth0-react";


const LogoutButton = () =>
{
  const { logoutWithRedirect } = useAuth0();

  return (
    <button onClick={() => logoutWithRedirect()}>
      Log Out
    </button>
  );
};

export default LogoutButton;