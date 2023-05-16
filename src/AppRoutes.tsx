import React, {lazy, useEffect} from 'react';
import {Navigate, Route, Routes, useLocation} from 'react-router-dom';
import { AuthRoute } from '@core/components/AuthRoute';
import masterLayoutRoutings from 'layout/main/MasterLayoutRoutings';
import authLayoutRoutings from 'layout/auth/AuthLayoutRoutings';
import { LocalStorageHelper } from '@core/utils/localStorageHelper';
import { ROUTE_PATHS } from '@core/constants/routeConfig';

export interface LayoutProps {
  pageTitle: React.ReactNode;
  setPageTitle: (node: React.ReactNode) => void;
  avatar: string;
  setAvatar: (value: string) => void;
}
const NotFound = lazy(() => import('pages/NotFound').then(({ NotFound }) => ({ default: NotFound })));

function AppRoutes() {
  const location = useLocation();
  useEffect(() => {
    console.log('%c ⛔ KHÔNG PHẬN SỰ MIỄN VÀO!!', 'font-weight: bold; font-size: 30px;color: red; ');
  }, []);


  useEffect(() => {
    detectVersionAndForceReload();
  }, [location.key]);

  const detectVersionAndForceReload = () => {
    try {
      const currentVersion = LocalStorageHelper.getItem('Version');
      const versionBuild = import.meta.env.VITE_VERSION;
      if (!currentVersion || (currentVersion && currentVersion != versionBuild)) {
        LocalStorageHelper.setItem('Version', versionBuild);
        window.location.reload();
        return;
      }
    } catch {}
  };

   const routes = [...authLayoutRoutings, ...masterLayoutRoutings];
   // console.log('routes', routes)
  return (
    <Routes>
      <Route index element={<Navigate to={'trang-chu'} />} />
      <Route path='*' element={<Navigate to={ROUTE_PATHS.NotFound} />} />
      <Route path={ROUTE_PATHS.NotFound} element={<NotFound />} />

      {routes.map(({ element: Element, children, path }, index) => {
        if (children && children?.length > 0) {
          return (
            <Route path={path} key={`route_${index}`} element={Element}>
              {children.map(({ path, element: ChildElement, loginRequired }, childIndex: number) => {
                //TODO: missing check permission
                if (loginRequired) {
                  return (
                    <Route key={`childRoutePrivate_${childIndex}`} path='/' element={<AuthRoute />}>
                      <Route path={path} element={ChildElement} />
                    </Route>
                  );
                }
                return <Route key={`childRoutePublic_${childIndex}`} path={path} element={ChildElement} />;
              })}
            </Route>
          );
        }
        return <></>;
      })}
    </Routes>
  );
}
export default AppRoutes;
