const API_URL = "https://newsapi.org/v2"

export async function getTopNews() {
  const res = await fetch(`${API_URL}/top-headlines?country=us`, {
    method: "GET",
    headers: {
      Authorization: "40806accd2f741779294b5d2722cab6e",
    },
    // body: JSON.stringify({ country: "us" }),
  })
  console.log(res)
  if (res.status === 401)
    throw new Error("Authentication failed. Check your API key.")
  if (!res.ok) throw new Error("Error getting the news.")

  const { articles } = await res.json()
  return articles
}
