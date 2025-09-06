import { btnFinalizeDessertEl } from "../../utils/domRef.js";
import {
  getMenuData,
  setMenuData,
  updateMenu,
  findById,
} from "../../utils/storage.js";

export const deleteIngredient = (e) => {
  if (e.target.hasAttribute("data-deleteRe")) {
    const data = getMenuData();
    if (!data) return;
    const ingredientId = Number(e.target.id);
    const recipeIndex = data.recipeGroup.findIndex((item) =>
      item.recipeIngredienst.some((ing) => ing.index === ingredientId)
    );
    if (recipeIndex === -1) return;
    const ingredientIndex = findById(
      data.recipeGroup[recipeIndex].recipeIngredienst,
      ingredientId
    );
    if (ingredientIndex === -1) return;
    data.recipeGroup[recipeIndex].recipeIngredienst.splice(ingredientIndex, 1);
    setMenuData(data);
    btnFinalizeDessertEl.classList.add("hidden");
    updateMenu();
  }
};
