import { containerForm, selectDesserts } from "../dom/domCalculatorDessert";
import type { Dessert } from "../types/types";
import { getDesserts } from "../utils/storage";

export const renderDessertsSelect = () => {
  const data = getDesserts() || [];
  if (data.length === 0) {
    return selectDesserts.insertAdjacentHTML(
      "afterbegin",
      `<option value="Рецептів не знайдено">Рецептів не знайдено</option>`,
    );
  }
  selectDesserts.insertAdjacentHTML(
    "afterbegin",
    data
      .map(
        (item) =>
          `<option value="${item.diametrDessert}" id="${item.index}">${item.desertName}, діаметр рецепту: ${item.diametrDessert} см </option>`,
      )
      .join(""),
  );
};

export const renderCardUpdate = (data: Dessert) => {
  containerForm.innerHTML = ''
  containerForm.insertAdjacentHTML(
    "afterbegin",
    `
        <div class="dessert-card">
          <h1 class="dessert-card-title">${data.desertName}</h1>
          <p class="dessert-diametr-text">Діаметр форми у рецепті: <strong>${data.diametrDessert} см </strong></p>
          <ul class="recipe-list">
            ${data.recipeGroup
              .map(
                (recipe) => `
                <li class="recipe">
                  <h2 class="recipe-title">${recipe.recipeName}</h2>
                  <p class="recipe-subtitle">Інгредієнти:</p>
                  <ul class="ingredients-list">
                    ${recipe.recipeIngredienst
                      .map(
                        (ing) =>
                          `<li class="ingredients-list-item"><p class="ingredients-list-text">${ing.ingredients} - ${ing.numb} г.</p></li>`,
                      )
                      .join("")}
                  </ul>
                </li>
              `,
              )
              .join("")}
          </ul>
          ${
            !data.notes
              ? `<p class="describe-dessert"><strong>Нотатки:</strong> Немає нотаток</p>`
              : `<p class="describe-dessert"><strong>Нотатки:</strong> ${data.notes}</p>`
          }
        </div>
      `,
  );
};
