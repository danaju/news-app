import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getTopHeadlines } from "../../services/apiNews"

interface UserState {
  email: string
  apiKey: string
  isLoading: boolean
  isAuthenticated: boolean
  error: string
}

const initialState: UserState = {
  email: "",
  apiKey: "",
  isLoading: false,
  isAuthenticated: false,
  error: "",
}

export const authenticate = createAsyncThunk(
  "user/authenticate",
  async (_, { rejectWithValue }) => {
    try {
      return await getTopHeadlines()
    } catch (e) {
      if (typeof e === "string") {
        return rejectWithValue(e.toUpperCase())
      } else if (e instanceof Error) {
        return rejectWithValue(e.message)
      }
    }
  }
)

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email
      state.apiKey = action.payload.apiKey
      state.isAuthenticated = true
    },
    logout: (state) => {
      state.email = ""
      state.apiKey = ""
      state.isAuthenticated = false
      localStorage.removeItem("apiKey")
      localStorage.removeItem("email")
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(authenticate.pending, (state) => {
        state.isLoading = true
      })
      .addCase(authenticate.fulfilled, (state) => {
        state.isLoading = false
        state.isAuthenticated = true
        state.error = ""
      })
      .addCase(authenticate.rejected, (state, action) => {
        state.isLoading = false
        state.isAuthenticated = false
        state.error = action.payload as string
      }),
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer
