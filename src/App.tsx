import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import StoryList from "./pages/StoryList"
import Login from "./pages/Login"
import PageNotFound from "./pages/PageNotFound"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="storylist" />} />
        <Route path="storylist" element={<StoryList />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
