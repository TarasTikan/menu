import { dessertContainer } from "../utils/domRef.js";
import { updateMenu } from "../utils/storage.js";

export const cancelEditDessert = (e) => {
  if (e.target.hasAttribute("data-cancel")) {
    const formEditDessert = dessertContainer.querySelector(".form-edit-dessert");
    formEditDessert.remove();
    updateMenu();
  }
};