import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Seafood");

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + selectedCategory)
      .then((response) => response.json())
      .then((data) => setRecipes(data.meals))
      .catch((error) => console.error('Error:', error));
  }, [selectedCategory]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => setCategories(data.categories))
      .catch((error) => console.error('Error:', error));
  }, []);

  const handleSelectChange = (event) => {
    setSelectedCategory(event.target.value);
  }

  return (
    <>
      <h1>My Favorite Recipes</h1>
      <div className='categories'>
        <label htmlFor="categorySelect">Select Category: </label>
        <select id="categorySelect" value={selectedCategory} onChange={handleSelectChange}>
          {categories.map((category) => (
            <option value={category.strCategory} key={category.idCategory}>
              {category.strCategory}
            </option>
          ))}
        </select>
      </div>
      <div className="container">
        {recipes.map((recipe) => (
          <Recipe data={recipe} key={recipe.idMeal} />
        ))}
      </div>
    </>
  );
}
