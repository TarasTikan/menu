import {
  mainTitleEl,
  btnAddDessertEl,
  btnFinalizeDessertEl,
  dessertContainer,
  recipeContainer,
  listMenu,
  menuTitle,
  formFilter,
} from "./domRef.js";

export const setMenuData = (data) =>
  localStorage.setItem("menu", JSON.stringify(data));

export const getMenuData = () => {
  try {
    return JSON.parse(localStorage.getItem("menu"));
  } catch {
    return null;
  }
};

export const generateUniqueNumber = () => {
  return Date.now() + Math.floor(Math.random() * 1000);
};

export const updateMenu = () => {
  const data = getMenuData();
  if (!data) {
    return btnAddDessertEl.classList.remove("hidden");
  }
  mainTitleEl.classList.add("hidden");

  renderFormRecepie(data);
  renderListIngredients(data);
  if (!data.recipeGroup[0]) return;
  if (!data.recipeGroup[0].recipeIngredienst[0]) return;
  btnFinalizeDessertEl.classList.remove("hidden");
};

export const findById = (data, id) =>
  data.findIndex((item) => item.index === Number(id));

export const getDesserts = () =>
  JSON.parse(localStorage.getItem("listMenuDesert"));

export const setDesserts = (data) =>
  localStorage.setItem("listMenuDesert", JSON.stringify(data));

export const findDessert = (data, id) =>
  data.find((item) => item.index === Number(id));

export const updateListMenu = (filtrData) => {
  const data = filtrData || getDesserts();
  if (!data || data.length === 0) {
    menuTitle.textContent = "Немає десертів у меню \u{1F370}";
    formFilter.remove();
  } else {
    menuTitle.textContent = "Меню";
  }
  renderListDessert(data);
};

const renderListDessert = (data) => {
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
                          `<li class="ingredients-list-item"><p class="ingredients-list-text">${ing.ingredients} - ${ing.numb}</p></li>`
                      )
                      .join("")}
                  </ul>
                </li>
              `
              )
              .join("")}
          </ul>
          ${
            !item.notes
              ? `<p class="describe-dessert"><strong>Нотатки:</strong> Немає нотаток</p>`
              : `<p class="describe-dessert"><strong>Нотатки:</strong> ${item.notes}</p>`
          }
          <div class="wrap-btn">
          <button type="button" class="btn-dessert" data-notes="notes" id=${
            item.index
          }><svg class="icon-notes" width="15" height="15">
  <use href="./img/icons.svg#icon-notes"></use>
</svg></button>
          <button type="button" class="btn-dessert" data-delete="delete" id=${
            item.index
          }><svg class="icon-delete" width="15" height="15">
  <use href="./img/icons.svg#icon-delete"></use>
</svg></button>
          </div>
        </li>
      `
      )
      .join("")
  );
};

const renderFormRecepie = (data) => {
  dessertContainer.innerHTML = "";
  return dessertContainer.insertAdjacentHTML(
    "afterbegin",
    `
            <h2 class="title-dessert">${data.desertName}</h2>
            <div class="wrap-btn">
            <button type="button" class="btn-create-recepie" data-add="add" id=${
              data.index
            }>Додати до десерту рецепт</button>
            <button type="button" class="btn-create-recepie" data-edit="edit" id=${
              data.index
            }><svg class="icon-pencil" width="15" height="15">
  <use href="./img/icons.svg#icon-pencil"></use>
</svg></button>
<button type="button" class="btn-create-recepie" data-delete="delete" id=${
      data.index
    }><svg class="icon-delete" width="15" height="15">
  <use href="./img/icons.svg#icon-delete"></use>
</svg></button>
            </div>
            <form class="form-title-recepie hidden" id=${data.index}>
            <label class="label-title-recepie">
              Назва рецепту
              <input type="text" name="nameRecipe" class="input-title-recepie" required/>
            </label>
            <button type="submit" class="btn-dessert" id=${
              data.index
            }>Додати рецепт</button>
          </form>
          <p class="sub-title-recepie ${
            data.recipeGroup.length || "hidden"
          }">Технології приготування ${data.desertName}</p>
          `
  );
};

const renderListIngredients = (data) => {
  recipeContainer.innerHTML = "";
  recipeContainer.insertAdjacentHTML(
    "afterbegin",
    data.recipeGroup
      .map(
        (item) => `<li class="recepie-item">
      <div class="wrap-recepie">
       <h1 class="title-recepie">${item.recipeName}</h1>
      
      <div class="wrap-btn">
            <button type="button" class="btn-dessert" data-add="add" id=${
              item.index
            }>Додати інгредієнт</button>
             <button type="button" class="btn-dessert" data-edit="edit" id=${
               item.index
             }><svg class="icon-pencil" width="15" height="15">
  <use href="./img/icons.svg#icon-pencil"></use>
</svg></button>

<button type="button" class="btn-dessert" data-delete="delete" id=${
          item.index
        }><svg class="icon-delete" width="15" height="15">
  <use href="./img/icons.svg#icon-delete"></use>
</svg></button>
      </div>
      <div class="wrap-title-ingredients ${
        item.recipeIngredienst.length > 0 ? "" : "hidden"
      }"><h2 class="title-ingredients">Інгредієнти:</h2><button type="button" class="visible-btn">Показати</button> </div>
      
               <form class="form-recepie-ingredients hidden" id=${item.index}>
                <label class="label-title-recepie">
              Інгредієнти:
              <input type="text" name="ingredients" class="input-title-recepie" required/>
            </label>

            <label class="label-title-recepie">
              Кількість г/ш в рецепті:
              <input type="text" name="numb" class="input-title-recepie" required/>
            </label>
            <button type="submit" class="btn-dessert">Додати інгредієнт</button>
          </form>
          <ul class="list-ingredients-recepie hidden">
          ${item.recipeIngredienst
            .map(
              (itemReciperIng) =>
                `<li class="list-ingredients-item"><p class="ingredients-text">${itemReciperIng.ingredients} — ${itemReciperIng.numb}</p><button type="button" class="btn-dessert" data-edit="edit" id=${itemReciperIng.index}><svg class="icon-pencil" width="15" height="15">
  <use href="./img/icons.svg#icon-pencil"></use>
</svg></button>
<button type="button" class="btn-dessert" data-deleteRe="delete" id=${itemReciperIng.index}><svg class="icon-delete" width="15" height="15">
  <use href="./img/icons.svg#icon-delete"></use>
</svg></button> </li>`
            )
            .join("")}
          </ul>
          </li>`
      )
      .join("")
  );
};
