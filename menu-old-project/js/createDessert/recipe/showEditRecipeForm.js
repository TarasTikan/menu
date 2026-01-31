import { getMenuData, findById } from "../../utils/storage.js";

export const showEditRecipeForm = (e) => {
  if (e.target.hasAttribute("data-edit")) {
    const data = getMenuData();
    const indexRecipe = findById(data.recipeGroup, Number(e.target.id));
    if (indexRecipe === -1) return;
    const recipeItem = e.target.closest("li");
    const titleRecepie = recipeItem.querySelector(".title-recepie");
    const btnDeleteRecepie = recipeItem.querySelector(
      "button[data-delete='delete']"
    );
    const btnAddRecepie = recipeItem.querySelector("button[data-add='add']");
    titleRecepie.remove();
    recipeItem.insertAdjacentHTML(
      "afterbegin",
      `<form class="form-edit-menu" name="edit-menu" id=${data.recipeGroup[indexRecipe].index}>
 <label class="label-edit-ingredients">
 Рецепт
 <input type="text" name="recipeName" class="input-title-recepie" value="${data.recipeGroup[indexRecipe].recipeName}" required/>
 </label>
  <div class="wrap-btn">
    <button type="submit" class="btn-dessert">Зберегти</button>
    <button type="button" class="btn-dessert" data-cancel="cancel">Скасувати</button>
  </div>
 </form>
 `
    );
    e.target.remove();
    btnDeleteRecepie.remove();
    btnAddRecepie.remove();
  }
};
