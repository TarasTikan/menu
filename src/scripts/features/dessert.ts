import {
  btnAddDessertEl,
  btnAddDiametrDessertEl,
  dessertContainer,
  mainTitleEl,
  recipeContainer,
} from "../dom/domRefMain";
import type { Dessert } from "../types/types";
import { getMenuData } from "../utils/storage";
import { animateDessertSelector } from "../utils/animate";

export const renderFormRecepie = (data: Dessert) => {
  dessertContainer.innerHTML = "";
  return dessertContainer.insertAdjacentHTML(
    "afterbegin",
    `
            <h2 class="title-dessert">${data.desertName}</h2>
            <div class="wrap-btn">
            <button type="button" class="btn-create-recepie" data-add="add" id=${data.index
    }>Додати до десерту рецепт</button>
            <button type="button" class="btn-create-recepie" data-edit="edit" id=${data.index
    }><svg class="icon-pencil" width="15" height="15">
  <use href="/img/icons.svg#icon-pencil"></use>
</svg></button>
<button type="button" class="btn-create-recepie" data-delete="delete" id=${data.index
    }><svg class="icon-delete" width="15" height="15">
  <use href="/img/icons.svg#icon-delete"></use>
</svg></button>
            </div>
          <p class="sub-title-recepie ${data.recipeGroup.length || "hidden"
    }">Технології приготування ${data.desertName}</p>
          `,
  );
};

export const renderListIngredients = (data: Dessert) => {
  recipeContainer.innerHTML = "";
  recipeContainer.insertAdjacentHTML(
    "afterbegin",
    data.recipeGroup
      .map(
        (item) => `<li class="recepie-item">
      <div class="wrap-recepie">
       <h1 class="title-recepie">${item.recipeName}</h1>
      
      <div class="wrap-btn">
            <button type="button" class="btn-dessert" data-add="add" id=${item.index
          }>Додати до рецепту інгредієнт</button>
             <button type="button" class="btn-dessert" data-edit="edit" id=${item.index
          }><svg class="icon-pencil" width="15" height="15">
  <use href="/img/icons.svg#icon-pencil"></use>
</svg></button>

<button type="button" class="btn-dessert" data-delete="delete" id=${item.index
          }><svg class="icon-delete" width="15" height="15">
  <use href="/img/icons.svg#icon-delete"></use>
</svg></button>
      </div>
      <div class="wrap-title-ingredients ${item.recipeIngredienst.length > 0 ? "" : "hidden"
          }"><h2 class="title-ingredients">Інгредієнти:</h2><button type="button" class="visible-btn">Показати</button> </div>
          <ul class="list-ingredients-recepie hidden">
          ${item.recipeIngredienst
            .map(
              (itemReciperIng) =>
                `<li class="list-ingredients-item"><p class="ingredients-text">${itemReciperIng.ingredients} — ${itemReciperIng.numb}</p><button type="button" class="btn-dessert" data-edit="edit" id=${itemReciperIng.index}><svg class="icon-pencil" width="15" height="15">
  <use href="/img/icons.svg#icon-pencil"></use>
</svg></button>
<button type="button" class="btn-dessert" data-deleteRe="delete" id=${itemReciperIng.index}><svg class="icon-delete" width="15" height="15">
  <use href="/img/icons.svg#icon-delete"></use>
</svg></button> </li>`,
            )
            .join("")}
          </ul>
          </li>`,
      )
      .join(""),
  );
  animateDessertSelector()
};

export const updateMenu = (): void => {
  const data = getMenuData();
  if (!data) {
    return btnAddDessertEl.classList.remove("hidden");
  }
  mainTitleEl.classList.add("hidden");
  btnAddDessertEl.classList.add("hidden");
  renderFormRecepie(data);
  renderListIngredients(data);
  if (!data.recipeGroup[0]) return;
  if (!data.recipeGroup[0].recipeIngredienst[0]) return;
  btnAddDiametrDessertEl.classList.remove("hidden");
  animateDessertSelector()
};
