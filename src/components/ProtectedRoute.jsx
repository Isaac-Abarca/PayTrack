/* eslint-disable react/prop-types */


import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ element }) => {
  const { currentUser } = useAuth();

  return currentUser ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
