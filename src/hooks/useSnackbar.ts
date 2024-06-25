import { useContext } from "react";
import { SnackbarContext } from "~/Components/Context/SnackbarContext";

export default function useSnackbar() {
  // const { snack, handleClose } = useContext(SnackbarContext);
  return { snack: () => ({}), handleClose: () => ({}) };
}
