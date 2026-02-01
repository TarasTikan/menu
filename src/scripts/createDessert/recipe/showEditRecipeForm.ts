import { getMenuData, findById } from "../../utils/storage.js";

export const showEditRecipeForm = (e: Event) => {
  const target = e.target as HTMLButtonElement;
  if (target.hasAttribute("data-edit")) {
    const data = getMenuData();
    if (!data) return;
    const indexRecipe = findById(data.recipeGroup, Number(target.id));
    if (indexRecipe === -1) return;
    const recipeItem = target.closest<HTMLLIElement>("li");
    if (!recipeItem) return;
    const titleRecepie =
      recipeItem.querySelector<HTMLHeadingElement>(".title-recepie");
    const btnDeleteRecepie = recipeItem.querySelector<HTMLButtonElement>(
      "button[data-delete='delete']",
    );
    const btnAddRecepie = recipeItem.querySelector<HTMLButtonElement>(
      "button[data-add='add']",
    );
    if (!titleRecepie || !btnDeleteRecepie || !btnAddRecepie) return;
    titleRecepie.remove();
    recipeItem.insertAdjacentHTML(
      "afterbegin",
      `<form class="form-edit-menu" name="edit-menu" id=${data.recipeGroup[indexRecipe].index}>
 <label class="label-edit-recepie">
 Назва рецепту
 <input type="text" name="recipeName" class="input-title-recepie" value="${data.recipeGroup[indexRecipe].recipeName}" required/>
 </label>
  <div class="wrap-btn">
    <button type="submit" class="btn-dessert">Зберегти</button>
    <button type="button" class="btn-dessert" data-cancel="cancel">Скасувати</button>
  </div>
 </form>
 `,
    );
    target.remove();
    btnDeleteRecepie.remove();
    btnAddRecepie.remove();
  }
};
