import { getMenuData, setMenuData, updateMenu } from "../../utils/storage.js";
import { btnFinalizeDessertEl } from "../../utils/domRefMain.ts";

export const deleteRecipe = (e: Event) => {
  const target = e.target as HTMLButtonElement
  if (target.hasAttribute("data-delete")) {
    const data = getMenuData();
    if (!data) return;
    data.recipeGroup = data.recipeGroup.filter(
      (item) => item.index !== Number(target.id)
    );
    setMenuData(data);
    btnFinalizeDessertEl.classList.add("hidden");
    updateMenu();
  }
};
