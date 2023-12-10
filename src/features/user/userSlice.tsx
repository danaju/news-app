import { createSlice } from "@reduxjs/toolkit"

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
    login: (state, action) => {
      state.email = action.payload.email
      state.apiKey = action.payload.apiKey
      state.isAuthenticated = true
    },
    logout: (state) => {
      state.email = ""
      state.apiKey = ""
      state.isAuthenticated = false
    },
  },
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer
