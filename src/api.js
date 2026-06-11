// TheMealDB public API — free, no API key required.
const BASE = 'https://www.themealdb.com/api/json/v1/1'

// Search recipes by name. An empty query returns a default set of meals.
export async function searchMeals(query) {
  const res = await fetch(`${BASE}/search.php?s=${encodeURIComponent(query)}`)
  if (!res.ok) throw new Error('Could not load recipes. Please try again.')
  const data = await res.json()
  return data.meals || []
}

// Load one recipe's full details by id.
export async function getMeal(id) {
  const res = await fetch(`${BASE}/lookup.php?i=${id}`)
  if (!res.ok) throw new Error('Could not load this recipe. Please try again.')
  const data = await res.json()
  return data.meals ? data.meals[0] : null
}
