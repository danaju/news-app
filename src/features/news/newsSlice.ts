/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getTopHeadlines } from "../../services/apiNews"

interface NewsState {
  status: string
  error?: string
  newsItems: NewsItem[]
  currentPage: number
  category: string
}

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { news } = getState()
      return await getTopHeadlines({
        page: news.currentPage,
        category: news.category,
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

const initialState: NewsState = {
  status: "idle",
  error: "",
  newsItems: [],
  currentPage: 1,
  category: "",
}

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    switchCategory: (state, action) => {
      state.newsItems = []
      state.currentPage = 1
      state.category = action.payload
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
        state.status = "idle"
        state.newsItems = [...state.newsItems, ...action.payload]
        state.error = ""
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = "error"
        state.error = action.payload as string
      }),
})

export const { switchCategory, incrementPage } = newsSlice.actions

export default newsSlice.reducer
