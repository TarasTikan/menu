import { updateMenu } from "../../features/dessert.js";
import { getMenuData, setMenuData, findById } from "../../utils/storage.js";

export const saveEditedIngredient = (e: Event) => {
  e.preventDefault();
  const target = e.target as HTMLFormElement;
  if (target.name === "edit-ingredients") {
    const numb = target.elements.namedItem("numb") as HTMLInputElement;
    const ingredients = target.elements.namedItem(
      "ingredients",
    ) as HTMLInputElement;
    const ingredientId = Number(target.id);
    const data = getMenuData();
    if (!data) return;
    const indexRecipe: number = data.recipeGroup.findIndex((item) =>
      item.recipeIngredienst.some((ing) => ing.index === ingredientId),
    );
    if (indexRecipe === -1) return;
    const indexIngridient: number = findById(
      data.recipeGroup[indexRecipe].recipeIngredienst,
      ingredientId,
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
