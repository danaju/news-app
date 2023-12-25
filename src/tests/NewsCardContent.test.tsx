import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import NewsCardContent from "../features/news/NewsCardContent"

describe("NewsCardContent component", () => {
  test("renders title and source correctly", () => {
    const mockProps = {
      title: "Test Title",
      source: "Test Source",
    }

    render(<NewsCardContent {...mockProps} />)

    // Check if the title is rendered correctly
    const titleElement = screen.getByText(/Test Title/i)
    expect(titleElement).toBeInTheDocument()

    // Check if the source is rendered correctly
    const sourceElement = screen.getByText(/Source: Test Source/i)
    expect(sourceElement).toBeInTheDocument()
  })
})
