import { dessertForm } from "../../utils/domRef.js";

export const showRecipeForm = (e) => {
  if (e.target.hasAttribute("data-add")) {
    const formIngredients = document.querySelector(".form-title-recepie");
    if (formIngredients) {
      formIngredients.classList.toggle("hidden");
      e.target.textContent = formIngredients.classList.contains("hidden")
        ? "Додати до десерту рецепт"
        : "Приховати форму рецепту";
    }
    dessertForm.classList.add("hidden");
  }
};
