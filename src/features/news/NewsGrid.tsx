import { useAppDispatch, useAppSelector } from "../../hooks"
import { useEffect } from "react"
import Grid from "@mui/material/Grid"
import NewsCard from "./NewsCard"
import Spinner from "../../ui/Spinner"
import { fetchNews, incrementPage } from "./newsSlice"
import { useParams } from "react-router-dom"
import { Container, styled } from "@mui/material"
import Empty from "../../ui/Empty"
import Toast from "../../ui/Toast"

const StyledContainer = styled(Container)`
  margin-top: 2rem;
  margin-bottom: 2rem;
`

export default function NewsGrid() {
  const dispatch = useAppDispatch()
  const { newsItems, status, hasMoreItems, error } = useAppSelector(
    (selector) => selector.news
  )
  const { category } = useParams()
  const isLoading = status === "loading"
  const newsArr = newsItems.filter((n) => n.title !== "[Removed]")

  useEffect(() => {
    dispatch(fetchNews({ category }))
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
      dispatch(incrementPage())
      dispatch(fetchNews({ mutateNewsItems: true }))
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isLoading, hasMoreItems, dispatch])

  return (
    <StyledContainer>
      <Grid container spacing={3}>
        {newsArr.map((newsItem) => (
          <Grid item key={newsItem.title} xs={6} sm={4} md={3}>
            <NewsCard newsItem={newsItem} />
          </Grid>
        ))}
      </Grid>
      {isLoading && <Spinner />}
      {!isLoading && newsArr.length === 0 && <Empty />}
      {error && (
        <Toast message={error || "Error getting the news."} type="error" />
      )}
    </StyledContainer>
  )
}
