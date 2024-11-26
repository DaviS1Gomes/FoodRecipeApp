export const fetchRecipes = async () => {
  try {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();
    return data.recipes;
  } catch (error) {
    console.error("Erro ao buscar receitas:", error);
    throw error;
  }
};
