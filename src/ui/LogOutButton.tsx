import { Box, Button, IconButton } from "@mui/material"
import { useAppDispatch } from "../hooks"
import { logout } from "../features/user/userSlice"
import ExitToAppIcon from "@mui/icons-material/ExitToApp"

export default function LogOutButton() {
  const dispatch = useAppDispatch()

  function handleLogout() {
    dispatch(logout())
  }

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <Button onClick={handleLogout} sx={{ color: "white" }}>
          Log out
        </Button>
      </Box>
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <IconButton onClick={handleLogout} sx={{ p: 0, color: "white" }}>
          <ExitToAppIcon />
        </IconButton>
      </Box>
    </Box>
  )
}
