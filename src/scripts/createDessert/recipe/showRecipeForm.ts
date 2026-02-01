import { dessertForm } from "../../dom/domRefMain.ts";

export const showRecipeForm = (e: Event) => {
  if ((e.target as HTMLElement).hasAttribute("data-add")) {
    const formRecipe = document.querySelector<HTMLFormElement>(".form-recepie");
    (formRecipe)
    if (formRecipe) {
      formRecipe.classList.toggle("hidden");
      (e.target as HTMLElement).textContent = formRecipe.classList.contains("hidden")
        ? "Додати до десерту рецепт"
        : "Приховати форму рецепту";
    }
    dessertForm.classList.add("hidden");
  }
};
