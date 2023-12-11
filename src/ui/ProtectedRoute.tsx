import { useAppSelector } from "../hooks"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

interface ProtectedRouteProps {
  children: React.ReactNode
}

function ProtectedRoute({
  children,
}: ProtectedRouteProps): React.ReactNode | null {
  const navigate = useNavigate()
  const { isAuthenticated } = useAppSelector((store) => store.user)

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/login")
    },
    [isAuthenticated, navigate]
  )
  if (isAuthenticated) return children
}

export default ProtectedRoute
