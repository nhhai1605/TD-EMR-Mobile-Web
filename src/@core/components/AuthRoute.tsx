import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@core/contexts/AuthProvider';
import  cookie from 'react-cookies';

export const AuthRoute = () => {
  const isAuthenticated = cookie.load('AUTH_DATA');
  return isAuthenticated ? <Outlet/> : <Navigate to="/login" />;
};
