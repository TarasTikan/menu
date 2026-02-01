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
  if (!target) return;
  const desert = (target.elements.namedItem("dessertName") as HTMLInputElement).value;
  if (!desert) return;

  const menu: Dessert = {
    desertName: desert,
    index: generateUniqueNumber(),
    recipeGroup: [],
  };
  setMenuData(menu);
  updateMenu();
  (target.elements.namedItem("dessertName") as HTMLInputElement).value = "";
  dessertForm.classList.add("hidden");
  mainTitleEl.classList.add("hidden");
};
