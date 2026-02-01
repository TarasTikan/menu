import { updateMenu } from "../../features/dessert.js";
import {
  getMenuData,
  setMenuData,
  findById,
} from "../../utils/storage.js";

export const saveEditedRecipe = (e: Event) => {
  e.preventDefault();
  const target = e.target as HTMLFormElement;
  if (target.name !== "edit-menu") return;
  const recipeName = (target.elements.namedItem("recipeName") as HTMLInputElement);
  const data = getMenuData();
  if (!data) return;
  const indexRecipe: number = findById(data.recipeGroup, Number(target.id));
  if (indexRecipe === -1) return;
  data.recipeGroup[indexRecipe].recipeName = recipeName.value;
  setMenuData(data);
  updateMenu();
};
