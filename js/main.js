const mainTitle = document.querySelector(".menu-title-recepie");
const form = document.querySelector(".form-container");
const listMenu = document.querySelector(".list-menu");
const listIngredients = document.querySelector(".list-ingredients");
const btnAddDesert = document.querySelector(".add-btn-desert");
const btnSuccessfullyDesert = document.querySelector(".btn-successfully-desert")

const generateUniqueNumber = () => {
  return Date.now() + Math.floor(Math.random() * 1000)
}
const getMenuData = () => JSON.parse(localStorage.getItem("menu"));
const setMenuData = (data) => localStorage.setItem("menu", JSON.stringify(data));
const renderFormRecepie = (data) => {
  listMenu.innerHTML = "";
  return listMenu.insertAdjacentHTML(
    "afterbegin",
    `
            <h2 class="title-desert">${data.desertName}</h2>
            <div class="wrap-btn">
            <button type="button" class="btn-create-recepie" data-delete="delete" id=${data.index}>Видалити десерт</button>
            <button type="button" class="btn-create-recepie" data-add="add" id=${data.index}>Додати до десерту рецепт</button>
            </div>
            <form class="form-title-recepie hidden" id=${data.index}>
            <label class="label-title-recepie">
              Назва рецепту
              <input type="text" name="nameRecipe" class="input-title-recepie" required/>
            </label>
            <button type="submit" class="btn-dessert" id=${data.index}>Додати рецепт</button>
          </form>
          <p class="sub-title-recepie ${data.recipeGroup.length || "hidden"
    }">Технології приготування ${data.desertName}</p>
          `

  );
}
const renderListIngredients = (data) => {
  listIngredients.innerHTML = "";
  listIngredients.insertAdjacentHTML(
    "afterbegin",
    data.recipeGroup.map((item) => `<li class="recepie-item">
      <div class="wrap-recepie">
       <h1 class="title-recepie" >${item.recipeName}</h1>
            <button type="button" class="btn-dessert" data-delete="delete" id=${item.index}>Видалити рецепт</button>
            <button type="button" class="btn-dessert" data-add="add" id=${item.index}>Додати інгредієнт</button>
      </div>
      <div class="wrap-title-ingredients ${item.recipeIngredienst.length > 0 ? "" : "hidden"}"><h2 class="title-ingredients">Інгредієнти до ${item.recipeName}:</h2><button type="button" class="visible-btn">Показати</button> </div>
      
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
          ${item.recipeIngredienst.map((itemReciperIng) => `<li class="list-ingredients-item"><p class="ingredients-text">${itemReciperIng.ingredients} — ${itemReciperIng.numb}</p> <button type="button" class="btn-dessert" data-deleteRe="delete" id=${itemReciperIng.index}>Видалити інгредієнт</button></li>`).join("")}
          </ul>
          </li>`
    )
      .join("")
  )
}


const updateMenu = () => {
  const data = getMenuData();

  if (!data) {
    return btnAddDesert.classList.remove("hidden");
  }
  mainTitle.classList.add("hidden");

  renderFormRecepie(data)
  renderListIngredients(data)

  if (!data.recipeGroup.length) return;
  btnSuccessfullyDesert.classList.remove("hidden");
};

const createBtnFormMenu = (e) => {
  form.classList.remove("hidden");
  btnAddDesert.classList.add("hidden");
};

const createFormMenu = (e) => {
  if (e.target.hasAttribute("data-add")) {
    const formIngredients = document.querySelector(".form-title-recepie");
    formIngredients.classList.remove("hidden");
    form.classList.add("hidden");
  }
};


const createMenu = (e) => {
  e.preventDefault();
  if (!e.currentTarget.desert.value) return
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

    formRecepieIngredients.classList.remove("hidden");

  }
};

const deleteForRecepieMenu = (e) => {
  if (e.target.hasAttribute("data-delete")) {
    const data = getMenuData();
    if (!data) return
    const indexRecipe = data.recipeGroup.findIndex(item => item.index === Number(e.target.id))
    if (indexRecipe === -1) return
    data.recipeGroup.splice(indexRecipe, 1)
    setMenuData(data);

    btnSuccessfullyDesert.classList.add("hidden");
    updateMenu();
  }
}

const formReceptIngrediensMenu = (e) => {
  e.preventDefault();
  const { ingredients, numb } = e.target.elements;
  const data = getMenuData();
  if (!data) return;
  const indexRecipe = data.recipeGroup.findIndex(
    (item) => item.index === Number(e.target.id)
  );
  if (indexRecipe === -1) return;
  data.recipeGroup[indexRecipe].recipeIngredienst.push({
    index: generateUniqueNumber(),
    ingredients: ingredients.value,
    numb: numb.value,
  });
  setMenuData(data);
  updateMenu();
};

const deleteIngredientsRecepie = (e) => {
  if (e.target.hasAttribute("data-deleteRe")) {
    const data = getMenuData();
    if (!data) return
    const indexRecipe = data.recipeGroup.findIndex(item => item.recipeIngredienst.some(ing => ing.index === Number(e.target.id)))
    if (indexRecipe === -1) return
    const indexIngridient = data.recipeGroup[indexRecipe].recipeIngredienst.findIndex(ing => ing.index === Number(e.target.id))
    if (indexIngridient === -1) return
    data.recipeGroup[indexRecipe].recipeIngredienst.splice(indexIngridient, 1)
    setMenuData(data);
    updateMenu();
  }
}

const successfullyDesert = (e) => {
  const data = getMenuData();
  if (!data) return

  let dataListMenu = JSON.parse(localStorage.getItem("listMenuDesert"));
  if (!dataListMenu) {
    dataListMenu = []
  }

  dataListMenu.push(data)
  localStorage.setItem("listMenuDesert", JSON.stringify(dataListMenu))
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
    }
  }).showToast();
}

const visibleIngredients = (e) => {
  if (e.target.classList.contains("visible-btn")) {
    const recipeItem = e.target.closest("li");
    if (!recipeItem) return;
    const itemIngredients = recipeItem.querySelector(".list-ingredients-recepie");

    if (itemIngredients) {
      itemIngredients.classList.toggle("hidden");
      e.target.textContent = itemIngredients.classList.contains("hidden") ? "Показати" : "Приховати"
    }
  }
}


btnAddDesert.addEventListener("click", createBtnFormMenu); // створює форму для додавання десерту
listMenu.addEventListener("click", menuRemove); // видалення десерту
form.addEventListener("submit", createMenu); // створення десерту


listMenu.addEventListener("click", createFormMenu); // створює форму для додавання рецепта
listMenu.addEventListener("submit", formReceptMenu); // створення рецепта
listIngredients.addEventListener("click", deleteForRecepieMenu); // видалення рецепта


listIngredients.addEventListener("click", createFormIngredients); // створює форму для додавання інгредієнтів
listIngredients.addEventListener("submit", formReceptIngrediensMenu);  // Створеняя інгредієнта
listIngredients.addEventListener("click", deleteIngredientsRecepie); // видалення інгредієнта
listIngredients.addEventListener("click", visibleIngredients); // показує/приховує інгредієнти

btnSuccessfullyDesert.addEventListener("click", successfullyDesert) // фінальна стадія десерту

updateMenu(); // оновлення рендеру

