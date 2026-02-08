import {
  dessertContainer,
  recipeContainer,
  btnAddDiametrDessertEl,
  btnAddDessertEl,
  mainTitleEl,
  backDrop,
  modalDiametr,
} from "../../dom/domRefMain.ts";
import { getDesserts, getMenuData, setDesserts } from "../../utils/storage.ts";
import Toast from "typescript-toastify";

export const finalizeDessert = (e: Event): void => {
  e.preventDefault();
  const form = (e.target as HTMLElement).closest<HTMLFormElement>(
    ".formDiameter",
  );
  if (!form) return
  const data = getMenuData();
  const diametr = (form.elements.namedItem("diametr") as HTMLInputElement).value
  if (!diametr || !data) return;
  const dataListMenu = getDesserts() ?? [];
  dataListMenu.push({ ...data, diametrDessert: Number(diametr) });
  setDesserts(dataListMenu);
  localStorage.removeItem("menu");
  dessertContainer.innerHTML = "";
  recipeContainer.innerHTML = "";
  form.reset()
  btnAddDiametrDessertEl.classList.add("hidden");
  btnAddDessertEl.classList.remove("hidden");
  mainTitleEl.classList.remove("hidden");
  backDrop.classList.remove("is-open");
  modalDiametr.classList.remove("is-open")
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
