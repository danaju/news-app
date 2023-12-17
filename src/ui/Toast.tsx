import MuiAlert, { AlertProps } from "@mui/material/Alert"
import React from "react"
import Stack from "@mui/material/Stack"
import Snackbar from "@mui/material/Snackbar"

interface CustomSnackbarProps {
  type: "success" | "error" | "warning" | "info"
  message: string
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export default function Toast({ type, message }: CustomSnackbarProps) {
  const [open, setOpen] = React.useState(true)

  function handleClose(_event?: React.SyntheticEvent | Event, reason?: string) {
    if (reason === "clickaway") {
      return
    }
    setOpen(false)
  }

  return (
    <Stack>
      <Snackbar
        open={open}
        autoHideDuration={3500}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity={type} sx={{ width: "30rem" }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  )
}
