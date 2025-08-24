const form = document.querySelector(".form-container");
const listMenu = document.querySelector(".list-menu");

const updateMenu = () => {
  let menu = JSON.parse(localStorage.getItem("menu"));
  if (!menu) {
    menu = [];
  }
  listMenu.innerHTML = "";
  listMenu.insertAdjacentHTML(
    "afterbegin",
    menu
      .map(
        (item, index) => `<li class="list-item" id=${index}>
        <div><p>${item.desertName}</p>
    
          <form class="form-ingredients" id=${index}>
            <label>
              Інгредієнти:
              <input type="text" name="ingredients" id="ingredients" required/>
            </label>

            <label>
              Кількість г/ш в рецепті:
              <input type="text" name="numb" id="numb" required/>
            </label>
            <button type="submit" class="btn-add">Додати інгредієнт</button>
          </form>
          </div>
              <button type="button" class="btn-delete" data-delete="delete" id=${index}>Видалити</button>
            </li>`
      )
      .join("")
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
  };

  data.push(menu);
  localStorage.setItem("menu", JSON.stringify(data));
  updateMenu();
  desert.value = "";
};

form.addEventListener("submit", createMenu);

listMenu.addEventListener("click", (e) => {
  if (e.target.hasAttribute("data-delete")) {
    const id = e.target.id;
    let menu = JSON.parse(localStorage.getItem("menu")) || [];
    menu.splice(id, 1);
    localStorage.setItem("menu", JSON.stringify(menu));
    updateMenu();
  }
});


updateMenu();