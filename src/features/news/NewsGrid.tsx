import { useAppDispatch, useAppSelector } from "../../hooks"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { fetchNews } from "./newsSlice"
import Grid from "@mui/material/Grid"
import NewsCard from "./NewsCard"
import Spinner from "../../ui/Spinner"

export default function NewsGrid() {
  const dispatch = useAppDispatch()
  const { newsItems, status } = useAppSelector((selector) => selector.news)
  const [searchParams] = useSearchParams()

  const category = searchParams.get("category")
  const isLoading = status === "loading"
  const newsArr = newsItems.filter((n) => n.title !== "[Removed]")

  useEffect(
    function () {
      if (category) dispatch(fetchNews({ category }))
      else dispatch(fetchNews())
    },
    [searchParams, category, dispatch]
  )

  if (isLoading) return <Spinner />

  return (
    <Grid container spacing={3}>
      {newsArr.map((newsItem) => (
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
