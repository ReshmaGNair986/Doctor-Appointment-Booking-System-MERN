import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('adminLoggedIn');
  return isLoggedIn ? children : <Navigate to="/admin/login" />;
};

export default AdminRoute;
