import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const PrivateRoute = () => {
  const { isAuthenticated } = useContext(AuthContext);


  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Nếu đã đăng nhập, render các component con (children) hoặc <Outlet /> nếu sử dụng React Router v6
  return <Outlet />;
};

export default PrivateRoute;