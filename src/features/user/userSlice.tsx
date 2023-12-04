import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

interface UserState {
  email: string
  apiKey: string
  isAuthenticated: boolean
}

const initialState: UserState = {
  email: "",
  apiKey: "",
  isAuthenticated: false,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      state.email = action.payload.email
      state.apiKey = action.payload.apiKey
    },
    logout: (state) => {
      state.email = ""
      state.apiKey = ""
      state.isAuthenticated = false
    },
    setIsAuthenticated: (state) => {
      state.isAuthenticated = true
    },
  },
})

export const { login, logout, setIsAuthenticated } = userSlice.actions

export default userSlice.reducer
