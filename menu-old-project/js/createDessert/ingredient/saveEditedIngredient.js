import {
  getMenuData,
  setMenuData,
  findById,
  updateMenu,
} from "../../utils/storage.js";

export const saveEditedIngredient = (e) => {
  e.preventDefault();
  if (e.target.name === "edit-ingredients") {
    const { ingredients, numb } = e.target.elements;
    const ingredientId = Number(e.target.id);
    const data = getMenuData();
    if (!data) return;
    const indexRecipe = data.recipeGroup.findIndex((item) =>
      item.recipeIngredienst.some((ing) => ing.index === ingredientId)
    );
    if (indexRecipe === -1) return;
    const indexIngridient = findById(
      data.recipeGroup[indexRecipe].recipeIngredienst,
      ingredientId
    );
    if (indexIngridient === -1) return;
    data.recipeGroup[indexRecipe].recipeIngredienst[
      indexIngridient
    ].ingredients = ingredients.value;
    data.recipeGroup[indexRecipe].recipeIngredienst[indexIngridient].numb =
      numb.value;
    setMenuData(data);
    updateMenu();
  }
};
