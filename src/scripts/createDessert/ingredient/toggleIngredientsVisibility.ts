export const toggleIngredientsVisibility = (e: Event) => {
  const target = e.target as HTMLButtonElement;
  if (target.classList.contains("visible-btn")) {
    const recipeItem = target.closest<HTMLLIElement>("li");
    if (!recipeItem) return;
    const itemIngredients = recipeItem.querySelector<HTMLUListElement>(
      ".list-ingredients-recepie"
    );

    if (itemIngredients) {
      itemIngredients.classList.toggle("hidden");
      target.textContent = itemIngredients.classList.contains("hidden")
        ? "Показати"
        : "Приховати";
    }
  }
};
