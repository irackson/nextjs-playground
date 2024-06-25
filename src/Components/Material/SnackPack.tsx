"use client";

import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import MuiAlert, { type AlertProps } from "@mui/material/Alert";
import { truncateString } from "lib/utils";

interface AlertWithChildrenProps extends AlertProps {
  children?: React.ReactNode;
}

const Alert = React.forwardRef<HTMLDivElement, AlertWithChildrenProps>(
  function Alert(props, ref) {
    const { children, ...otherProps } = props;

    return (
      <MuiAlert elevation={6} ref={ref} variant="filled" {...otherProps}>
        {children}
      </MuiAlert>
    );
  },
);

export interface SnackbarMessage {
  message: string | React.ReactNode;
  key: string | number;
  severity?: "success" | "error" | "warning" | "info";
  duration?: number | null;
  secondaryAction?: React.ReactNode;
  maxMessageLength?: number;
}

export interface State {
  open: boolean;
  snackPack: readonly SnackbarMessage[];
  messageInfo?: SnackbarMessage;
}

export default function ConsecutiveSnackbars({
  snackbar,
  setSnackbar,
  open,
  setOpen,
  handleClose,
}: {
  snackbar: readonly SnackbarMessage[];
  setSnackbar: React.Dispatch<React.SetStateAction<SnackbarMessage[]>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose: (event: React.SyntheticEvent | Event, reason?: string) => void;
}) {
  const [messageInfo, setMessageInfo] = React.useState<
    SnackbarMessage | undefined
  >(undefined);

  React.useEffect(() => {
    if (snackbar.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      snackbar[0] && setMessageInfo({ ...snackbar[0] });
      setSnackbar((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackbar.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
    }
  }, [snackbar, messageInfo, open, setSnackbar, setOpen]);

  const handleExited = () => {
    setMessageInfo(undefined);
  };

  const action = (
    <React.Fragment>
      {messageInfo?.secondaryAction}
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        key={
          messageInfo && "key" in messageInfo
            ? String(messageInfo.key)
            : messageInfo &&
                typeof messageInfo === "object" &&
                "message" in messageInfo &&
                // eslint-disable-next-line @typescript-eslint/dot-notation
                typeof messageInfo["message"] === "string"
              ? // eslint-disable-next-line @typescript-eslint/dot-notation
                messageInfo["message"]
              : Date.now()
        }
        open={open}
        autoHideDuration={messageInfo?.duration || 6000}
        onClose={handleClose}
        TransitionProps={{ onExited: handleExited }}
        // message={messageInfo ? messageInfo.message : undefined}
        action={action}
        sx={{ maxWidth: "100%" }}
      >
        <Alert
          onClose={handleClose}
          severity={messageInfo?.severity || "success"}
          // sx={{ width: "98%" }}
        >
          {typeof messageInfo?.message === "string"
            ? truncateString(
                messageInfo?.message,
                messageInfo?.maxMessageLength || 200,
              )
            : messageInfo?.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
