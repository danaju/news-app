import { render, screen, fireEvent } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import HeaderTitle from "../ui/HeaderTitle"

const mockedUsedNavigate = jest.fn()

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}))

test("navigates to /storylist on click", () => {
  render(
    <MemoryRouter>
      <HeaderTitle display={{ xs: "none", md: "flex" }} />
    </MemoryRouter>
  )

  const headerTitleElement = screen.getByText(/news/i)
  fireEvent.click(headerTitleElement)

  // Ensure the navigate function is called with the correct path
  expect(mockedUsedNavigate).toHaveBeenCalledWith("/storylist")
})
