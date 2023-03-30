// import { SwalAlert } from '@core/components/SwalAlert';
import { useEffect, useRef } from 'react';

export const useDetectBackButton = (handler) => {
  const eventListenerRef = useRef(null);

  useEffect(() => {
    eventListenerRef.current = async () => {

      // const dialogConfirm = await SwalAlert.fire({
      //   text: handler?.(event),
      //   showCancelButton: true,
      // });

      // if (!dialogConfirm.isConfirmed) {
      //   window.history.pushState(null, null, window.location.pathname);
      // }
      window.history.pushState(null, null, window.location.pathname);

    };
  }, [handler]);

  useEffect(() => {
    const eventListener = (event) => eventListenerRef.current(event);
    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener('popstate', eventListener);
    return () => {
      window.removeEventListener('popstate', eventListener);
    };
  }, []);
};

