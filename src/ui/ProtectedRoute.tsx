import { useAppDispatch, useAppSelector } from "../hooks"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { authenticate } from "../features/user/userSlice"

interface ProtectedRouteProps {
  children: React.ReactNode
}

function ProtectedRoute({
  children,
}: ProtectedRouteProps): React.ReactNode | null {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { isAuthenticated, error } = useAppSelector((store) => store.user)
  const apiKey = localStorage.getItem("apiKey")

  useEffect(
    function () {
      if (!isAuthenticated && apiKey) {
        dispatch(authenticate())
      }
      if ((!isAuthenticated && !apiKey) || error) navigate("/login")
    },
    [isAuthenticated, navigate, apiKey, dispatch, error]
  )
  return children
}

export default ProtectedRoute
