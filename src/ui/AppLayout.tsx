import { Outlet } from "react-router-dom"
import Header from "./Header"
import CssBaseline from "@mui/material/CssBaseline"

function AppLayout() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Outlet />
    </>
  )
}

export default AppLayout
