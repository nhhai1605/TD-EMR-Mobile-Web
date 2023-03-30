import { IMessage } from "@core/models/common/responseMessage";
import Alert, { AlertColor } from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Snackbar from "@mui/material/Snackbar";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BehaviorSubject } from "rxjs";

interface SnackbarContextInterface {
  error: (newMessage: string) => void;
  success: (newMessage: string) => void;
}

const toggleMessage$ = new BehaviorSubject<IMessage>(null);

export const toggleMessage = (value: IMessage) => {
  toggleMessage$.next(value);
};

export const SnackbarContext = createContext({} as SnackbarContextInterface);

type SnackbarProviderProps = {
  children: React.ReactNode;
};

const SnackbarProvider = ({ children }: SnackbarProviderProps) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [severity, setSeverity] = useState<AlertColor | undefined>(undefined);

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  useEffect(() => {
    const subscribe = toggleMessage$.subscribe((value) => {
      if(!value) {
        return;
      }
      if (value.type == "error") {
        error(value.message)
      }
      else if (value.type == "success") {
        error(value.message)
      }
    });
    return () => {
      subscribe.unsubscribe();
    };
  }, []);

  const error = (newMessage: string) => {
    setTitle(t("common.snackbar.error"));
    setMessage(newMessage);
    setSeverity("error");
    setOpen(true);
  };

  const success = (newMessage: string) => {
    setTitle(t("common.snackbar.success"));
    setMessage(newMessage);
    setSeverity("success");
    setOpen(true);
  };
  return (
    <SnackbarContext.Provider value={{ error, success }}>
      {children}
      <Snackbar
        key={message}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert variant="filled" onClose={handleClose} severity={severity}>
          <AlertTitle>{title}</AlertTitle>
          <b>{message}</b>
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

export function useSnackbar() {
  return useContext(SnackbarContext);
}

export default SnackbarProvider;
