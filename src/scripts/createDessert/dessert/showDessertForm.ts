import { dessertForm, btnAddDessertEl } from "../../dom/domRefMain.ts";

export const showDessertForm = () => {
  dessertForm.classList.remove("hidden");
  btnAddDessertEl.classList.add("hidden");

};
