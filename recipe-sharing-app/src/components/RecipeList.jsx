import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';
import React from 'react';

const RecipeList = () => {
    const recipes = useRecipeStore((state) =>
    state.searchTerm ? state.filteredRecipes : state.recipes
  );

  return (
     <div>
      {recipes.length === 0 ? <p>No recipes found.</p> : (
        recipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;