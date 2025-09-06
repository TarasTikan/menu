import { getMenuData, setMenuData, updateMenu } from "../../utils/storage.js";
import { btnFinalizeDessertEl } from "../../utils/domRef.js";

export const deleteRecipe = (e) => {
  if (e.target.hasAttribute("data-delete")) {
    const data = getMenuData();
    if (!data) return;
    data.recipeGroup = data.recipeGroup.filter(
      (item) => item.index !== Number(e.target.id)
    );
    setMenuData(data);
    btnFinalizeDessertEl.classList.add("hidden");
    updateMenu();
  }
};
