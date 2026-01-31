import {
  setMenuData,
  updateMenu,
  generateUniqueNumber,
} from "../../utils/storage.js"; 
import { dessertForm, mainTitleEl } from "../../utils/domRefMain.ts";
import type { Dessert } from "../../types/types.ts";

export const addDessert = (e: SubmitEvent) => {
  e.preventDefault();
  const target = e.currentTarget as HTMLFormElement;
  if (!target?.desert.value) return;
  const desert = target.elements.namedItem("desert") as HTMLInputElement | null;
  if (!desert) return;

  const menu: Dessert = {
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
