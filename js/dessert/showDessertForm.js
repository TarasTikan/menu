import {dessertForm, btnAddDessertEl} from '../utils/domRef.js';

export const showDessertForm = (e) => {
  dessertForm.classList.remove("hidden");
  btnAddDessertEl.classList.add("hidden");
};