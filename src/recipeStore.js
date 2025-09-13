import { create } from 'zustand';

// Zustand store for managing recipes
const useRecipeStore = create((set) => ({
  recipes: [],  // initial state (empty array)

  // Action: add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  // Action: replace all recipes
  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;