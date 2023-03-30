import MasterLayout from './MasterLayout';
import i18n from '@core/utils/i18n';
import Home from 'pages/Home';
import Contact from 'pages/Contact';

const masterLayoutRoutings = [
  {
    element: <MasterLayout />,
    path: '/',
    children: [
      {
        path: '/trang-chu',
        element: <Home />,
        title: i18n.t('page.myTaskTitle'),
        loginRequired: false,
        permissions: [],
      },
      {
        path: '/lien-he',
        element: <Contact />,
        title: i18n.t('page.myTaskTitle'),
        loginRequired: false,
        permissions: [],
      },
    ],
  },
];

export default masterLayoutRoutings;
