import React from 'react'
import { Route, Navigate } from 'react-router-dom';

const ProtectedRouteUsers = ({ element, userType }) => {
  // Add logic to check the user type and decide whether to render the route
  if (userType === 'admin') {
    return <Route element={element} />;
  } else if (userType === 'mentor') {
    return <Navigate to="/mentor-home" />;
  } else if (userType === 'user') {
    return <Navigate to="/user-home" />;
  } else {
    // Handle other cases, such as redirecting to a login page
    return <Navigate to="/login" />;
  }
};

export default ProtectedRouteUsers




