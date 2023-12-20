import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Box, IconButton, Menu, Typography } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../hooks"
import { switchCategory } from "../features/news/newsSlice"
import MenuItem from "@mui/material/MenuItem"
import MenuIcon from "@mui/icons-material/Menu"
import { styled } from "@mui/system"

interface HeaderMenuProps {
  categories: { label: string; value: string }[]
}

const StyledMenuBoxMd = styled(Box)`
  flex-grow: 1;
  ${({ theme }) => theme.breakpoints.up("xs")} {
    display: none;
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    display: flex;
  }
`

const StyledMenuBoxXs = styled(Box)`
  flex-grow: 1;
  ${({ theme }) => theme.breakpoints.up("xs")} {
    display: flex;
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    display: none;
  }
`

export default function HeaderMenu({ categories }: HeaderMenuProps) {
  const dispatch = useAppDispatch()
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const navigate = useNavigate()
  const { status } = useAppSelector((store) => store.news)
  const isLoading = status === "loading"

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
      <StyledMenuBoxMd>
        {categories.map((item) => (
          <MenuItem
            key={item.value}
            onClick={() => handleSelectCategory(item.value)}
            disabled={isLoading}
          >
            <Typography textAlign="center">{item.label}</Typography>
          </MenuItem>
        ))}
      </StyledMenuBoxMd>

      <StyledMenuBoxXs>
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
              disabled={isLoading}
            >
              <Typography textAlign="center">{item.label}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </StyledMenuBoxXs>
    </>
  )
}
