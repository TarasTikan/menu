import { dessertForm } from "../../utils/domRefMain.ts";

export const showRecipeForm = (e: Event) => {
  if ((e.target as HTMLElement).hasAttribute("data-add")) {
    const formIngredients = document.querySelector<HTMLFormElement>(".form-recepie");
    if (formIngredients) {
      formIngredients.classList.toggle("hidden");
      (e.target as HTMLElement).textContent = formIngredients.classList.contains("hidden")
        ? "Додати до десерту рецепт"
        : "Приховати форму рецепту";
    }
    dessertForm.classList.add("hidden");
  }
};
