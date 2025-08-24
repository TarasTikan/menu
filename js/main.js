const form = document.querySelector(".form-container");
const listMenu = document.querySelector(".list-menu");
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
        (item) => `<li class="list-item"><p>${item.desertName}</p>
              <button type="button" class="btn-delete">Видалити</button>
            </li>`
      )
      .join("")
  );
};

updateMenu();
form.addEventListener("submit", createMenu);
