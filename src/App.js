import { useState, useEffect } from "react";
import FetchData from "./components/FetchData";

import "./style/index.scss";
import SearchBar from "./components/SearchBar";
import FoodCard from "./components/FoodCard";

function App() {
  const [loading, setLoading] = useState(false);
  const [term, setTerm] = useState(null);
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const getMeals = async () => {
      const response = await FetchData();
      setRecipe(response.data);
    };

    getMeals();
    console.log(recipe);
  }, []);

  return (
    <div className="container">
      <h2>Search Recipe</h2>

      {recipe
        ? recipe.map((rec) => <FoodCard key={rec.idMeal} recipe={rec} />)
        : "Search Another Recipe"}
    </div>
  );
}

export default App;
