import Grid from "@mui/material/Grid"
import { useAppSelector } from "../../hooks"
import NewsCard from "./NewsCard"

export default function NewsGrid() {
  const { newsItems } = useAppSelector((selector) => selector.news)
  const news = newsItems.filter((n) => n.title !== "[Removed]")
  return (
    <Grid container spacing={3}>
      {news.map((newsItem) => (
        <Grid
          item
          key={newsItem.title}
          xs={6}
          sm={4}
          md={3}
          sx={{ height: "100%" }}
        >
          <NewsCard newsItem={newsItem} />
        </Grid>
      ))}
    </Grid>
  )
}
