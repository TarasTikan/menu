import { updateMenu } from "../../features/dessert.js";
import {
  getMenuData,
  setMenuData,
  findById,
  generateUniqueNumber,
} from "../../utils/storage.js";

export const addIngredient = (e: Event) => {
  e.preventDefault();
  const target = e.target as HTMLFormElement; 
  if (!target) return;
  const ingredients = (target.elements.namedItem("ingredients") as HTMLInputElement);
  const numb = (target.elements.namedItem("numb") as HTMLInputElement);
   if (!ingredients || !numb) return;
  const data = getMenuData();
  if (!data) return;
  const indexRecipe = findById(data.recipeGroup, Number(target.id));
  if (indexRecipe === -1) return;
  data.recipeGroup[indexRecipe].recipeIngredienst.push({
    index: generateUniqueNumber(),
    ingredients: ingredients.value,
    numb: numb.value,
  });
  setMenuData(data);
  updateMenu();
};
