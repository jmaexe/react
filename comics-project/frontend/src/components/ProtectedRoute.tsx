import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';
import { useUserContext } from '../hooks/useUserContext';
type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useUserContext();
  const isAuthenticated = user !== undefined;
  return isAuthenticated ? children : <Navigate to="/login" replace={true} />;
};

export default ProtectedRoute;
