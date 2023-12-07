import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { useAppDispatch } from "../hooks"
import { logout } from "../features/user/userSlice"
import { useNavigate } from "react-router-dom"

function Header() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  
  function handleLogOut() {
    dispatch(logout())
    navigate("/login", { replace: true })
  }

  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit" onClick={handleLogOut}>
            Log out
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
