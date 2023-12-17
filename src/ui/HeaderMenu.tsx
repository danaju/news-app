import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Box, IconButton, Menu, Typography } from "@mui/material"
import { useAppDispatch } from "../hooks"
import { switchCategory } from "../features/news/newsSlice"
import MenuItem from "@mui/material/MenuItem"
import MenuIcon from "@mui/icons-material/Menu"

interface HeaderMenuProps {
  categories: { label: string; value: string }[]
}

export default function HeaderMenu({ categories }: HeaderMenuProps) {
  const dispatch = useAppDispatch()
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const navigate = useNavigate()

  function handleOpenNavMenu(event: React.MouseEvent<HTMLElement>) {
    setAnchorElNav(event.currentTarget)
  }

  function handleCloseNavMenu() {
    setAnchorElNav(null)
  }

  function handleSelectCategory(category: string) {
    setAnchorElNav(null)
    dispatch(switchCategory())
    navigate(`/storylist/${category}`)
  }

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
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
