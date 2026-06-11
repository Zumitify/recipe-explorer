import { useState, useEffect } from 'react'
import { getMeal } from './api'

// Full recipe shown in a modal. Loads its own data when opened.
export default function MealDetail({ id, onClose }) {
  const [meal, setMeal] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    setError('')
    getMeal(id)
      .then(setMeal)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [id])

  // TheMealDB stores ingredients in 20 numbered fields — collect the used ones.
  const ingredients = []
  if (meal) {
    for (let i = 1; i <= 20; i++) {
      const name = meal[`strIngredient${i}`]
      const measure = meal[`strMeasure${i}`]
      if (name && name.trim()) ingredients.push(`${measure || ''} ${name}`.trim())
    }
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose} aria-label="Close">✕</button>

        {loading && <p className="status">Loading recipe…</p>}
        {error && <p className="status error">{error}</p>}

        {meal && (
          <>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h2>{meal.strMeal}</h2>
            <p className="meta">{meal.strArea} · {meal.strCategory}</p>

            <h3>Ingredients</h3>
            <ul>
              {ingredients.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h3>Instructions</h3>
            <p className="instructions">{meal.strInstructions}</p>
          </>
        )}
      </div>
    </div>
  )
}
