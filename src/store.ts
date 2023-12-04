import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./features/user/userSlice"
import newsReducer from "./features/news/newsSlice"

const store = configureStore({
  reducer: {
    user: userReducer,
    news: newsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
