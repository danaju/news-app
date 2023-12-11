import { Outlet } from "react-router-dom"
import Header from "./Header"
import Container from "@mui/material/Container"
import CssBaseline from "@mui/material/CssBaseline"

function AppLayout() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container disableGutters={false} sx={{ overflow: "hidden", mt: "5rem" }}>
        <Outlet />
      </Container>
    </>
  )
}

export default AppLayout
