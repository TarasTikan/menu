export const showIngredientForm = (e) => {
  if (e.target.hasAttribute("data-add")) {
    const liElement = e.target.closest("li");
    const formRecepieIngredients = liElement.querySelector(
      ".form-recepie-ingredients"
    );
    if (formRecepieIngredients) {
      formRecepieIngredients.classList.toggle("hidden");
      e.target.textContent = formRecepieIngredients.classList.contains("hidden")
        ? "Додати до інгредієнт"
        : "Приховати форму інгредієнту";
    }
  }
};
