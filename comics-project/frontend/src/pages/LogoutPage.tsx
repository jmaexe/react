import React from 'react';
import { useUserContext } from '../hooks/useUserContext';

const LogoutPage = () => {
  const { setUser } = useUserContext();
  setUser(undefined);
  return <div>LogoutPage</div>;
};

export default LogoutPage;
