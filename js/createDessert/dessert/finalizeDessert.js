import {
  dessertContainer,
  recipeContainer,
  btnFinalizeDessertEl,
  btnAddDessertEl,
  mainTitleEl,
} from "../../utils/domRef.js";
import { getMenuData } from "../../utils/storage.js";

export const finalizeDessert = (e) => {
  const data = getMenuData();
  if (!data) return;
  let dataListMenu = JSON.parse(localStorage.getItem("listMenuDesert"));
  if (!dataListMenu) {
    dataListMenu = [];
  }

  dataListMenu.push(data);
  localStorage.setItem("listMenuDesert", JSON.stringify(dataListMenu));
  localStorage.removeItem("menu");
  dessertContainer.innerHTML = "";
  recipeContainer.innerHTML = "";
  btnFinalizeDessertEl.classList.add("hidden");
  btnAddDessertEl.classList.remove("hidden");
  mainTitleEl.classList.remove("hidden");
  Toastify({
    text: "Десерт успішно створено",
    className: "info",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
};
