import { Container, styled } from "@mui/material"
import CircularProgress from "@mui/material/CircularProgress"

const FullPage = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 25rem;
`

function Spinner() {
  return (
    <FullPage>
      <CircularProgress size={100} thickness={1.5} />
    </FullPage>
  )
}

export default Spinner
