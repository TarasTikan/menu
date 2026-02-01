import {
  getMenuData,
  setMenuData,
  generateUniqueNumber,
} from "../../utils/storage.js";
import { dessertForm } from "../../dom/domRefMain.ts";
import { updateMenu } from "../../features/dessert.ts";

export const addRecipe = (e: Event) => {
  e.preventDefault();
  const target = e.target as HTMLFormElement;
  if (!target) return;
  const nameRecipe  = (target.elements.namedItem("nameRecipe") as HTMLInputElement);

  const data = getMenuData();
  if (!data) return;

  data.recipeGroup.push({
    recipeName: nameRecipe.value,
    index: generateUniqueNumber(),
    recipeIngredienst: [],
  });

  setMenuData(data);
  updateMenu();
  nameRecipe.value = "";
  dessertForm.classList.add("hidden");
};
