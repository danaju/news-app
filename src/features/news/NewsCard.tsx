import { Grid } from "@mui/material"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import NewsCardContent from "./NewsCardContent"

type NewsCardProps = {
  newsItem: NewsItem
}

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
    <Card onClick={handleOpenSource} sx={{ ":hover": { cursor: "pointer" } }}>
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
    </Card>
  )
}
