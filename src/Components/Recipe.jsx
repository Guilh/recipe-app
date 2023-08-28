import RecipeRating from "./RecipeRating";

export default function Recipe({ data }) {
  return (
    <div className="card">
      <div>
        <img src={data.strMealThumb} alt={data.strMeal} />
      </div>
      <h2>{data.strMeal}</h2>
      <RecipeRating />
    </div>
  );
}
