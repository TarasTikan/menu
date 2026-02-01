import { dessertContainer} from "../../utils/domRefMain.ts";
import { getMenuData } from "../../utils/storage.ts";

export const showEditDessertForm = (e: Event) => {
  if ((e.target as HTMLElement).hasAttribute("data-edit")) {
    const data = getMenuData();
    const btnDeleteDessert = dessertContainer.querySelector<HTMLButtonElement>(
      "button[data-delete='delete']"
    );
    const btnAddDessertEl = dessertContainer.querySelector<HTMLButtonElement>(
      "button[data-add='add']"
    );
    if(!btnDeleteDessert || !btnAddDessertEl) return;
    (e.target as HTMLElement).remove();
    btnAddDessertEl.remove();
    btnDeleteDessert.remove();
    dessertContainer.querySelector<HTMLHeadingElement>(".title-dessert")?.remove();
    dessertContainer.insertAdjacentHTML(
      "afterbegin",
      `<form class="form-edit-dessert" name="edit-dessert" id=${data?.recipeGroup[0]?.index}>
 <input type="text" name="desertName" class="input-title-recepie" value="${data?.desertName}" required/>

  <div class="wrap-btn">
    <button type="submit" class="btn-dessert">Зберегти</button>
    <button type="button" class="btn-dessert" data-cancel="cancel">Скасувати</button>
  </div>
 </form>
 `
    );
  }
};
