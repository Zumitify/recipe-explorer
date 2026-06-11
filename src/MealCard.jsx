// One recipe in the grid. Click to open the full recipe.
export default function MealCard({ meal, onClick }) {
  return (
    <button className="card" onClick={onClick}>
      <img src={meal.strMealThumb} alt={meal.strMeal} loading="lazy" />
      <div className="card-body">
        <h2>{meal.strMeal}</h2>
        <p>{meal.strArea} · {meal.strCategory}</p>
      </div>
    </button>
  )
}
