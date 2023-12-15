import { useAppDispatch, useAppSelector } from "../../hooks"
import { useEffect } from "react"
import Grid from "@mui/material/Grid"
import NewsCard from "./NewsCard"
import Spinner from "../../ui/Spinner"
import { fetchNews, incrementPage } from "./newsSlice"

export default function NewsGrid() {
  const dispatch = useAppDispatch()
  const { newsItems, status, currentPage, category, hasMoreItems } =
    useAppSelector((selector) => selector.news)

  const isLoading = status === "loading"
  const newsArr = newsItems.filter((n) => n.title !== "[Removed]")

  useEffect(() => {
    dispatch(fetchNews())
  }, [category, dispatch])

  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        isLoading ||
        !hasMoreItems
      ) {
        return
      }
      console.log("scroll action")
      console.log(hasMoreItems)
      dispatch(incrementPage())
      dispatch(fetchNews())
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isLoading, dispatch, currentPage, hasMoreItems])

  return (
    <>
      <Grid container spacing={3}>
        {newsArr.map((newsItem) => (
          <Grid item key={newsItem.title} xs={6} sm={4} md={3}>
            <NewsCard newsItem={newsItem} />
          </Grid>
        ))}
      </Grid>
      {isLoading && <Spinner />}
    </>
  )
}
