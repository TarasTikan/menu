import { dessertForm, btnAddDessertEl } from "../../utils/domRefMain.ts";

export const showDessertForm = () => {
  dessertForm.classList.remove("hidden");
  btnAddDessertEl.classList.add("hidden");
};
