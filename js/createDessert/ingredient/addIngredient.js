import {
  getMenuData,
  setMenuData,
  updateMenu,
  findById,
  generateUniqueNumber,
} from "../../utils/storage.js";

export const addIngredient = (e) => {
  e.preventDefault();
  if (!e.target.elements.ingredients || !e.target.elements.numb) return;
  const { ingredients, numb } = e.target.elements;
  const data = getMenuData();
  if (!data) return;
  const indexRecipe = findById(data.recipeGroup, Number(e.target.id));
  if (indexRecipe === -1) return;
  data.recipeGroup[indexRecipe].recipeIngredienst.push({
    index: generateUniqueNumber(),
    ingredients: ingredients.value || null,
    numb: numb.value,
  });
  setMenuData(data);
  updateMenu();
};
