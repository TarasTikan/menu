import { btnFinalizeDessertEl } from "../../utils/domRefMain.ts";
import {
  getMenuData,
  setMenuData,
  updateMenu,
  findById,
} from "../../utils/storage.js";

export const deleteIngredient = (e: Event) => {
  const target = e.target as HTMLButtonElement;
  if (target.hasAttribute("data-deletere")) {
    const data = getMenuData();
    if (!data) return;
    const ingredientId = Number(target.id);
    const recipeIndex: number = data.recipeGroup.findIndex((item) =>
      item.recipeIngredienst.some((ing) => ing.index === ingredientId)
    );
    if (recipeIndex === -1) return;
    const ingredientIndex: number = findById(
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
