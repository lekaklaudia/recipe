import { useState, useEffect } from "react";
import FetchData from "./components/FetchData";

import "./style/index.scss";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FoodCard from "./components/FoodCard";

function App() {
  const [loading, setLoading] = useState(false);

  const [recipe, setRecipe] = useState([]);

  const getMeals = async () => {
    const { data } = await FetchData({ params: { s: term } });
    setRecipe(data.meals);
  };

  useEffect(() => {
    getMeals();
  }, []);
  const [term, setTerm] = useState("");

  const onChange = (e) => {
    const text = e.target.value;
    setTerm(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getMeals();
  };

  return (
    <div className="container">
      <Header />
      <h1>Search Recipe</h1>
      <SearchBar handleSubmit={handleSubmit} value={term} onChange={onChange} />

      <div className="recipe">
        {recipe
          ? recipe.map((rec, index) => <FoodCard key={index} recipe={rec} />)
          : "Search Another Recipe"}
      </div>
    </div>
  );
}

export default App;
