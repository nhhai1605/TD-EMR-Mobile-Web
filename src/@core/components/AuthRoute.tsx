import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@core/contexts/AuthProvider';
export const AuthRoute = () => {
  const { auth, initialized } = useAuth();
  const [pending, setPending] = useState(true);

  useEffect(() => {
    auth && setPending(false);
  }, [initialized]);
  console.log('login done');

  if (pending) return null; // waiting for auth context initialized

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  console.log('login done');
  return auth ? <Outlet /> : <Navigate to='/login' />;
};
