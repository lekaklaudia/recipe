import React from "react";

const FoodCard = ({ recipe }) => {
  const {
    strMeal,
    strCategory,
    strMealThumb,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  } = recipe;

  return (
    <div className="card">
      <div className="dish-img">
        <img src={strMealThumb} alt={strCategory} />
      </div>

      <div className="card-body">
        <span className="category">{strCategory}</span>
        <h3>{strMeal}</h3>
        <span>
          {strIngredient1}, {strIngredient2}, {strIngredient3}, {strIngredient4}
          , {strIngredient5}
        </span>
      </div>
    </div>
  );
};
export default FoodCard;
