// Service responsible for the Tutor AI external API consumption.
// Simulates the "AI" answer by consuming a public text endpoint
// (JSONPlaceholder), following the pattern of checking res.ok before parsing.
const BASE_URL = 'https://jsonplaceholder.typicode.com'

// Takes the question and returns a text built from the API data.
export async function askTutor(question) {
  // We use the question length only to vary which "post" is fetched.
  const id = (question.length % 100) + 1
  const res = await fetch(`${BASE_URL}/posts/${id}`)

  // Always check res.ok before parsing the JSON.
  if (!res.ok) {
    throw new Error(`Error querying the Tutor AI (status ${res.status})`)
  }

  const data = await res.json()
  return `${data.body}`
}
