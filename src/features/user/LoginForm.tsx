import { styled } from "@mui/system"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { useNavigate } from "react-router-dom"
import { authenticate } from "./userSlice"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import {
  TextField,
  Button,
  Paper,
  Typography,
  Container,
  Grid,
} from "@mui/material"
import ExitToAppIcon from "@mui/icons-material/ExitToApp"
import Tooltip from "@mui/material/Tooltip"
import LoadingButton from "@mui/lab/LoadingButton"
import Toast from "../../ui/Toast"

interface LoginFormInput {
  email: string
  apiKey: string
}

const StyledContainer = styled(Container)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25rem;
`

const StyledPaper = styled(Paper)`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;
`

function LoginForm() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { isAuthenticated, isLoading, error } = useAppSelector(
    (store) => store.user
  )
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormInput>()

  useEffect(
    function () {
      if (!isLoading && !error && isAuthenticated) {
        navigate("/storyList")
      }
    },
    [navigate, isLoading, error, isAuthenticated]
  )

  function onSubmit({ apiKey, email }: LoginFormInput): void {
    localStorage.setItem("apiKey", apiKey)
    localStorage.setItem("email", email)
    dispatch(authenticate())
  }

  function handleRegister() {
    window.open("https://newsapi.org/register", "_blank", "noopener noreferrer")
  }

  return (
    <>
      {error && (
        <Toast message={error || "Error getting the news."} type="error" />
      )}
      <StyledContainer>
        <StyledPaper elevation={3}>
          <Typography variant="h6">Login</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Email"
              variant="outlined"
              margin="normal"
              defaultValue="d@test.test"
              fullWidth
              autoFocus
              {...register("email", {
                required: "Email address is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              label="API key"
              type="password"
              variant="outlined"
              margin="normal"
              fullWidth
              {...register("apiKey", { required: "API key is required" })}
              error={!!errors.apiKey}
              helperText={errors.apiKey?.message}
            />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <LoadingButton
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  loading={isLoading}
                >
                  Login
                </LoadingButton>
              </Grid>
              <Grid item xs={6}>
                <Tooltip title="In order to obtain the API key for logging in you need to register on the external News API site.">
                  <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={isLoading}
                    onClick={handleRegister}
                  >
                    Register
                    <ExitToAppIcon fontSize="inherit" />
                  </Button>
                </Tooltip>
              </Grid>
            </Grid>
          </form>
        </StyledPaper>
      </StyledContainer>
    </>
  )
}

export default LoginForm
