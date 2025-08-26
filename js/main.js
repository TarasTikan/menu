const titleListIngredients = document.querySelector('.title-ingredients')
const form = document.querySelector(".form-container");
const listMenu = document.querySelector(".list-menu");
// const formIngredients = document.querySelector(".form-ingredients");
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
          </li>`).join('')
  );
// console.log(data[0].recipeGroup.length)
data.forEach((item, index) => {
  console.log(`Десерт: ${item.desertName}`);
  item.recipeGroup.forEach(recipe => {
    console.log(`--> Рецепт: ${recipe.recipeName}`);
  });
});
 listIngredients.innerHTML = ""
  // listIngredients.insertAdjacentHTML(
  //   "afterbegin", data.map((item, index) => `<li>
    
  //           <p>${item.recipeGroup[index].recipeName}</p>

  //         </li>`).join('')
  // );
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
  // console.log(indexMenu)
  // formIngredients.classList.remove('hidden')
  // titleListIngredients.classList.remove('hidden')
};

const createFormMenu = (e) => {
  if (e.target.hasAttribute('data-add')) {
    const formIngredients = document.querySelector(".form-ingredients");
    formIngredients.classList.remove('hidden')
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
  // titleListIngredients.classList.remove('hidden')
}

const menuRemove = e => {
  if (e.target.hasAttribute('data-delete')) {
    localStorage.removeItem("menu");
    listMenu.innerHTML = "";
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