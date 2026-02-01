import {
  mainTitleEl,
  dessertContainer,
  recipeContainer,
  btnAddDessertEl,
  btnFinalizeDessertEl,
} from "../../dom/domRefMain.js";

export const deleteDessert = (e: Event) => {
  if (e.target && (e.target as HTMLElement).hasAttribute("data-delete")) {
    localStorage.removeItem("menu");
    dessertContainer.innerHTML = "";
    recipeContainer.innerHTML = "";
    btnAddDessertEl.classList.remove("hidden");
    btnFinalizeDessertEl.classList.add("hidden");
    mainTitleEl.classList.remove("hidden");
  }
};
