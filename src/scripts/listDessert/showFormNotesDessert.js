import { findDessert, getDesserts } from "../utils/storage.js";

export const showFormNotesDessert = (e) => {
  if (e.target.hasAttribute("data-notes")) {
    const data = getDesserts();
    const dessert = findDessert(data, e.target.id);
    const wrapBtn = e.target.closest(".wrap-btn");
    e.target.remove();
    wrapBtn.insertAdjacentHTML(
      "beforebegin",
      `<form class="form-notes" id=${e.target.id}>
  <textarea name="notes" class="textarea-notes" placeholder="Введіть нотатки..." >${
    dessert.notes || ""
  }</textarea>
  <button type="submit" class="btn-dessert">Зберегти</button></form>`
    );
  }
};
