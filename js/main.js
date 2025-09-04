const mainTitle = document.querySelector(".menu-title-recepie");
const form = document.querySelector(".form-container");
const listMenu = document.querySelector(".list-menu");
const listIngredients = document.querySelector(".list-ingredients");
const btnAddDesert = document.querySelector(".add-btn-desert");
const btnSuccessfullyDesert = document.querySelector(
  ".btn-successfully-desert"
);

const generateUniqueNumber = () => {
  return Date.now() + Math.floor(Math.random() * 1000);
};
const getMenuData = () => JSON.parse(localStorage.getItem("menu"));
const setMenuData = (data) =>
  localStorage.setItem("menu", JSON.stringify(data));

const renderFormRecepie = (data) => {
  listMenu.innerHTML = "";
  return listMenu.insertAdjacentHTML(
    "afterbegin",
    `
            <h2 class="title-desert">${data.desertName}</h2>
            <div class="wrap-btn">
            <button type="button" class="btn-create-recepie" data-add="add" id=${data.index}>Додати до десерту рецепт</button>
            <button type="button" class="btn-create-recepie" data-edit="edit" id=${data.index}><svg class="icon-pencil" width="15" height="15">
  <use href="./img/icons.svg#icon-pencil"></use>
</svg></button>
<button type="button" class="btn-create-recepie" data-delete="delete" id=${data.index}><svg class="icon-delete" width="15" height="15">
  <use href="./img/icons.svg#icon-delete"></use>
</svg></button>
            </div>
            <form class="form-title-recepie hidden" id=${data.index}>
            <label class="label-title-recepie">
              Назва рецепту
              <input type="text" name="nameRecipe" class="input-title-recepie" required/>
            </label>
            <button type="submit" class="btn-dessert" id=${data.index}>Додати рецепт</button>
          </form>
          <p class="sub-title-recepie ${data.recipeGroup.length || "hidden"}">Технології приготування ${data.desertName}</p>
          `
  );
};
const renderListIngredients = (data) => {
  listIngredients.innerHTML = "";
  listIngredients.insertAdjacentHTML(
    "afterbegin",
    data.recipeGroup
      .map(
        (item) => `<li class="recepie-item">
      <div class="wrap-recepie">
       <h1 class="title-recepie">${item.recipeName}</h1>
      
      <div class="wrap-btn">
            <button type="button" class="btn-dessert" data-add="add" id=${item.index}>Додати інгредієнт</button>
             <button type="button" class="btn-dessert" data-edit="edit" id=${item.index}><svg class="icon-pencil" width="15" height="15">
  <use href="./img/icons.svg#icon-pencil"></use>
</svg></button>

<button type="button" class="btn-dessert" data-delete="delete" id=${item.index}><svg class="icon-delete" width="15" height="15">
  <use href="./img/icons.svg#icon-delete"></use>
</svg></button>
      </div>
      <div class="wrap-title-ingredients ${item.recipeIngredienst.length > 0 ? "" : "hidden"}"><h2 class="title-ingredients">Інгредієнти:</h2><button type="button" class="visible-btn">Показати</button> </div>
      
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

const updateMenu = () => {
  const data = getMenuData();

  if (!data) {
    return btnAddDesert.classList.remove("hidden");
  }
  mainTitle.classList.add("hidden");

  renderFormRecepie(data);
  renderListIngredients(data);
  if (!data.recipeGroup[0]) return;
  if (!data.recipeGroup[0].recipeIngredienst[0]) return;
  btnSuccessfullyDesert.classList.remove("hidden");
};

const createBtnFormMenu = (e) => {
  form.classList.remove("hidden");
  btnAddDesert.classList.add("hidden");
};

const createFormMenu = (e) => {
  if (e.target.hasAttribute("data-add")) {
    const formIngredients = document.querySelector(".form-title-recepie");
    if (formIngredients) {
      formIngredients.classList.toggle("hidden");
      e.target.textContent = formIngredients.classList.contains("hidden")
        ? "Додати до десерту рецепт"
        : "Приховати форму рецепту";
    }
    form.classList.add("hidden");
  }
};

const createMenu = (e) => {
  e.preventDefault();
  if (!e.currentTarget.desert.value) return;
  const { desert } = e.currentTarget.elements;

  const menu = {
    desertName: desert.value,
    index: generateUniqueNumber(),
    recipeGroup: [],
  };
  setMenuData(menu);
  updateMenu();
  desert.value = "";
  form.classList.add("hidden");
  mainTitle.classList.add("hidden");
};

const menuRemove = (e) => {
  if (e.target.hasAttribute("data-delete")) {
    localStorage.removeItem("menu");
    listMenu.innerHTML = "";
    listIngredients.innerHTML = "";
    btnAddDesert.classList.remove("hidden");
    btnSuccessfullyDesert.classList.add("hidden");
    mainTitle.classList.remove("hidden");
  }
};

const formReceptMenu = (e) => {
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
  form.classList.add("hidden");
};

const createFormIngredients = (e) => {
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

const deleteForRecepieMenu = (e) => {
  if (e.target.hasAttribute("data-delete")) {
    const data = getMenuData();
    if (!data) return;
    const indexRecipe = data.recipeGroup.findIndex(
      (item) => item.index === Number(e.target.id)
    );
    if (indexRecipe === -1) return;
    data.recipeGroup.splice(indexRecipe, 1);
    setMenuData(data);

    btnSuccessfullyDesert.classList.add("hidden");
    updateMenu();
  }
};

const deleteIngredientsRecepie = (e) => {
  if (e.target.hasAttribute("data-deleteRe")) {
    const data = getMenuData();
    if (!data) return;
    const indexRecipe = data.recipeGroup.findIndex((item) =>
      item.recipeIngredienst.some((ing) => ing.index === Number(e.target.id))
    );
    if (indexRecipe === -1) return;
    const indexIngridient = data.recipeGroup[
      indexRecipe
    ].recipeIngredienst.findIndex((ing) => ing.index === Number(e.target.id));
    if (indexIngridient === -1) return;
    data.recipeGroup[indexRecipe].recipeIngredienst.splice(indexIngridient, 1);
    setMenuData(data);
    btnSuccessfullyDesert.classList.add("hidden");
    updateMenu();
  }
};

const successfullyDesert = (e) => {
  const data = getMenuData();
  if (!data) return;
  let dataListMenu = JSON.parse(localStorage.getItem("listMenuDesert"));
  if (!dataListMenu) {
    dataListMenu = [];
  }

  dataListMenu.push(data);
  localStorage.setItem("listMenuDesert", JSON.stringify(dataListMenu));
  localStorage.removeItem("menu");
  listMenu.innerHTML = "";
  listIngredients.innerHTML = "";
  btnSuccessfullyDesert.classList.add("hidden");
  btnAddDesert.classList.remove("hidden");
  mainTitle.classList.remove("hidden");
  Toastify({
    text: "Десерт успішно створено",
    className: "info",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
};

const visibleIngredients = (e) => {
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

const createEditFormIngredients = (e) => {
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

const saveEditFormIngredients = (e) => {
  e.preventDefault();
  if (e.target.name === "edit-ingredients") {
    const { ingredients, numb } = e.target.elements;
    const data = getMenuData();
    if (!data) return;
    const indexRecipe = data.recipeGroup.findIndex((item) =>
      item.recipeIngredienst.some((ing) => ing.index === Number(e.target.id))
    );
    if (indexRecipe === -1) return;
    const indexIngridient = data.recipeGroup[
      indexRecipe
    ].recipeIngredienst.findIndex((ing) => ing.index === Number(e.target.id));
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

const createFormEditMenu = (e) => {
  if (e.target.hasAttribute("data-edit")) {
    const data = getMenuData();
    const indexRecipe = data.recipeGroup.findIndex(
      (item) => item.index === Number(e.target.id)
    );
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

const formReceptIngrediensMenu = (e) => {
  e.preventDefault();
  if (!e.target.elements.ingredients || !e.target.elements.numb) return;
  const { ingredients, numb } = e.target.elements;
  const data = getMenuData();
  if (!data) return;
  const indexRecipe = data.recipeGroup.findIndex(
    (item) => item.index === Number(e.target.id)
  );
  if (indexRecipe === -1) return;
  data.recipeGroup[indexRecipe].recipeIngredienst.push({
    index: generateUniqueNumber(),
    ingredients: ingredients.value || null,
    numb: numb.value,
  });
  setMenuData(data);
  updateMenu();
};

const saveFormEditMenu = (e) => {
  e.preventDefault();
  if (e.target.name !== "edit-menu") return;
  const { recipeName } = e.target.elements;
  const data = getMenuData();
  if (!data) return;
  const indexRecipe = data.recipeGroup.findIndex(
    (item) => item.index === Number(e.target.id)
  );
  if (indexRecipe === -1) return;
  data.recipeGroup[indexRecipe].recipeName = recipeName.value;
  setMenuData(data);
  updateMenu();
};

const cancelFormEditMenu = (e) => {
  if (e.target.hasAttribute("data-cancel")) {
    const recipeItem = e.target.closest("li");
    const formEditMenu = recipeItem.querySelector(".form-edit-menu");
    formEditMenu.remove();
    updateMenu();
  }
};

const createFormEditDessert = (e) => {
  if (e.target.hasAttribute("data-edit")) {
    const titleDessert = listMenu.querySelector(".title-desert");
    const data = getMenuData();
    const btnDeleteDessert = listMenu.querySelector(
      "button[data-delete='delete']"
    );
    const btnAddDessert = listMenu.querySelector("button[data-add='add']");
    e.target.remove();
    btnAddDessert.remove();
    btnDeleteDessert.remove();
    titleDessert.remove();
    listMenu.insertAdjacentHTML(
      "afterbegin",
      `<form class="form-edit-dessert" name="edit-dessert" id=${data.recipeGroup.index}>
 <input type="text" name="desertName" class="input-title-recepie" value="${data.desertName}" required/>

  <div class="wrap-btn">
    <button type="submit" class="btn-dessert">Зберегти</button>
    <button type="button" class="btn-dessert" data-cancel="cancel">Скасувати</button>
  </div>
 </form>
 `
    );
  }
};

const saveFormEditDessert = (e) => {
  e.preventDefault();
  if (e.target.name !== "edit-dessert") return;
  const { desertName } = e.target.elements;
  const data = getMenuData();
  if (!data) return;
  data.desertName = desertName.value;
  setMenuData(data);
  updateMenu();
};

const cancelFormEditDessert = (e) => {
  if (e.target.hasAttribute("data-cancel")) {
    const formEditDessert = listMenu.querySelector(".form-edit-dessert");
    formEditDessert.remove();
    updateMenu();
  }
};

btnAddDesert.addEventListener("click", createBtnFormMenu); // створює форму для додавання десерту
listMenu.addEventListener("click", menuRemove); // видалення десерту
form.addEventListener("submit", createMenu); // створення десерту
listMenu.addEventListener("click", createFormEditDessert); // створює форму для редагування десерту
listMenu.addEventListener("submit", saveFormEditDessert); // збереження відредагованого десерту
listMenu.addEventListener("click", cancelFormEditDessert); // скасування відредагованого рецепту

listMenu.addEventListener("click", createFormMenu); // створює форму для додавання рецепта
listIngredients.addEventListener("submit", saveFormEditMenu); // збереження відредагованого рецепту
listIngredients.addEventListener("click", cancelFormEditMenu); // скасування відредагованого рецепту
listIngredients.addEventListener("click", createFormEditMenu); // створює форму для редагування рецепта
listMenu.addEventListener("submit", formReceptMenu); // створення рецепта
listIngredients.addEventListener("click", deleteForRecepieMenu); // видалення рецепта

listIngredients.addEventListener("click", createFormIngredients); // створює форму для додавання інгредієнтів
listIngredients.addEventListener("click", deleteIngredientsRecepie); // видалення інгредієнта
listIngredients.addEventListener("submit", formReceptIngrediensMenu); // Створеняя інгредієнта
listIngredients.addEventListener("click", createEditFormIngredients); // cтворення форми редагування інгредієнта
listIngredients.addEventListener("submit", saveEditFormIngredients); // збереження відредагованого інгредієнта
listIngredients.addEventListener("click", visibleIngredients); // показує/приховує інгредієнти

btnSuccessfullyDesert.addEventListener("click", successfullyDesert); // фінальна стадія десерту

updateMenu(); // оновлення рендеру
