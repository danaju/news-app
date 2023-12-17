import { Grid, styled } from "@mui/material"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import NewsCardContent from "./NewsCardContent"

type NewsCardProps = {
  newsItem: NewsItem
}

const StyledCard = styled(Card)`
  &:hover {
    cursor: pointer;
  }
`

export default function NewsCard({ newsItem }: NewsCardProps) {
  const {
    source: { name: sourceName },
    urlToImage,
    title,
    url,
  } = newsItem

  function handleOpenSource() {
    window.open(url, "_blank", "noopener noreferrer")
  }

  return (
    <StyledCard onClick={handleOpenSource}>
      <Grid container>
        <Grid item xs={12}>
          <CardMedia
            component="img"
            height="140"
            image={urlToImage || "/contemplative-reptile.jpg"}
            alt={sourceName}
          />
        </Grid>

        <Grid item xs={12}>
          <NewsCardContent title={title} source={sourceName} />
        </Grid>
      </Grid>
    </StyledCard>
  )
}
