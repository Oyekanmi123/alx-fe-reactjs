import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";
import { useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: "Spaghetti Carbonara",
      ingredients: ["Spaghetti", "Eggs", "Cheese", "Bacon", "Black pepper"],
      steps: "Boil pasta, cook bacon, mix eggs & cheese, combine all ingredients.",
    },
  ]);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage recipes={recipes} />} />
        <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
        <Route path="/add-recipe" element={<AddRecipeForm onAddRecipe={handleAddRecipe} />} />
      </Routes>
    </Router>
  );
}

export default App;