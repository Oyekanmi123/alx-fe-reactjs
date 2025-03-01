import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [{ id: 1, title: "Spaghetti Bolognese", ingredients: ["pasta", "tomato", "beef"], time: 30 },
  { id: 2, title: "Chicken Curry", ingredients: ["chicken", "curry powder", "coconut milk"], time: 40 },
  { id: 3, title: "Vegetable Stir Fry", ingredients: ["broccoli", "carrot", "soy sauce"], time: 15 }],

  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),

  filteredRecipes: [],
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

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

export default useRecipeStore;