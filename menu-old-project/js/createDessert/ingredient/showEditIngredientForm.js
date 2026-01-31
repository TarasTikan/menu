import { getMenuData, findById } from "../../utils/storage.js";

export const showEditIngredientForm = (e) => {
  if (e.target.hasAttribute("data-edit")) {
    const data = getMenuData();
    const indexRecipe = data.recipeGroup.findIndex((item) =>
      item.recipeIngredienst.some((ing) => ing.index === Number(e.target.id))
    );
    if (indexRecipe === -1) return;
    const indexIngridient = findById(
      data.recipeGroup[indexRecipe].recipeIngredienst,
      Number(e.target.id)
    );
    if (indexIngridient === -1) return;
    const recipeItem = e.target.closest("li");
    const itemIngredients = recipeItem.querySelector(".ingredients-text");
    const btnDeleteIngredient = recipeItem.querySelector(
      "button[data-deleteRe='delete']"
    );
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
 </form>`
    );
    e.target.remove();
    btnDeleteIngredient.remove();
  }
};
