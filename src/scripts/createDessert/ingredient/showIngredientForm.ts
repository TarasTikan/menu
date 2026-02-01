export const showIngredientForm = (e: Event) => {
  const target = e.target as HTMLButtonElement;
  if (target.hasAttribute("data-add")) {
    const liElement = target.closest<HTMLLIElement>("li");
    if (!liElement) return;
    const formRecepieIngredients = liElement.querySelector<HTMLFormElement>(
      ".form-recepie-ingredients"
    );
    if (formRecepieIngredients) {
      formRecepieIngredients.classList.toggle("hidden");
      target.textContent = formRecepieIngredients.classList.contains("hidden")
        ? "Додати до інгредієнт"
        : "Приховати форму інгредієнту";
    }
  }
};
