import { Typography, TypographyProps, styled } from "@mui/material"
import { useNavigate } from "react-router-dom"

const StyledTypography = styled(Typography)`
  margin-right: 2;
  font-family: monospace;
  font-weight: 700;
  letter-spacing: 0.2rem;
  &:hover {
    cursor: pointer;
  }
  flex-grow: 1;
`

export default function HeaderTitle({ display }: TypographyProps) {
  const navigate = useNavigate()
  return (
    <StyledTypography
      variant="h6"
      noWrap
      sx={{
        display,
      }}
      onClick={() => navigate("/storylist")}
    >
      News
    </StyledTypography>
  )
}
