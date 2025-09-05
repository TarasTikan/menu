const listMenu = document.querySelector(".list-menu-recepie");
const menuTitle = document.querySelector(".menu-title-recepie");
const formFilter = document.querySelector(".form-filtr");


const renderListDessert = (data) => {
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
          ${!item.notes
            ? `<p class="describe-dessert"><strong>Нотатки:</strong> Немає нотаток</p>`
            : `<p class="describe-dessert"><strong>Нотатки:</strong> ${item.notes}</p>`
          }
          <div class="wrap-btn">
          <button type="button" class="btn-dessert" data-notes="notes" id=${item.index
          }><svg class="icon-notes" width="15" height="15">
  <use href="./img/icons.svg#icon-notes"></use>
</svg></button>
          <button type="button" class="btn-dessert" data-delete="delete" id=${item.index
          }><svg class="icon-delete" width="15" height="15">
  <use href="./img/icons.svg#icon-delete"></use>
</svg></button>
          </div>
        </li>
      `
      )
      .join("")
  );
}
const getDesserts = () => JSON.parse(localStorage.getItem("listMenuDesert"));

const setDesserts = (data) => localStorage.setItem("listMenuDesert", JSON.stringify(data));

const findDessert = (data, id) => data.find((item) => item.index === Number(id));


const updateListMenu = (filtrData) => {
  const data = filtrData || getDesserts()
  if (!data || data.length === 0) {
    menuTitle.textContent = "Немає десертів у меню \u{1F370}";
    formFilter.remove();
  } else {
    menuTitle.textContent = "Меню";
  }
  renderListDessert(data)
};

const removeDessert = (e) => {
  if (e.target.hasAttribute("data-delete")) {
    if (!confirm("Ти впевнений(а), що хочеш видалити цей десерт?")) return;
    const data = getDesserts().filter(item => item.index !== Number(e.target.id))
    setDesserts(data)
    updateListMenu();
  }
};

const createFormNotesDessert = (e) => {
  if (e.target.hasAttribute("data-notes")) {
    const data = getDesserts()
    const dessert = findDessert(data, e.target.id)
    const wrapBtn = e.target.closest(".wrap-btn");
    e.target.remove();
    wrapBtn.insertAdjacentHTML(
      "beforebegin",
      `<form class="form-notes" id=${e.target.id}>
  <textarea name="notes" class="textarea-notes" placeholder="Введіть нотатки..." >${dessert.notes || ""}</textarea>
  <button type="submit" class="btn-dessert">Зберегти</button></form>`
    );
  }
};

const notesDessert = (e) => {
  e.preventDefault();
  const { notes } = e.target.elements;
  const data = getDesserts()
  const dessert = findDessert(data, e.target.id)
  if (!dessert) return;
  dessert.notes = notes.value;
  setDesserts(data)
  updateListMenu();
};

const filtrDessertMenu = (e) => {
  const data = getDesserts()
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
