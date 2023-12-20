import { Container, styled } from "@mui/material"
import CircularProgress from "@mui/material/CircularProgress"

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50rem;
  width: 25rem;
`

function Spinner() {
  return (
    <StyledContainer>
      <CircularProgress size={100} thickness={1.5} />
    </StyledContainer>
  )
}

export default Spinner
