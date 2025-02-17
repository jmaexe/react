import React, { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
export const useGoogle = () => {
  const [googleData, setGoogleData] = useState();

  const loginWithGoogle = (credentialResponse) => {
    console.log(credentialResponse);
    const decoded = jwtDecode(credentialResponse.credential);
    console.log(decoded);
    setGoogleData(decoded);
  };

  const logoutFromGoogle = () => {
    setGoogleData();
  };
  return { loginWithGoogle, logoutFromGoogle, googleData, setGoogleData };


}