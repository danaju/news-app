import Header from "./Header"
import { Outlet } from "react-router-dom"
import Container from "@mui/material/Container"
import CssBaseline from "@mui/material/CssBaseline"

function AppLayout() {
  return (
    <>
      <CssBaseline />
      <Container disableGutters={true}>
        <Header />
          <Outlet />
      </Container>
    </>
  )
}

export default AppLayout
