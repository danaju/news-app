import { useAppDispatch, useAppSelector } from "../hooks"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { login } from "../features/user/userSlice"
import { fetchNews } from "../features/news/newsSlice"

interface ProtectedRouteProps {
  children: React.ReactNode
}

function ProtectedRoute({
  children,
}: ProtectedRouteProps): React.ReactNode | null {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { isAuthenticated } = useAppSelector((store) => store.user)
  const { error, status } = useAppSelector((store) => store.news)
  const apiKey = localStorage.getItem("apiKey")
  const email = localStorage.getItem("email")

  useEffect(
    function () {
      if (!isAuthenticated && (!apiKey || !email)) navigate("/login")
      if (!isAuthenticated && apiKey && email) {
        dispatch(fetchNews())
        if (error) navigate("/login")
        else if (status !== "loading" && !error) {
          dispatch(login({ apiKey, email }))
        }
      }
    },
    [isAuthenticated, navigate, apiKey, email, dispatch, error, status]
  )
  if (isAuthenticated) return children
}

export default ProtectedRoute
