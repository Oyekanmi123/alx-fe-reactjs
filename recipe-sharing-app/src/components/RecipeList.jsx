import {useRecipeStore} from './recipeStore';
import { Link } from 'react-router-dom';
import React from 'react';

const RecipeList = () => {
    const { searchTerm, filteredRecipes, recipes, addFavorite, removeFavorite, favorites } =
    useRecipeStore((state) => ({
      searchTerm: state.searchTerm,
      filteredRecipes: state.filteredRecipes,
      recipes: state.recipes,
      addFavorite: state.addFavorite,
      removeFavorite: state.removeFavorite,
      favorites: state.favorites,
    }));

    const displayedRecipes = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
    <h2>Recipes</h2>
    {displayedRecipes.length === 0 ? (
      <p>No recipes found.</p>
    ) : (
      <ul>
        {displayedRecipes.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>

            {/* Favorite Button */}
            {favorites.includes(recipe.id) ? (
              <button onClick={() => removeFavorite(recipe.id)}>Remove from Favorites</button>
            ) : (
              <button onClick={() => addFavorite(recipe.id)}>Add to Favorites</button>
            )}
          </li>
        ))}
      </ul>
    )}
  </div>

  );
};

export default RecipeList;