import type { Dessert } from "../types/types";
import { formFilter, listMenu, menuTitle } from "../dom/domRefListDesserts";
import { getDesserts } from "../utils/storage";
import Masonry from "masonry-layout";
import autoAnimate from "@formkit/auto-animate";

export const initMasonry = () => {
  const grid = document.querySelector<HTMLUListElement>(".list-menu-recepie");

  if (!grid) return;

  new Masonry(grid, {
    itemSelector: ".dessert-card",
    columnWidth: ".dessert-card",
    gutter: 15,
    fitWidth: true
  });
};

export const updateListMenu = (filtrData?: Dessert[]) => {
  const data = filtrData ?? getDesserts();
  if (!data || data.length === 0) {
    menuTitle.textContent = "Немає десертів у меню \u{1F370}";
    formFilter?.remove();
    renderListDessert([]);
    return;
  } else {
    menuTitle.textContent = "Меню";
  }
  renderListDessert(data);
  initMasonry()
};

const renderListDessert = (data: Dessert[]): void => {
  listMenu.innerHTML = "";
  listMenu.insertAdjacentHTML(
    "afterbegin",
    data
      .map(
        (item) => `
        <li class="dessert-card">
          <h1 class="dessert-card-title">${item.desertName}</h1>
          <ul class="recipe-list">
            ${item.recipeGroup
            .map(
              (recipe) => `
                <li class="recipe">
                  <h2 class="recipe-title">${recipe.recipeName}</h2>
                  <p class="recipe-subtitle">Інгредієнти:</p>
                  <ul class="ingredients-list">
                    ${recipe.recipeIngredienst
                  .map(
                    (ing) =>
                      `<li class="ingredients-list-item"><p class="ingredients-list-text">${ing.ingredients} - ${ing.numb}</p></li>`,
                  )
                  .join("")}
                  </ul>
                </li>
              `,
            )
            .join("")}
          </ul>
          ${!item.notes
            ? `<p class="describe-dessert"><strong>Нотатки:</strong> Немає нотаток</p>`
            : `<p class="describe-dessert"><strong>Нотатки:</strong> ${item.notes}</p>`
          }
          <div class="wrap-btn-dessert-card">
          <button type="button" class="btn-dessert-card" data-notes="notes" id=${item.index
          }><svg class="icon-notes" width="15" height="15">
  <use href="./img/icons.svg#icon-notes"></use>
</svg></button>
          <button type="button" class="btn-dessert-card" data-delete="delete" id=${item.index
          }><svg class="icon-delete" width="15" height="15">
  <use href="./img/icons.svg#icon-delete"></use>
</svg></button>
          </div>
        </li>
      `,
      )
      .join(""),
  );
  document.querySelectorAll<HTMLElement>(".dessert-card").forEach((el) => autoAnimate(el));
};
