import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

 * @returns {JSX.Element} - Returns the protected route or redirects to login.
 */
const PrivateRoute = () => {
  // Sử dụng AuthContext để kiểm tra trạng thái đăng nhập
  const { isAuthenticated } = useContext(AuthContext);

  // Nếu chưa đăng nhập, chuyển hướng đến trang đăng nhập
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Nếu đã đăng nhập, render các component con (children) hoặc <Outlet /> nếu sử dụng React Router v6
  return <Outlet />;
};

export default PrivateRoute;