import { mainTitleEl, dessertContainer, recipeContainer, btnAddDessertEl, btnFinalizeDessertEl } from '../utils/domRef.js';

export const deleteDessert = (e) => {
  if (e.target.hasAttribute("data-delete")) {
    localStorage.removeItem("menu");
    dessertContainer.innerHTML = "";
    recipeContainer.innerHTML = "";
    btnAddDessertEl.classList.remove("hidden");
    btnFinalizeDessertEl.classList.add("hidden");
    mainTitleEl.classList.remove("hidden");
  }
};