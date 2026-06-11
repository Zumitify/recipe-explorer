import { useState, useEffect } from 'react'
import { searchMeals } from './api'
import MealCard from './MealCard'
import MealDetail from './MealDetail'

export default function App() {
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [query, setQuery] = useState('')
  const [selectedId, setSelectedId] = useState(null)

  // Fetch recipes for the given search term and track loading / error state.
  async function load(search) {
    setLoading(true)
    setError('')
    try {
      setMeals(await searchMeals(search))
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  // Load a default set of recipes on first render.
  useEffect(() => {
    load('')
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    load(query)
  }

  return (
    <div className="app">
      <header className="header">
        <h1>🍳 Recipe Explorer</h1>
        <p>Search thousands of recipes from TheMealDB.</p>
      </header>

      <form className="search" onSubmit={handleSubmit}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search recipes (e.g. chicken, pasta)…"
          aria-label="Search recipes"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p className="status">Loading recipes…</p>}

      {error && (
        <div className="status error">
          <p>{error}</p>
          <button onClick={() => load(query)}>Try again</button>
        </div>
      )}

      {!loading && !error && meals.length === 0 && (
        <p className="status">No recipes found. Try another search.</p>
      )}

      {!loading && !error && meals.length > 0 && (
        <div className="grid">
          {meals.map((meal) => (
            <MealCard
              key={meal.idMeal}
              meal={meal}
              onClick={() => setSelectedId(meal.idMeal)}
            />
          ))}
        </div>
      )}

      {selectedId && (
        <MealDetail id={selectedId} onClose={() => setSelectedId(null)} />
      )}

      <footer className="footer">
        Data from{' '}
        <a href="https://www.themealdb.com" target="_blank" rel="noreferrer">
          TheMealDB
        </a>{' '}
        · Built with React + Vite
      </footer>
    </div>
  )
}
