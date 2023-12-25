import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import LogOutButton from "../features/user/LogOutButton"
import store from "../store"

test("renders LogOutButton component", () => {
  render(
    <Provider store={store}>
      <LogOutButton />
    </Provider>
  )

  // Ensure the Log Out button is rendered
  const logOutButton = screen.getByTestId("logout-button")
  expect(logOutButton).toBeInTheDocument()
  expect(logOutButton).toHaveTextContent("Log out")

  // Ensure the Log Out button is clickable
  fireEvent.click(logOutButton)
})

test("renders LogOutButton component with IconButton", () => {
  render(
    <Provider store={store}>
      <LogOutButton />
    </Provider>
  )

  // Ensure the IconButton with ExitToAppIcon is rendered
  const iconButton = screen.getByTestId("logout-icon-button")
  expect(iconButton).toBeInTheDocument()

  // Ensure the IconButton is clickable
  fireEvent.click(iconButton)
})
