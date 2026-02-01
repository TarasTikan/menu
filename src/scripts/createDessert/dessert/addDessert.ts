import {
  setMenuData,
  generateUniqueNumber,
} from "../../utils/storage.js"; 
import { dessertForm, mainTitleEl } from "../../dom/domRefMain.ts";
import type { Dessert } from "../../types/types.ts";
import { updateMenu } from "../../features/dessert.ts";

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
