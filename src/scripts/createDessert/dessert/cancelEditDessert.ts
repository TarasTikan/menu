import { dessertContainer } from "../../utils/domRefMain.ts";
import { updateMenu } from "../../utils/storage.js";

export const cancelEditDessert = (e: Event) => {
  if ((e.target as HTMLElement).hasAttribute("data-cancel")) {
    const formEditDessert = dessertContainer.querySelector<HTMLFormElement>(".form-edit-dessert");
    if(!formEditDessert) return;
    formEditDessert.remove();
    updateMenu();
  }
};
