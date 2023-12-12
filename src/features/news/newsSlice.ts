import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getTopHeadlines } from "../../services/apiNews"
import GetTopHeadlinesParams from "../../services/apiNews"

interface NewsState {
  status: string
  error?: string
  newsItems: NewsItem[]
}

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async (params: GetTopHeadlinesParams | undefined, { rejectWithValue }) => {
    try {
      return await getTopHeadlines(params)
    } catch (e) {
      if (typeof e === "string") {
        return rejectWithValue(e.toUpperCase())
      } else if (e instanceof Error) {
        return rejectWithValue(e.message)
      }
    }
  }
)

const initialState: NewsState = { status: "idle", error: "", newsItems: [] }

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = "idle"
        state.newsItems = action.payload
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = "error"
        state.error = action.payload as string
      }),
})

export default newsSlice.reducer
