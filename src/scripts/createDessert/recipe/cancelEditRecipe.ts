import { updateMenu } from "../../features/dessert";

export const cancelEditRecipe = (e: Event) => {
  const target = e.target as HTMLButtonElement;
  if (target.hasAttribute("data-cancel")) {
    const recipeItem = target.closest<HTMLLIElement>("li");
    if (!recipeItem) return;
    const formEditMenu =
      recipeItem.querySelector<HTMLFormElement>(".form-edit-menu");
    if (formEditMenu) {
      formEditMenu.remove();
    }
    updateMenu();
  }
};
