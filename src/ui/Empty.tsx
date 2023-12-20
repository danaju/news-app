import { Container, Typography, styled } from "@mui/material"

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50rem;
`

function Empty() {
  return (
    <StyledContainer>
      <Typography variant="h6">No news could be found! Try again later.</Typography>
    </StyledContainer>
  )
}

export default Empty
