import { styled } from "@mui/material"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

type NewsCardContentProps = {
  title: string
  source: string
}

const StyledCardContent = styled(CardContent)`
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:last-child {
    padding-bottom: 6px;
  }
`

const StyledTitle = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font-weight: bold;
`

const StyledSource = styled(Typography)`
  font-size: 0.6rem;
  line-height: 1.5;
`

export default function NewsCardContent({
  title,
  source,
}: NewsCardContentProps) {
  return (
    <StyledCardContent>
      <StyledTitle variant="body2">{title}</StyledTitle>
      <StyledSource variant="overline" color="text.secondary">
        Source: {source}
      </StyledSource>
    </StyledCardContent>
  )
}
