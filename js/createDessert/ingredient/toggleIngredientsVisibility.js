export const toggleIngredientsVisibility = (e) => {
  if (e.target.classList.contains("visible-btn")) {
    const recipeItem = e.target.closest("li");
    if (!recipeItem) return;
    const itemIngredients = recipeItem.querySelector(
      ".list-ingredients-recepie"
    );

    if (itemIngredients) {
      itemIngredients.classList.toggle("hidden");
      e.target.textContent = itemIngredients.classList.contains("hidden")
        ? "Показати"
        : "Приховати";
    }
  }
};
