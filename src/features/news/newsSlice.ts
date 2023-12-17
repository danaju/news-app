import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getTopHeadlines } from "../../services/apiNews"

interface NewsState {
  status: string
  error?: string
  newsItems: NewsItem[]
  currentPage: number
  category: string
  hasMoreItems: boolean
}

interface FetchNewsArgs {
  category?: string
  mutateNewsItems?: boolean
}

const initialState: NewsState = {
  status: "idle",
  error: "",
  newsItems: [],
  currentPage: 1,
  category: "",
  hasMoreItems: false,
}

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async (args: FetchNewsArgs | undefined, { rejectWithValue, getState }) => {
    try {
      const { news } = getState() as { news: NewsState }
      return await getTopHeadlines({
        page: news.currentPage,
        category: args?.category,
      })
    } catch (e) {
      if (typeof e === "string") {
        return rejectWithValue(e.toUpperCase())
      } else if (e instanceof Error) {
        return rejectWithValue(e.message)
      }
    }
  }
)

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    switchCategory: (state) => {
      state.newsItems = []
      state.currentPage = 1
      state.hasMoreItems = false
    },
    incrementPage: (state) => {
      state.currentPage += 1
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        const mutate = action.meta.arg?.mutateNewsItems
        const { articles, totalResults } = action.payload!
        state.status = "idle"
        mutate
          ? (state.newsItems = [...state.newsItems, ...articles])
          : (state.newsItems = articles)
        state.error = ""
        totalResults <= state.newsItems.length
          ? (state.hasMoreItems = false)
          : (state.hasMoreItems = true)
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = "error"
        state.error = action.payload as string
      }),
})

export const { switchCategory, incrementPage } = newsSlice.actions
export default newsSlice.reducer
