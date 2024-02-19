import React from 'react'
import { Route, Navigate } from 'react-router-dom';

const ProtectedRouteUsers = ({ element, userType }) => {
 
  if (userType === 'admin') {
    return <Route element={element} />;
  } else if (userType === 'mentor') {
    return <Navigate to="/mentor-home" />;
  } else if (userType === 'user') {
    return <Navigate to="/user-home" />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRouteUsers




