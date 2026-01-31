import {
  getMenuData,
  setMenuData,
  updateMenu,
  generateUniqueNumber,
} from "../../utils/storage.js";
import { dessertForm } from "../../utils/domRef.js";

export const addRecipe = (e) => {
  e.preventDefault();
  if (!e.target.elements.nameRecipe) return;
  const { nameRecipe } = e.target.elements;

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
