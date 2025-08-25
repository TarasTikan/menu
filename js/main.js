const form = document.querySelector(".form-container");
const listMenu = document.querySelector(".list-menu");
const formIngredients = document.querySelector(".form-ingredients");

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
};

const createIngredientsMenu = (e) => {
  e.preventDefault()
  const {ingredients, numb} = e.currentTarget.elements
   let data = JSON.parse(localStorage.getItem("menu"));
   if(!data) return

   data.recipe.push({
    ingredients: ingredients.value,
    numb: numb.value
  })
  
   localStorage.setItem("menu", JSON.stringify(data));
  updateMenu();
  ingredients.value = '';
  numb.value = '';

}
form.addEventListener("submit", createMenu);
formIngredients.addEventListener("submit", createIngredientsMenu);

updateMenu();