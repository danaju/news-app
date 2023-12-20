import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import LogOutButton from "../features/user/LogOutButton"
import HeaderMenu from "./HeaderMenu"
import HeaderTitle from "./HeaderTitle"

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
      <Toolbar variant="dense">
        <HeaderTitle display={{ xs: "none", md: "flex" }} />
        <HeaderMenu categories={categories} />
        <HeaderTitle display={{ xs: "flex", md: "none" }} />
        <LogOutButton />
      </Toolbar>
    </AppBar>
  )
}

export default Header
