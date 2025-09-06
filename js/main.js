import { mainTitleEl, dessertForm, dessertContainer, recipeContainer, btnAddDessertEl, btnFinalizeDessertEl } from './utils/domRef.js';
import { showDessertForm } from './dessert/showDessertForm.js';
import { deleteDessert } from './dessert/deleteDessert.js';
import { addDessert } from './dessert/addDessert.js';
import { showEditDessertForm } from './dessert/showEditDessertForm.js';
import { cancelEditDessert } from './dessert/cancelEditDessert.js';
import {saveEditedDessert} from './dessert/saveEditedDessert.js';

import { setMenuData, getMenuData, updateMenu, generateUniqueNumber, findById } from './utils/storage.js';





const showRecipeForm = (e) => {
  if (e.target.hasAttribute("data-add")) {
    const formIngredients = document.querySelector(".form-title-recepie");
    if (formIngredients) {
      formIngredients.classList.toggle("hidden");
      e.target.textContent = formIngredients.classList.contains("hidden")
        ? "Додати до десерту рецепт"
        : "Приховати форму рецепту";
    }
    dessertForm.classList.add("hidden");
  }
};

const deleteRecipe = (e) => {
  if (e.target.hasAttribute("data-delete")) {
    const data = getMenuData();
    if (!data) return;
    data.recipeGroup = data.recipeGroup.filter((item) => item.index !== Number(e.target.id));
    setMenuData(data);
    btnFinalizeDessertEl.classList.add("hidden");
    updateMenu();
  }
};

const addRecipe = (e) => {
  e.preventDefault();
  if (!e.target.elements.nameRecipe) return;
  const { nameRecipe } = e.target.elements;

  const data = getMenuData();
  if (!data) return;

  data.recipeGroup.push({
    recipeName: nameRecipe.value,
    index: generateUniqueNumber(),
    recipeIngredienst: [],
  });

  setMenuData(data);
  updateMenu();
  nameRecipe.value = "";
  dessertForm.classList.add("hidden");
};


const showEditRecipeForm = (e) => {
  if (e.target.hasAttribute("data-edit")) {
    const data = getMenuData();
    const indexRecipe = findById(data.recipeGroup, Number(e.target.id))
    if (indexRecipe === -1) return;
    const recipeItem = e.target.closest("li");
    const titleRecepie = recipeItem.querySelector(".title-recepie");
    const btnDeleteRecepie = recipeItem.querySelector("button[data-delete='delete']");
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

const saveEditedRecipe = (e) => {
  e.preventDefault();
  if (e.target.name !== "edit-menu") return;
  const { recipeName } = e.target.elements;
  const data = getMenuData();
  if (!data) return;
  const indexRecipe = findById(data.recipeGroup, Number(e.target.id))
  if (indexRecipe === -1) return;
  data.recipeGroup[indexRecipe].recipeName = recipeName.value;
  setMenuData(data);
  updateMenu();
};

const cancelEditRecipe = (e) => {
  if (e.target.hasAttribute("data-cancel")) {
    const recipeItem = e.target.closest("li");
    const formEditMenu = recipeItem.querySelector(".form-edit-menu");
    formEditMenu.remove();
    updateMenu();
  }
};



const showIngredientForm = (e) => {
  if (e.target.hasAttribute("data-add")) {
    const liElement = e.target.closest("li");
    const formRecepieIngredients = liElement.querySelector(
      ".form-recepie-ingredients"
    );
    if (formRecepieIngredients) {
      formRecepieIngredients.classList.toggle("hidden");
      e.target.textContent = formRecepieIngredients.classList.contains("hidden")
        ? "Додати до інгредієнт"
        : "Приховати форму інгредієнту";
    }
  }
};


const deleteIngredient = (e) => {
  if (e.target.hasAttribute("data-deleteRe")) {
    const data = getMenuData();
    if (!data) return;
    const ingredientId = Number(e.target.id);
    const recipeIndex = data.recipeGroup.findIndex((item) =>
      item.recipeIngredienst.some((ing) => ing.index === ingredientId)
    );
    if (recipeIndex === -1) return;
    const ingredientIndex = data.recipeGroup[recipeIndex].recipeIngredienst.findIndex((ing) => ing.index === ingredientId);
    if (ingredientIndex === -1) return;
    data.recipeGroup[recipeIndex].recipeIngredienst.splice(ingredientIndex, 1);
    setMenuData(data);
    btnFinalizeDessertEl.classList.add("hidden");
    updateMenu();
  }
};

const addIngredient = (e) => {
  e.preventDefault();
  if (!e.target.elements.ingredients || !e.target.elements.numb) return;
  const { ingredients, numb } = e.target.elements;
  const data = getMenuData();
  if (!data) return;
  const indexRecipe = findById(data.recipeGroup, Number(e.target.id))
  if (indexRecipe === -1) return;
  data.recipeGroup[indexRecipe].recipeIngredienst.push({
    index: generateUniqueNumber(),
    ingredients: ingredients.value || null,
    numb: numb.value,
  });
  setMenuData(data);
  updateMenu();
};


const toggleIngredientsVisibility = (e) => {
  if (e.target.classList.contains("visible-btn")) {
    const recipeItem = e.target.closest("li");
    if (!recipeItem) return;
    const itemIngredients = recipeItem.querySelector(
      ".list-ingredients-recepie"
    );

    if (itemIngredients) {
      itemIngredients.classList.toggle("hidden");
      e.target.textContent = itemIngredients.classList.contains("hidden")
        ? "Показати"
        : "Приховати";
    }
  }
};

const showEditIngredientForm = (e) => {
  if (e.target.hasAttribute("data-edit")) {
    const data = getMenuData();
    const indexRecipe = data.recipeGroup.findIndex((item) =>
      item.recipeIngredienst.some((ing) => ing.index === Number(e.target.id))
    );
    if (indexRecipe === -1) return;
    const indexIngridient = data.recipeGroup[
      indexRecipe
    ].recipeIngredienst.findIndex((ing) => ing.index === Number(e.target.id));
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

const saveEditedIngredient = (e) => {
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
    const indexIngridient = findById(data.recipeGroup[indexRecipe].recipeIngredienst, ingredientId)
    if (indexIngridient === -1) return;
    data.recipeGroup[indexRecipe].recipeIngredienst[indexIngridient].ingredients = ingredients.value;
    data.recipeGroup[indexRecipe].recipeIngredienst[indexIngridient].numb = numb.value;
    setMenuData(data);
    updateMenu();
  }
};




const finalizeDessert = (e) => {
  const data = getMenuData();
  if (!data) return;
  let dataListMenu = JSON.parse(localStorage.getItem("listMenuDesert"));
  if (!dataListMenu) {
    dataListMenu = [];
  }

  dataListMenu.push(data);
  localStorage.setItem("listMenuDesert", JSON.stringify(dataListMenu));
  localStorage.removeItem("menu");
  dessertContainer.innerHTML = "";
  recipeContainer.innerHTML = "";
  btnFinalizeDessertEl.classList.add("hidden");
  btnAddDessertEl.classList.remove("hidden");
  mainTitleEl.classList.remove("hidden");
  Toastify({
    text: "Десерт успішно створено",
    className: "info",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
};








btnAddDessertEl.addEventListener("click", showDessertForm); // створює форму для додавання десерту
dessertContainer.addEventListener("click", deleteDessert); // видалення десерту
dessertForm.addEventListener("submit", addDessert); // створення десерту
dessertContainer.addEventListener("click", showEditDessertForm); // створює форму для редагування десерту
dessertContainer.addEventListener("submit", saveEditedDessert); // збереження відредагованого десерту
dessertContainer.addEventListener("click", cancelEditDessert); // скасування відредагованого рецепту

dessertContainer.addEventListener("click", showRecipeForm); // створює форму для додавання рецепта
recipeContainer.addEventListener("click", deleteRecipe); // видалення рецепта
dessertContainer.addEventListener("submit", addRecipe); // створення рецепта
recipeContainer.addEventListener("click", showEditRecipeForm); // створює форму для редагування рецепта
recipeContainer.addEventListener("submit", saveEditedRecipe); // збереження відредагованого рецепту
recipeContainer.addEventListener("click", cancelEditRecipe); // скасування відредагованого рецепту


recipeContainer.addEventListener("click", showIngredientForm); // створює форму для додавання інгредієнтів
recipeContainer.addEventListener("click", deleteIngredient); // видалення інгредієнта
recipeContainer.addEventListener("submit", addIngredient); // Створеняя інгредієнта
recipeContainer.addEventListener("click", toggleIngredientsVisibility); // показує/приховує інгредієнти
recipeContainer.addEventListener("click", showEditIngredientForm); // cтворення форми редагування інгредієнта
recipeContainer.addEventListener("submit", saveEditedIngredient); // збереження відредагованого інгредієнта

btnFinalizeDessertEl.addEventListener("click", finalizeDessert); // фінальна стадія десерту

updateMenu(); // оновлення рендеру
