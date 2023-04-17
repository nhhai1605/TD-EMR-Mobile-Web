import React from 'react';

import AuthLayout from './AuthLayout';
import { lazyMinLoadTime } from '@core/components/LazyLoaderDelay';
import i18n from '@core/utils/i18n';
import { ROUTE_PATHS } from '@core/constants/routeConfig';
import Register from 'pages/Register';
const Login = lazyMinLoadTime(() => import('pages/Login').then(({ Login }) => ({ default: Login })));

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
    ],
  },
];

export default authLayoutRoutings;
