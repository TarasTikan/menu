import { getMenuData, findById } from "../../utils/storage.js";

export const showEditIngredientForm = (e: Event) => {
  const target = e.target as HTMLButtonElement;
  if (target.hasAttribute("data-edit")) {
    const data = getMenuData();
    if (!data) return;
    const indexRecipe = data.recipeGroup.findIndex((item) =>
      item.recipeIngredienst.some((ing) => ing.index === Number(target.id)),
    );
    if (indexRecipe === -1) return;
    const indexIngridient = findById(
      data.recipeGroup[indexRecipe].recipeIngredienst,
      Number(target.id),
    );
    if (indexIngridient === -1) return;
    const recipeItem = target.closest<HTMLLIElement>("li");
    if (!recipeItem) return;
    const itemIngredients =
      recipeItem.querySelector<HTMLParagraphElement>(".ingredients-text");
    const btnDeleteIngredient = recipeItem.querySelector<HTMLButtonElement>(
      "button[data-deleteRe='delete']",
    );
    if (!itemIngredients || !btnDeleteIngredient) return;
    itemIngredients.remove();
    recipeItem.insertAdjacentHTML(
      "afterbegin",
      `<form class="form-edit-ingredients" name="edit-ingredients" id=${data.recipeGroup[indexRecipe].recipeIngredienst[indexIngridient].index}>
 <label class="label-edit-ingredients">
 Ингредиенты:
 <input type="text" name="ingredients" class="input-edit-ingredients" value="${data.recipeGroup[indexRecipe].recipeIngredienst[indexIngridient].ingredients}" required/>
 </label>
  <label class="label-edit-ingredients">
 к-сть:
 <input type="text" name="numb" class="input-edit-ingredients input-edit-numb" value="${data.recipeGroup[indexRecipe].recipeIngredienst[indexIngridient].numb}" required/>
 </label>
 <button type="submit" class="btn-dessert">Зберегти</button>
 </form>`,
    );
    target.remove();
    btnDeleteIngredient.remove();
  }
};
