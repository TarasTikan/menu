import { dessertContainer } from "../utils/domRef.js";
import { getMenuData } from "../utils/storage.js";

export const showEditDessertForm = (e) => {
if (e.target.hasAttribute("data-edit")) { 
  const data = getMenuData(); 
  const btnDeleteDessert = dessertContainer.querySelector( "button[data-delete='delete']" ); 
  const btnAddDessertEl = dessertContainer.querySelector("button[data-add='add']"); 
  e.target.remove(); 
  btnAddDessertEl.remove(); 
  btnDeleteDessert.remove(); 
  dessertContainer.querySelector(".title-dessert").remove();
    dessertContainer.insertAdjacentHTML(
      "afterbegin",
      `<form class="form-edit-dessert" name="edit-dessert" id=${data.recipeGroup.index}>
 <input type="text" name="desertName" class="input-title-recepie" value="${data.desertName}" required/>

  <div class="wrap-btn">
    <button type="submit" class="btn-dessert">Зберегти</button>
    <button type="button" class="btn-dessert" data-cancel="cancel">Скасувати</button>
  </div>
 </form>
 `
    );
  }
};