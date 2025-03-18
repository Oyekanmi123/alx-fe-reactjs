import { useState } from "react";

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Validation: Ensure all fields are filled & at least 2 ingredients
    if (!title || !ingredients || !steps) {
      setError("All fields are required.");
      return;
    }

    const ingredientList = ingredients.split(",").map((item) => item.trim());
    if (ingredientList.length < 2) {
      setError("Please enter at least two ingredients.");
      return;
    }

    // ✅ Send new recipe data to parent component
    onAddRecipe({
      id: Date.now(),
      title,
      ingredients: ingredientList,
      steps,
    });

    // ✅ Clear form after submission
    setTitle("");
    setIngredients("");
    setSteps("");
    setError("");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Recipe</h2>
      {error && <p className="text-red-500 text-center">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipe Title */}
        <div>
          <label className="block font-medium text-gray-700">Recipe Title:</label>
          <input
            type="text"
            className="w-full border-gray-300 rounded-lg shadow-sm p-2 focus:ring focus:ring-blue-300"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-medium text-gray-700">Ingredients:</label>
          <textarea
            className="w-full border-gray-300 rounded-lg shadow-sm p-2 focus:ring focus:ring-blue-300"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Enter ingredients, separated by commas"
            rows="3"
          ></textarea>
        </div>

        {/* Preparation Steps */}
        <div>
          <label className="block font-medium text-gray-700">Preparation Steps:</label>
          <textarea
            className="w-full border-gray-300 rounded-lg shadow-sm p-2 focus:ring focus:ring-blue-300"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="Enter preparation steps"
            rows="5"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;