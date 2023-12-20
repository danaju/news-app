import { Button, IconButton, styled } from "@mui/material"
import { useAppDispatch } from "../../hooks"
import { logout } from "./userSlice"
import ExitToAppIcon from "@mui/icons-material/ExitToApp"

const StyledButton = styled(Button)`
  color: white;
  white-space: nowrap;
  ${({ theme }) => theme.breakpoints.up("xs")} {
    display: none;
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    display: flex;
  }
`
const StyledIconButton = styled(IconButton)`
  color: white;
  ${({ theme }) => theme.breakpoints.up("xs")} {
    display: flex;
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    display: none;
  }
`

export default function LogOutButton() {
  const dispatch = useAppDispatch()

  function handleLogout() {
    dispatch(logout())
  }

  return (
    <>
      <StyledButton onClick={handleLogout} data-testid="logout-button">
        Log out
      </StyledButton>
      <StyledIconButton onClick={handleLogout} data-testid="logout-icon-button">
        <ExitToAppIcon />
      </StyledIconButton>
    </>
  )
}
