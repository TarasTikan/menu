const listMenu = document.querySelector(".list-menu-recepie");
const menuTitle = document.querySelector('.menu-title-recepie')
const updateListMenu = () => {
  const data = JSON.parse(localStorage.getItem("listMenuDesert"));
  if(!data || data.length === 0) {
    menuTitle.textContent = "Немає десертів у меню \u{1F370}";
  }
  listMenu.innerHTML = ""; // Очищаємо попередній список перед оновленням
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
          <button type="button" class="btn-delete-dessert" id=${item.index}>Видалити десерт</button>
        </li>
      `
      )
      .join("")
  );
};

const removeDessert = e => {
  if (e.target.nodeName === "BUTTON") {
    const data = JSON.parse(localStorage.getItem("listMenuDesert"))
    const findDessert = data.findIndex(item => item.index === Number(e.target.id))
    data.splice(findDessert, 1)
    localStorage.setItem("listMenuDesert", JSON.stringify(data))
    updateListMenu()
  }
}
listMenu.addEventListener('click', removeDessert)
updateListMenu();
