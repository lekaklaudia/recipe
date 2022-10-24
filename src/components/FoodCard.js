import React from "react";

const FoodCard = ({ recipe }) => {
  const { strMeal, strCategory, strInstructions, strMealThumb } = recipe;

  return (
    <div className="card">
      <img src={strMealThumb} alt={strCategory} />
      <div className="card-body">
        <span className="category">{strCategory}</span>
        <h3>{strMeal}</h3>
        <p>{strInstructions}</p>
      </div>
    </div>
  );
};
export default FoodCard;
