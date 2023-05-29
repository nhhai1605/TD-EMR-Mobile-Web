import React from 'react';

import AuthLayout from './AuthLayout';
import { lazyMinLoadTime } from '@core/components/LazyLoaderDelay';
import i18n from '@core/utils/i18n';
import { ROUTE_PATHS } from '@core/constants/routeConfig';
const Login = lazyMinLoadTime(() => import('pages/Login').then(({ Login }) => ({ default: Login })));
const ForgotPassword = lazyMinLoadTime(() => import('pages/ForgotPassword').then(({ ForgotPassword }) => ({ default: ForgotPassword })));
const Register = lazyMinLoadTime(() => import('pages/Register').then(({ Register }) => ({ default: Register })));

const authLayoutRoutings = [
  {
    element: <AuthLayout />,
    path: '/',
    children: [
      {
        path: ROUTE_PATHS.Login,
        title: i18n.t('login'),
        element: <Login />,
        loginRequired: false,
        permissions: [],
      },
      {
        path: ROUTE_PATHS.Register,
        title: "Đăng Kí",
        element: <Register />,
        loginRequired: false,
        permissions: [],
      },
      {
        path: ROUTE_PATHS.ForgotPassword,
        title: "Quên Mật Khẩu",
        element: <ForgotPassword />,
        loginRequired: false,
        permissions: [],
      },
    ],
  },
];

export default authLayoutRoutings;
