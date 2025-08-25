const titleListIngredients = document.querySelector('.title-ingredients')
const form = document.querySelector(".form-container");
const listMenu = document.querySelector(".list-menu");
const formIngredients = document.querySelector(".form-ingredients");
const listIngredients = document.querySelector('.list-ingredients')

const updateMenu = () => {
  let data = JSON.parse(localStorage.getItem("menu"));
  if (!data) return
  listMenu.innerHTML = "";
  listMenu.insertAdjacentHTML(
    "afterbegin",
    `   <li class="list-item">
            <p>${data.desertName}</p>
             </ul>
            <button type="button" class="btn-delete" data-delete="delete">Видалити десерт</button>
          </li>`

  );

  if (!data.recipe) return

  listIngredients.innerHTML = "";
  listIngredients.insertAdjacentHTML(
    "afterbegin", data.recipe.map((item, index) => `<li class="item-ingredients"><p>${item.ingredients} <span>${item.numb}</span></p><button type="button" class="btn-delete" data-delete="delete" id=${index}>Видалити інгредієнт</button></li>`).join('')
  );

if (!data.recipe) {
   titleListIngredients.classList.remove('hidden')
}
  formIngredients.classList.remove('hidden')

};

const createMenu = (e) => {
  e.preventDefault();
  const { desert } = e.currentTarget.elements;

  let data = JSON.parse(localStorage.getItem("menu"));

  if (!data) {
    data = {};
  }

  data = {
    desertName: desert.value,
    recipe: []
  };

  localStorage.setItem("menu", JSON.stringify(data));
  updateMenu();
  desert.value = "";
  // formIngredients.classList.remove('hidden')
  // titleListIngredients.classList.remove('hidden')
};

const createIngredientsMenu = (e) => {
  e.preventDefault()
  const { ingredients, numb } = e.currentTarget.elements
  let data = JSON.parse(localStorage.getItem("menu"));
  if (!data) return

  data.recipe.push({
    ingredients: ingredients.value,
    numb: numb.value
  })

  localStorage.setItem("menu", JSON.stringify(data));
  updateMenu();
  ingredients.value = '';
  numb.value = '';
  titleListIngredients.classList.remove('hidden')
}
const menuRemove = e => {
  if (e.target.hasAttribute('data-delete')) {
    localStorage.removeItem("menu");
    listMenu.innerHTML = "";
    listIngredients.innerHTML = "";
    formIngredients.classList.add('hidden')
    titleListIngredients.classList.add('hidden')
  }
}
const ingredientsRemove = e => {
  if (e.target.hasAttribute('data-delete')) {
    let data = JSON.parse(localStorage.getItem("menu"));
    data.recipe.splice(e.target.id, 1)
    localStorage.setItem("menu", JSON.stringify(data));
    listIngredients.innerHTML = "";
    updateMenu();
  }
}

listIngredients.addEventListener('click', ingredientsRemove)
listMenu.addEventListener('click', menuRemove)
form.addEventListener("submit", createMenu);
formIngredients.addEventListener("submit", createIngredientsMenu);

updateMenu();