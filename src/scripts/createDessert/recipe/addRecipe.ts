import {
  getMenuData,
  setMenuData,
  generateUniqueNumber,
} from "../../utils/storage.js";
import { updateMenu } from "../../features/dessert.ts";

export const addRecipe = (e: Event) => {
  e.preventDefault();
  const recepieForm = (e.target as HTMLElement).closest<HTMLFormElement>(
    ".form-recepie",
  );
  if (!recepieForm) return;
  const nameRecipe = recepieForm.elements.namedItem(
    "nameRecipe",
  ) as HTMLInputElement;

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
  recepieForm.classList.add("hidden");
};
