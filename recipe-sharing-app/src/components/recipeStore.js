import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  favorites: [],
  recommendations: [],
  filteredRecipes: [],

   // Actions for search and filtering
  setSearchTerm: (term) => set({ searchTerm: term }),
  setFilteredRecipes: (recipes) => set({ filteredRecipes: recipes }),

  
  // filterRecipes: () => set(state => ({
  //   filteredRecipes: state.recipes.filter(recipe =>
  //     recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
  //   )
  // })),

  // Actions for managing favorites
  addFavorite: (recipeId) => set((state) => ({
    favorites: [...state.favorites, recipeId],
  })),

  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId),
  })),

  // Generate recommendations (Mock logic based on favorites)
  generateRecommendations: () => set((state) => {
    const recommended = state.recipes.filter((recipe) =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),

  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  setRecipes: (recipes) => set({ recipes }),

  updateRecipe: (id, updatedRecipe) =>
  set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    ),
  })),

  deleteRecipe: (id) =>
  set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id),
  })),

}));

// export default useRecipeStore;