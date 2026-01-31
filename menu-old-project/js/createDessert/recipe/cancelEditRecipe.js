import { updateMenu } from "../../utils/storage.js";

export const cancelEditRecipe = (e) => {
  if (e.target.hasAttribute("data-cancel")) {
    const recipeItem = e.target.closest("li");
    const formEditMenu = recipeItem.querySelector(".form-edit-menu");
    formEditMenu.remove();
    updateMenu();
  }
};
