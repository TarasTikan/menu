import { setMenuData, updateMenu, generateUniqueNumber } from "../utils/storage.js";
import { dessertForm, mainTitleEl } from "../utils/domRef.js";

export const addDessert = (e) => {
  e.preventDefault();
  if (!e.currentTarget.desert.value) return;
  const { desert } = e.currentTarget.elements;

  const menu = {
    desertName: desert.value,
    index: generateUniqueNumber(),
    recipeGroup: [],
  };
  setMenuData(menu);
  updateMenu();
  desert.value = "";
  dessertForm.classList.add("hidden");
  mainTitleEl.classList.add("hidden");
};