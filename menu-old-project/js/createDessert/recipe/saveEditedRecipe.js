import {
  getMenuData,
  setMenuData,
  updateMenu,
  findById,
} from "../../utils/storage.js";

export const saveEditedRecipe = (e) => {
  e.preventDefault();
  if (e.target.name !== "edit-menu") return;
  const { recipeName } = e.target.elements;
  const data = getMenuData();
  if (!data) return;
  const indexRecipe = findById(data.recipeGroup, Number(e.target.id));
  if (indexRecipe === -1) return;
  data.recipeGroup[indexRecipe].recipeName = recipeName.value;
  setMenuData(data);
  updateMenu();
};
