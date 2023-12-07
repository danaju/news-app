import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import NewsCard from "./NewsCard"

const newsData = [
  { id: 1, title: "News 1", content: "Content for News 1." },
  { id: 2, title: "News 2", content: "Content for News 2." },
  { id: 3, title: "News 3", content: "Content for News 3." },
  { id: 4, title: "News 4", content: "Content for News 4." },
  { id: 5, title: "News 5", content: "Content for News 5." },
  { id: 6, title: "News 6", content: "Content for News 6." },
  { id: 7, title: "News 7", content: "Content for News 7." },
  { id: 8, title: "News 8", content: "Content for News 8." },
  { id: 9, title: "News 9", content: "Content for News 9." },
  { id: 9, title: "News 9", content: "Content for News 9." },
]

export default function NewsGrid() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={8}>
        <NewsCard />
      </Grid>
      <Grid item xs={12} sm={4}>
        <NewsCard />
      </Grid>

      {newsData.slice(2, 5).map((news) => (
        <Grid item key={news.id} xs={12} sm={4}>
          <Paper elevation={3} style={{ padding: 16 }}>
            <h2>{news.title}</h2>
            <p>{news.content}</p>
          </Paper>
        </Grid>
      ))}

      {newsData.slice(5).map((news) => (
        <Grid item key={news.id} xs={12} sm={3}>
          <Paper elevation={3} style={{ padding: 16 }}>
            <h2>{news.title}</h2>
            <p>{news.content}</p>
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
}
