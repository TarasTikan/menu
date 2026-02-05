import { setMenuData, generateUniqueNumber } from "../../utils/storage.js";
import { mainTitleEl } from "../../dom/domRefMain.ts";
import type { Dessert } from "../../types/types.ts";
import { updateMenu } from "../../features/dessert.ts";

export const addDessert = (e: Event) => {
  e.preventDefault();
  const form = (e.target as HTMLElement).closest<HTMLFormElement>(
    ".form-container-dessert",
  );
  if (!form) return;
  const desert = (form.elements.namedItem("dessertName") as HTMLInputElement)
    .value;
  if (!desert) return;

  const menu: Dessert = {
    desertName: desert,
    index: generateUniqueNumber(),
    recipeGroup: [],
  };
  setMenuData(menu);
  updateMenu();
  (form.elements.namedItem("dessertName") as HTMLInputElement).value = "";
  form.remove();
  mainTitleEl.classList.add("hidden");
};
