import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Empty from "../ui/Empty"

test("renders Empty component with correct message", () => {
  render(<Empty />)

  const emptyMessageElement = screen.getByText(
    "No news could be found! Try again later."
  )

  expect(emptyMessageElement).toBeInTheDocument()
})
