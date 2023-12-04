import { useAppSelector } from "../hooks"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

import { styled, Container } from "@mui/material"
import Spinner from "./Spinner"

interface ProtectedRouteProps {
  children: React.ReactNode
}

const FullPage = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 25rem;
`

function ProtectedRoute({
  children,
}: ProtectedRouteProps): React.ReactNode | null {
  const navigate = useNavigate()
  const { isAuthenticated } = useAppSelector((store) => store.user)
  const { status } = useAppSelector((store) => store.news)

  useEffect(
    function () {
      if (!isAuthenticated && status !== "pending") navigate("/login")
    },
    [status, isAuthenticated, navigate]
  )

  if (status === "pending")
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    )

  if (isAuthenticated) return children
}

export default ProtectedRoute
