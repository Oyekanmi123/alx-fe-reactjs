import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error("Error fetching recipe:", error));
  }, [id]);

  if (!recipe) {
    return <div className="text-center text-xl font-semibold mt-10">Loading recipe...</div>;
  }

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <img src={recipe.image} alt={recipe.title} className="w-full h-60 object-cover rounded-md mb-6" />
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <p className="text-gray-600 text-lg mb-4">{recipe.summary}</p>

      <h2 className="text-2xl font-semibold mt-6">Ingredients</h2>
      <ul className="list-disc list-inside bg-gray-100 p-4 rounded-md">
        {recipe.ingredients?.map((ingredient, index) => (
          <li key={index} className="text-gray-700">{ingredient}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Instructions</h2>
      <ol className="list-decimal list-inside bg-gray-100 p-4 rounded-md">
        {recipe.instructions?.map((step, index) => (
          <li key={index} className="text-gray-700 mb-2">{step}</li>
        ))}
      </ol>

      <Link to="/" className="block text-center mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Back to Home
      </Link>
    </div>
  );
};

export default RecipeDetail;