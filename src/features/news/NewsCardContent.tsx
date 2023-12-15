import { styled } from "@mui/material"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

type NewsCardContentProps = {
  title: string
  source: string
}

const Content = styled(CardContent)`
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Title = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-weight: bold;
`

const Source = styled(Typography)`
  font-size: 0.6rem;
`

export default function NewsCardContent({
  title,
  source,
}: NewsCardContentProps) {
  return (
    <Content>
      <Title variant="body2">{title}</Title>
      <Source variant="overline" color="text.secondary">
        Source: {source}
      </Source>
    </Content>
  )
}
