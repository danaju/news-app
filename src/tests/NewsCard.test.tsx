import NewsCard from "../features/news/NewsCard"
import "@testing-library/jest-dom"
import { render, screen, fireEvent } from "@testing-library/react"

window.open = jest.fn()

const mockNewsItem: NewsItem = {
  source: {
    id: "Mock id",
    name: "Mock source name",
  },
  author: "Mock author",
  title: "Mock title",
  description: "Mock description",
  url: "https://mock-url.com",
  urlToImage: "https://mock-url-img.com",
  publishedAt: "Mock published",
  content: "Mock content",
}

describe("NewsCard component", () => {
  test("renders NewsCard correctly", () => {
    render(<NewsCard newsItem={mockNewsItem} />)

    // Check if the title and source are rendered
    expect(screen.getByText("Mock title")).toBeInTheDocument()
    expect(screen.getByText(/Mock source name/i)).toBeInTheDocument()

    // Check if the image is rendered
    expect(screen.getByAltText("Mock source name")).toBeInTheDocument()
  })

  test("handles click event correctly", () => {
    render(<NewsCard newsItem={mockNewsItem} />)

    // Simulate a click on the card
    fireEvent.click(screen.getByAltText("Mock source name"))

    // Check if window.open is called with the correct URL
    expect(window.open).toHaveBeenCalledWith(
      "https://mock-url.com",
      "_blank",
      "noopener noreferrer"
    )
  })
})
