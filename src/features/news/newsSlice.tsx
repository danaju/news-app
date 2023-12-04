/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getTopNews } from "../../services/apiNews"

interface NewsState {
  status: string
  error?: string
  newsItems: string[]
}

export const fetchNews = createAsyncThunk(
  "user/fetchNews",
  async (_, { rejectWithValue }) => {
    try {
      return await getTopNews()
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
