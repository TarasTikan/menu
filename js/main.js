const titleListIngredients = document.querySelector(".title-ingredients");
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
    data
      .map(
        (item, index) => `
            <h2 class="title-desert">${item.desertName}</h2>
            <div class="wrap-btn">
            <button type="button" class="btn-dessert" data-delete="delete" id=${index}>Видалити десерт</button>
            <button type="button" class="btn-dessert" data-add="add" id=${index}>Додати до десерту рецепт</button>
            </div>
            <form class="form-title-recepie hidden" id=${index}>
            <label class="label-title-recepie">
              Назва рецепту
              <input type="text" name="nameRecipe" class="input-title-recepie" required/>
            </label>
            <button type="submit" class="btn-dessert" id=${index}>Додати рецепт</button>
          </form>
          <p class="sub-title-recepie ${
            item.recipeGroup[index] || "hidden"
          }">Технології приготування ${item.desertName}</h1>
          `
      )
      .join("")
  );
  if (!data[0].recipeGroup) return;

  listIngredients.innerHTML = "";
  listIngredients.insertAdjacentHTML(
    "afterbegin",
    data.map((item) =>
      item.recipeGroup
        .map(
          (recipe) => `<li class="recepie-item">
      <div class="wrap-recepie">
       <h1 class="title-recepie" >${recipe.recipeName}</h1>
            <button type="button" class="btn-dessert" data-delete="delete" id=${recipe.index}>Видалити рецепт</button>
            <button type="button" class="btn-dessert" data-add="add" id=${recipe.index}>Додати інгредієнт</button>
      </div>
      <h2 class="title-ingredients ${recipe.recipeIngredienst.length > 0 ? "" : "hidden"}">Інгредієнти до ${recipe.recipeName}</h2>
               <form class="form-recepie-ingredients hidden" id=${recipe.index}>
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
          <ul class="list-ingredients-recepie">
          ${recipe.recipeIngredienst.map((itemReciperIng) => `<li class="list-ingredients-item"><p>${itemReciperIng.ingredients} — ${itemReciperIng.numb}</p> <button type="button" class="btn-dessert" data-deleteRe="delete" id=${itemReciperIng.index}>Видалити інгредієнт</button></li>`).join("")}
          </ul>
          </li>`
        )
        .join("")
    )
  );
if (!data[0].recipeGroup[0]) return;
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
  const { desert } = e.currentTarget.elements;
  let data = JSON.parse(localStorage.getItem("menu"));

  if (!data) {
    data = [];
  }

  const menu = {
    desertName: desert.value,
    index: generateUniqueNumber(),
    recipeGroup: [],
  };
  data.push(menu);
  localStorage.setItem("menu", JSON.stringify(data));
  updateMenu();
  desert.value = "";
  form.classList.add("hidden");
};
const menuRemove = (e) => {
  if (e.target.hasAttribute("data-delete")) {
    localStorage.removeItem("menu");
    listMenu.innerHTML = "";
    listIngredients.innerHTML = "";
    btnAddDesert.classList.remove("hidden");
  }
};


const formReceptMenu = (e) => {
  e.preventDefault();
  const { nameRecipe } = e.target.elements;

  let data = JSON.parse(localStorage.getItem("menu"));
  if (!data) return;

  data[e.target.id].recipeGroup.push({
    recipeName: nameRecipe.value,
    index: generateUniqueNumber(),
    recipeIngredienst: [],
  });
  localStorage.setItem("menu", JSON.stringify(data));
  updateMenu();
  nameRecipe.value = "";
  form.classList.add("hidden");
};

const createForRecepieMenu = (e) => {
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
    if(!data) return
    const indexRecipe = data[0].recipeGroup.findIndex(item => item.index === Number(e.target.id))
    if(indexRecipe === -1) return
    data[0].recipeGroup.splice(indexRecipe, 1)
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
  const indexRecipe = data[0].recipeGroup.findIndex(
    (item) => item.index === Number(e.target.id)
  );
  if (indexRecipe === -1) return;
  data[0].recipeGroup[indexRecipe].recipeIngredienst.push({
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
    if(!data) return
    const indexRecipe = data[0].recipeGroup.findIndex(item => item.recipeIngredienst.some(ing => ing.index === Number(e.target.id)))
    if(indexRecipe === -1) return
    const indexIngridient = data[0].recipeGroup[indexRecipe].recipeIngredienst.findIndex(ing => ing.index === Number(e.target.id))
    if(indexIngridient === -1) return
    data[0].recipeGroup[indexRecipe].recipeIngredienst.splice(indexIngridient, 1)
    localStorage.setItem("menu", JSON.stringify(data))
    updateMenu();
  }}

const successfullyDesert = (e) => {
  const data = JSON.parse(localStorage.getItem("menu"));
  if(!data) return

  let dataListMenu = JSON.parse(localStorage.getItem("listMenuDesert"));
  if(!dataListMenu) {
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

listMenu.addEventListener("click", menuRemove);
form.addEventListener("submit", createMenu);

listIngredients.addEventListener("submit", formReceptIngrediensMenu);

listMenu.addEventListener("submit", formReceptMenu);
listMenu.addEventListener("click", createFormMenu);

listIngredients.addEventListener("click", createForRecepieMenu);
listIngredients.addEventListener("click", deleteForRecepieMenu);
listIngredients.addEventListener("click", deleteIngredientsRecepie);

btnAddDesert.addEventListener("click", createBtnFormMenu);
btnSuccessfullyDesert.addEventListener("click", successfullyDesert)
updateMenu();

