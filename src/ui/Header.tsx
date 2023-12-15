import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
// import Container from "@mui/material/Container"
import LogOutButton from "./LogOutButton"
import HeaderMenu from "./HeaderMenu"

function Header() {
  const categories = [
    { value: "", label: "All" },
    { value: "business", label: "Business" },
    { value: "entertainment", label: "Entertainment" },
    { value: "general", label: "General" },
    { value: "health", label: "Health" },
    { value: "science", label: "Science" },
    { value: "sports", label: "Sports" },
    { value: "technology", label: "Technology" },
  ]

  return (
    <AppBar position="sticky">
        <Toolbar > 
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: "700",
              letterSpacing: ".3rem",
              color: "inherit",
            }}
          >
            News
          </Typography>

          <HeaderMenu categories={categories} />

          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
            }}
          >
            News
          </Typography>

          <LogOutButton />
        </Toolbar>
    </AppBar>
  )
}

export default Header
