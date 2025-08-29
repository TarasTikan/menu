const listMenu = document.querySelector(".list-menu-recepie");

const updateListMenu = (menu) => {
  const data = JSON.parse(localStorage.getItem("listMenuDesert")) || [];
  listMenu.insertAdjacentHTML(
    "afterbegin",
    data
      .map(
        (item) => `
     <li>
                <h1>${item.desertName}</h1>
                <p>Технології рецептур ${item.desertName}</p>
                <ul>
                ${item.recipeGroup
                  .map(
                    (recipe) => `<li><h2>${recipe.recipeName}<h2><p>Список інгредієнтів</p>
                    <ul>
                    ${recipe.recipeIngredienst.map(
                        (ing) =>
                          `<li><p>${ing.ingredients} - ${ing.numb} г/ш</p></li>`
                      )
                      }
                    
                </ul>
                
                </li>`
                  )
                  .join("")}
            </li>
`
      )
    
  );
};
updateListMenu();
