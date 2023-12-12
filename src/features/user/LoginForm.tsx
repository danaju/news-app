import { styled } from "@mui/system"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { useNavigate } from "react-router-dom"
import { fetchNews } from "../news/newsSlice"
import { login } from "./userSlice"
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

const CenteredContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 25rem;
`

function LoginForm() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { status: newsStatus, error: newsErrorMsg } = useAppSelector(
    (store) => store.news
  )
  const { isAuthenticated } = useAppSelector((store) => store.user)
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormInput>()

  const isLoading = newsStatus === "loading"
  const isError = newsStatus === "error"

  useEffect(
    function () {
      if (!isLoading && !isError && isAuthenticated) {
        navigate("/storyList")
      }
    },
    [navigate, isLoading, isError, isAuthenticated]
  )

  function onSubmit({ apiKey, email }: LoginFormInput): void {
    localStorage.setItem("apiKey", apiKey)
    localStorage.setItem("email", email)
    dispatch(fetchNews()).then((action) => {
      if (action.meta.requestStatus === "fulfilled") {
        dispatch(login({ apiKey, email }))
      }
    })
  }

  function handleRegister() {
    window.open("https://newsapi.org/register", "_blank", "noopener noreferrer")
  }

  return (
    <>
      {isError && (
        <Toast
          message={newsErrorMsg || "Error getting the news."}
          type="error"
        />
      )}
      <CenteredContainer>
        <Paper
          elevation={3}
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Login</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Email"
              variant="outlined"
              margin="normal"
              value="d@test.test"
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
              value=""
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
                  style={{ marginTop: "15px" }}
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
                    style={{
                      marginTop: "15px",
                      display: "flex",
                      alignItems: "center",
                    }}
                    onClick={handleRegister}
                  >
                    Register{" "}
                    <ExitToAppIcon sx={{ ml: 0.5, width: 20, height: 20 }} />
                  </Button>
                </Tooltip>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </CenteredContainer>
    </>
  )
}

export default LoginForm
