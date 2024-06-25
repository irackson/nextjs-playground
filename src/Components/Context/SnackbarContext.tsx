"use client";

import * as React from "react";
import ConsecutiveSnackbars, {
  type SnackbarMessage,
} from "../Material/SnackPack";
import { type OmitStrict } from "lib/type-helpers";

export type SnackFunction = (
  message: OmitStrict<SnackbarMessage, "key"> & { key?: string | number },
) => void;

export type CloseSnackbar = (
  event?: React.SyntheticEvent | Event,
  reason?: string,
) => void;

export const SnackbarContext = React.createContext<{
  snack: SnackFunction;
  handleClose: CloseSnackbar;
}>({
  snack: (
    message: OmitStrict<SnackbarMessage, "key"> & { key?: string | number },
  ) => {
    return;
  },
  handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => {
    return;
  },
});

export const SnackbarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [snackbar, setSnackbar] = React.useState<SnackbarMessage[]>([]);

  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const handleClose = React.useCallback(
    (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === "clickaway") {
        return;
      }
      setSnackbarOpen(false);
    },
    [setSnackbarOpen],
  );

  const snack = React.useCallback(
    (
      message: OmitStrict<SnackbarMessage, "key"> & { key?: string | number },
    ) => {
      setSnackbar((prev) => [
        ...prev,
        {
          key: Date.now(),
          ...message,
        } satisfies SnackbarMessage,
      ]);
    },
    [setSnackbar],
  );

  return (
    <SnackbarContext.Provider value={{ snack, handleClose }}>
      {children}
      <ConsecutiveSnackbars
        snackbar={snackbar}
        setSnackbar={setSnackbar}
        open={snackbarOpen}
        setOpen={setSnackbarOpen}
        handleClose={handleClose}
      />
    </SnackbarContext.Provider>
  );
};
