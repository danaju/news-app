import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { TextField, Button, Paper, Typography, Container } from "@mui/material"
import { styled } from "@mui/system"

interface LoginFormInput {
  username: string
  password: string
}

const CenteredContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 25rem;
`

const LoginForm: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormInput>()

  const onSubmit: SubmitHandler<LoginFormInput> = (data) => {
    console.log(data)
  }

  return (
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
            label="Username"
            variant="outlined"
            margin="normal"
            fullWidth
            autoFocus
            {...register("username", { required: "Username is required" })}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            {...register("password", { required: "Password is required" })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "15px" }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </CenteredContainer>
  )
}

export default LoginForm
