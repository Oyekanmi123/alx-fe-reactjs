import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Recipe Sharing Platform</h1>
      <div className="text-center mb-6">
        <Link to="/add-recipe">
          <button className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition">
            + Add New Recipe
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
        <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="block">
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg hover:scale-105 transition-transform"
          >
            <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded-md" />
            <h2 className="text-xl font-semibold mt-2">{recipe.title}</h2>
            <p className="text-gray-600 text-sm">{recipe.summary}</p>
            <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              View Recipe
            </button>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;