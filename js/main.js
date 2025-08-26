const titleListIngredients = document.querySelector('.title-ingredients')
const form = document.querySelector(".form-container");
const listMenu = document.querySelector(".list-menu");
const listIngredients = document.querySelector('.list-ingredients')

const updateMenu = () => {
  // console.log([] === true)
  let data = JSON.parse(localStorage.getItem("menu"));
  if (!data) return
  listMenu.innerHTML = "";
  listMenu.insertAdjacentHTML(
    "afterbegin", data.map((item, index) =>     `<li class="list-item">
            <p>${item.desertName}</p>
            <div class="wrap-btn">
            <button type="button" class="btn-delete" data-delete="delete" id=${index}>Видалити десерт</button>
            <button type="button" class="btn-delete" data-add="add" id=${index}>Додати до десерту рецепт</button>
            </div>
            <form class="form-ingredients" id=${index}>
            <label>
              Назва рецепту:
              <input type="text" name="nameRecipe" class="desert" required/>
            </label>
            <button type="submit" class="btn-add" id=${index}>Додати рецепт</button>
          </form>
          <h1 class=${item.recipeGroup[index] || "hidden"}>Технології приготування</h1>
          </li>`).join('')
  );
// console.log(data[0].recipeGroup.length)
// data.forEach((item, index) => console.log())
if (!data[0].recipeGroup) return
 listIngredients.innerHTML = ""
  listIngredients.insertAdjacentHTML(
    "afterbegin", data.map((item, index) => item.recipeGroup.map(recipe => `<li class="recepie-item">
    
            <h1 class="title-recepie" >${recipe.recipeName}</h1>
            <button type="button" class="btn-add" data-delete="delete" id=${index}>Видалити інгредієнт</button>
            <button type="submit" class="btn-add" id=${index}>Додати інгредієнт</button>
          </li>`).join(''))
  );
};


const createMenu = (e) => {
  e.preventDefault();
  const { desert } = e.currentTarget.elements;
  let data = JSON.parse(localStorage.getItem("menu"));

  if (!data) {
    data = [];
  }

  const menu = {
    desertName: desert.value,
    index:  data.length+1,
    recipeGroup: []
  };
data.push(menu)
  localStorage.setItem("menu", JSON.stringify(data));
  updateMenu();
  desert.value = "";
  form.classList.add('hidden')
  // console.log(indexMenu)
  // formIngredients.classList.remove('hidden')
  // titleListIngredients.classList.remove('hidden')
};

const createFormMenu = (e) => {
  if (e.target.hasAttribute('data-add')) {
    const formIngredients = document.querySelector(".form-ingredients");
    formIngredients.classList.remove('hidden')
    form.classList.add('hidden')
  }
}

const formReceptMenu = (e) => {
  e.preventDefault();
  const { nameRecipe } = e.target.elements

  let data = JSON.parse(localStorage.getItem("menu"));
  if (!data) return

  data[e.target.id].recipeGroup.push({
    recipeName: nameRecipe.value,
    index:  data[e.target.id].recipeGroup.length+1,
    recipe: []
  })
// console.log(data[e.target.id])
  localStorage.setItem("menu", JSON.stringify(data));
  updateMenu();
  nameRecipe.value = '';
  form.classList.add('hidden')
  // titleListIngredients.classList.remove('hidden')
}

const menuRemove = e => {
  if (e.target.hasAttribute('data-delete')) {
    localStorage.removeItem("menu");
    listMenu.innerHTML = "";
    listIngredients.innerHTML = "";
     form.classList.remove('hidden')
    // listIngredients.innerHTML = "";
    // formIngredients.classList.add('hidden')
    // titleListIngredients.classList.add('hidden')
  }
}
// const ingredientsRemove = e => {
//   if (e.target.hasAttribute('data-delete')) {
//     let data = JSON.parse(localStorage.getItem("menu"));
//     data.recipe.splice(e.target.id, 1)
//     localStorage.setItem("menu", JSON.stringify(data));
//     listIngredients.innerHTML = "";
//     updateMenu();
//   }
// }
// const formIngredients = document.querySelector(".form-ingredients");

// listIngredients.addEventListener('click', ingredientsRemove)
listMenu.addEventListener('click', menuRemove)
form.addEventListener("submit", createMenu);
listMenu.addEventListener("submit", formReceptMenu);

listMenu.addEventListener("click", createFormMenu);

updateMenu();














    // <form class="form-ingredients">
    //         <label>
    //           Інгредієнти:
    //           <input type="text" name="ingredients" class="desert" required/>
    //         </label>

    //         <label>
    //           Кількість г/ш в рецепті:
    //           <input type="text" name="numb" class="desert" required/>
    //         </label>
    //         <button type="submit" class="btn-add">Додати інгредієнт</button>
    //       </form>