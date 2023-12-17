import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { Box, Button, IconButton, Menu, Typography } from "@mui/material"
import MenuItem from "@mui/material/MenuItem"
import MenuIcon from "@mui/icons-material/Menu"
import Divider from "@mui/material/Divider"
import { useAppDispatch } from "../hooks"
import { switchCategory } from "../features/news/newsSlice"

interface HeaderMenuProps {
  categories: { label: string; value: string }[]
}

export default function HeaderMenu({ categories }: HeaderMenuProps) {
  const dispatch = useAppDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

  function handleOpenNavMenu(event: React.MouseEvent<HTMLElement>) {
    setAnchorElNav(event.currentTarget)
  }

  function handleCloseNavMenu() {
    setAnchorElNav(null)
  }

  function handleSelectCategory(category: string) {
    setAnchorElNav(null)
    if (searchParams.get("category") === category) return
    category === ""
      ? searchParams.delete("category")
      : searchParams.set("category", category)
    setSearchParams(searchParams)
    dispatch(switchCategory(category))
  }

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
        }}
      >
        {categories.map((item, index) => (
          <>
            {index !== 0 && (
              <Divider orientation="vertical" variant="middle" flexItem />
            )}
            <Button
              key={item.value}
              onClick={() => handleSelectCategory(item.value)}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {item.label}
            </Button>
          </>
        ))}
      </Box>

      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {categories.map((item) => (
            <MenuItem
              key={item.value}
              onClick={() => handleSelectCategory(item.value)}
            >
              <Typography textAlign="center">{item.label}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  )
}
