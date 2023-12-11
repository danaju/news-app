export default interface GetTopHeadlinesParams {
  category?: string
  country?: string
}

const API_URL = "https://newsapi.org/v2"

export async function getTopHeadlines(params?: GetTopHeadlinesParams) {
  const country = params?.country ?? "us"
  const category = params?.category

  const queryParams = new URLSearchParams({ country })

  if (category) {
    queryParams.append("category", category)
  }

  const res = await fetch(`${API_URL}/top-headlines?${queryParams}`, {
    method: "GET",
    headers: {
      Authorization: localStorage.getItem("apiKey") || "",
    },
  })
  if (res.status === 401)
    throw new Error("Authentication failed. Please enter a correct API key.")
  if (!res.ok)
    throw new Error(`Error getting the news. (Error code: ${res.status})`)

  const { articles } = await res.json()
  return articles
}
