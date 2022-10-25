import { useState, useEffect } from "react";
import FetchData from "./components/FetchData";

import "./style/index.scss";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FoodCard from "./components/FoodCard";

function App() {
  const [loading, setLoading] = useState(false);
  const [term, setTerm] = useState(null);
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const getMeals = async () => {
      const { data } = await FetchData();
      setRecipe(data.meals);
    };

    getMeals();
  }, []);
  console.log(recipe);

  /* const handleSubmit = (e) => {
    e.preventDefault();
    getMeals();

      <SearchBar
        handleSubmit={handleSubmit}
        value={query}
        onChange={(e) => setTerm(e.target.value)}
      />
  };*/

  return (
    <div className="container">
      <Header />
      <h1>Search Recipe</h1>
      <div className="recipe">
        {recipe
          ? recipe.map((rec, index) => <FoodCard key={index} recipe={rec} />)
          : "Search Another Recipe"}
      </div>
    </div>
  );
}

export default App;
