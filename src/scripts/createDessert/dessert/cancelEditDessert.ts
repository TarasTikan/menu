import { dessertContainer } from "../../dom/domRefMain.ts";
import { updateMenu } from "../../features/dessert.ts";

export const cancelEditDessert = (e: Event) => {
  if ((e.target as HTMLElement).hasAttribute("data-cancel")) {
    const formEditDessert = dessertContainer.querySelector<HTMLFormElement>(".form-edit-dessert");
    if(!formEditDessert) return;
    formEditDessert.remove();
    updateMenu();
  }
};
