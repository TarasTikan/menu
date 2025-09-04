const listMenu = document.querySelector(".list-menu-recepie");
const menuTitle = document.querySelector(".menu-title-recepie");
const formFilter = document.querySelector(".form-filtr");
const updateListMenu = (filtrData) => {
  const data = filtrData || JSON.parse(localStorage.getItem("listMenuDesert"));
  if (!data || data.length === 0) {
    menuTitle.textContent = "Немає десертів у меню \u{1F370}";
    formFilter.remove();
  } else {
    menuTitle.textContent = "Меню";
  }

  listMenu.innerHTML = "";
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
          ${
            !item.notes
              ? `<p class="describe-dessert"><strong>Нотатки:</strong> Немає нотаток</p>`
              : `<p class="describe-dessert"><strong>Нотатки:</strong> ${item.notes}</p>`
          }
          <div class="wrap-btn">
          <button type="button" class="btn-dessert" data-notes="notes" id=${
            item.index
          }><svg class="icon-notes" width="15" height="15">
  <use href="./img/icons.svg#icon-notes"></use>
</svg></button>
          <button type="button" class="btn-dessert" data-delete="delete" id=${
            item.index
          }><svg class="icon-delete" width="15" height="15">
  <use href="./img/icons.svg#icon-delete"></use>
</svg></button>
          </div>
        </li>
      `
      )
      .join("")
  );
};

const removeDessert = (e) => {
  if (e.target.hasAttribute("data-delete")) {
    const isComing = confirm("Ти впевнений(а), що хочеш видалити цей десерт?");
    if (!isComing) return;
    const data = JSON.parse(localStorage.getItem("listMenuDesert"));
    const findDessert = data.findIndex(
      (item) => item.index === Number(e.target.id)
    );
    data.splice(findDessert, 1);
    localStorage.setItem("listMenuDesert", JSON.stringify(data));
    updateListMenu();
  }
};

const createFormNotesDessert = (e) => {
  if (e.target.hasAttribute("data-notes")) {
    const data = JSON.parse(localStorage.getItem("listMenuDesert"));
    const findDessert = data.find((item) => item.index === Number(e.target.id));
    const wrapBtn = e.target.closest(".wrap-btn");
    e.target.remove();
    wrapBtn.insertAdjacentHTML(
      "beforebegin",
      `<form class="form-notes" id=${e.target.id}>
  <textarea name="notes" class="textarea-notes" placeholder="Введіть нотатки..." >${findDessert.notes}</textarea>
  <button type="submit" class="btn-dessert">Зберегти</button></form>`
    );
  }
};

const notesDessert = (e) => {
  e.preventDefault();
  const data = JSON.parse(localStorage.getItem("listMenuDesert"));
  const findDessert = data.find((item) => item.index === Number(e.target.id));
  const { notes } = e.target.elements;
  findDessert.notes = notes.value;
  localStorage.setItem("listMenuDesert", JSON.stringify(data));
  updateListMenu();
};

const filtrDessertMenu = (e) => {
  const data = JSON.parse(localStorage.getItem("listMenuDesert"));
  const filtrDessert = data.filter((item) =>
    item.desertName.toLowerCase().includes(e.target.value.toLowerCase())
  );
  if (!filtrDessert || filtrDessert.length === 0) return;
  updateListMenu(filtrDessert);
};

formFilter.addEventListener("input", filtrDessertMenu);

listMenu.addEventListener("submit", notesDessert);

listMenu.addEventListener("click", createFormNotesDessert);
listMenu.addEventListener("click", removeDessert);
updateListMenu();
