import SettingsProvider from '@core/contexts/SettingsProvider';
import SnackbarProvider from '@core/contexts/SnackbarProvider';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Loading from '@core/components/loading/LoadingScreen';
import AppRoutes from './AppRoutes';
import AuthProvider from '@core/contexts/AuthProvider';
import SplashScreen from '@core/components/SplashScreen';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import {AppointmentContextProvider} from "./context/AppointmentContext";


// if (import.meta.env.NODE_ENV === 'production') {
//   Sentry.init({
//     dsn: import.meta.env.VITE_SENTRY_DSN,
//     integrations: [new BrowserTracing()],
//     // Set tracesSampleRate to 1.0 to capture 100%
//     // of transactions for performance monitoring.
//     // We recommend adjusting this value in production
//     tracesSampleRate: 1.0,
//   });
// }


function App() {

  return (
    <>
      <BrowserRouter>
        <React.Suspense fallback={<SplashScreen />}>
          <AuthProvider>
            <AppointmentContextProvider>
              <Sentry.ErrorBoundary>
                <SettingsProvider>
                  <SnackbarProvider>
                    <Loading />
                      <AppRoutes />
                  </SnackbarProvider>
                </SettingsProvider>
              </Sentry.ErrorBoundary>
            </AppointmentContextProvider>
          </AuthProvider>
        </React.Suspense>
      </BrowserRouter>
    </>
  );
}
export default App;
