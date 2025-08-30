const mainTitle = document.querySelector(".menu-title-recepie");
const form = document.querySelector(".form-container");
const listMenu = document.querySelector(".list-menu");
const listIngredients = document.querySelector(".list-ingredients");
const btnAddDesert = document.querySelector(".add-btn-desert");
const btnSuccessfullyDesert = document.querySelector(".btn-successfully-desert")

const generateUniqueNumber = () => {
  return Date.now() + Math.floor(Math.random() * 1000)
}

const updateMenu = () => {
  let data = JSON.parse(localStorage.getItem("menu"));

  if (!data) {
    return btnAddDesert.classList.remove("hidden");
  }

  listMenu.innerHTML = "";
  listMenu.insertAdjacentHTML(
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
          }">Технології приготування ${data.desertName}</h1>
          `
   
  );
  if (!data.recipeGroup.length) return;

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
  if (!data.recipeGroup.length) return;
  btnSuccessfullyDesert.classList.remove("hidden");
};

const createBtnFormMenu = (e) => {
  form.classList.remove("hidden");
  btnAddDesert.classList.add("hidden");
};

// ця функція добавляє форму для створення назви етапу
const createFormMenu = (e) => {
  if (e.target.hasAttribute("data-add")) {
    const formIngredients = document.querySelector(".form-title-recepie");
    formIngredients.classList.remove("hidden");
    form.classList.add("hidden");
  }
};
// ця функція добавляє форму для створення назви етапу

const createMenu = (e) => {
  e.preventDefault();
  if(!e.currentTarget.desert.value) return
  const { desert } = e.currentTarget.elements;
  let data = JSON.parse(localStorage.getItem("menu"));

  // if (!data) {
  //   data = [];
  // }

  const menu = {
    desertName: desert.value,
    index: generateUniqueNumber(),
    recipeGroup: [],
  };
  // data.push(menu);
  localStorage.setItem("menu", JSON.stringify(menu));
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

  let data = JSON.parse(localStorage.getItem("menu"));
  if (!data) return;

  data.recipeGroup.push({
    recipeName: nameRecipe.value,
    index: generateUniqueNumber(),
    recipeIngredienst: [],
  });
  localStorage.setItem("menu", JSON.stringify(data));
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
    const data = JSON.parse(localStorage.getItem("menu"));
    if (!data) return
    const indexRecipe = data.recipeGroup.findIndex(item => item.index === Number(e.target.id))
    if (indexRecipe === -1) return
    data.recipeGroup.splice(indexRecipe, 1)
    localStorage.setItem("menu", JSON.stringify(data))
    btnSuccessfullyDesert.classList.add("hidden");
    updateMenu();
  }
}




const formReceptIngrediensMenu = (e) => {
  e.preventDefault();
  const { ingredients, numb } = e.target.elements;
  let data = JSON.parse(localStorage.getItem("menu"));
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
  localStorage.setItem("menu", JSON.stringify(data))
  updateMenu();
};

const deleteIngredientsRecepie = (e) => {
  if (e.target.hasAttribute("data-deleteRe")) {
    let data = JSON.parse(localStorage.getItem("menu"));
    if (!data) return
    const indexRecipe = data.recipeGroup.findIndex(item => item.recipeIngredienst.some(ing => ing.index === Number(e.target.id)))
    if (indexRecipe === -1) return
    const indexIngridient = data.recipeGroup[indexRecipe].recipeIngredienst.findIndex(ing => ing.index === Number(e.target.id))
    if (indexIngridient === -1) return
    data.recipeGroup[indexRecipe].recipeIngredienst.splice(indexIngridient, 1)
    localStorage.setItem("menu", JSON.stringify(data))
    updateMenu();
  }
}

const successfullyDesert = (e) => {
  const data = JSON.parse(localStorage.getItem("menu"));
  if (!data) return

  let dataListMenu = JSON.parse(localStorage.getItem("listMenuDesert"));
  if (!dataListMenu) {
    dataListMenu = []
  }

  dataListMenu.push(data[0])
  localStorage.setItem("listMenuDesert", JSON.stringify(dataListMenu))
  localStorage.removeItem("menu");
  listMenu.innerHTML = "";
  listIngredients.innerHTML = "";
  btnSuccessfullyDesert.classList.add("hidden");
  btnAddDesert.classList.remove("hidden");
}



const visibleIngredients = (e) => {
  if (e.target.classList.contains("visible-btn")) {
    const recipeItem = e.target.closest("li");
    if (!recipeItem) return;
    const itemIngredients = recipeItem.querySelector(".list-ingredients-recepie");

    if (itemIngredients) {
      itemIngredients.classList.toggle("hidden");
    }
  }
}

// Показ форми для створення десерту
btnAddDesert.addEventListener("click", createBtnFormMenu);
// Показ форми для створення десерту

// створення десерту та видалення
listMenu.addEventListener("click", menuRemove);
form.addEventListener("submit", createMenu);
// створення десерту та видалення

// створення етапа
listMenu.addEventListener("submit", formReceptMenu); // створення етапа
listMenu.addEventListener("click", createFormMenu);

listIngredients.addEventListener("click", deleteForRecepieMenu); // deleteForRecepieMenu - видалення етапа
// створення етапа

// Створеняя інгредієнта та видалення
listIngredients.addEventListener("submit", formReceptIngrediensMenu);
listIngredients.addEventListener("click", deleteIngredientsRecepie);
listIngredients.addEventListener("click", createFormIngredients); // створює форму для додавання інгредієнтів
listIngredients.addEventListener("click", visibleIngredients);
// Створеняя інгредієнта та видалення, показ інгредієнтів


btnSuccessfullyDesert.addEventListener("click", successfullyDesert)
updateMenu();

