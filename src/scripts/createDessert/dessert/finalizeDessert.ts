import {
  dessertContainer,
  recipeContainer,
  btnFinalizeDessertEl,
  btnAddDessertEl,
  mainTitleEl,
} from "../../dom/domRefMain.ts";
import { getDesserts, getMenuData, setDesserts } from "../../utils/storage.ts";
import Toast from "typescript-toastify";

export const finalizeDessert = (): void => {
  const data = getMenuData();
  if (!data) return;
 const checkRecepie = data.recipeGroup.every(item => item.recipeIngredienst.length !== 0)
 if(!checkRecepie) {
 return new Toast({
  position: "top-right",
  toastMsg: "Один з рецептів без інгредієнтів",
  autoCloseTime: 2000,
  canClose: true,
  showProgress: true,
  pauseOnHover: true,
  pauseOnFocusLoss: true,
  type: "error",
  theme: "light"
})
 }
  const dataListMenu = getDesserts() ?? [];
  dataListMenu.push(data);
  setDesserts(dataListMenu);
  localStorage.removeItem("menu");
  dessertContainer.innerHTML = "";
  recipeContainer.innerHTML = "";
  btnFinalizeDessertEl.classList.add("hidden");
  btnAddDessertEl.classList.remove("hidden");
  mainTitleEl.classList.remove("hidden");

  new Toast({
    position: "top-right",
    toastMsg: "Десерт успішно створено",
    autoCloseTime: 2000,
    canClose: true,
    showProgress: true,
    pauseOnHover: true,
    pauseOnFocusLoss: true,
    type: "success",
    theme: "light",
  });
};
