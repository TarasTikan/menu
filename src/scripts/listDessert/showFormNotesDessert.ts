import { findDessert, getDesserts } from "../utils/storage.js";

export const showFormNotesDessert = (e: Event) => {
  const target = e.target as HTMLButtonElement;
  if (target.hasAttribute("data-notes")) {
    const data = getDesserts();
    if (!data) return;
    const dessert = findDessert(data, Number(target.id));
    const wrapBtn = target.closest<HTMLDivElement>(".wrap-btn");
    if (!dessert || !wrapBtn) return;
    target.remove();
    wrapBtn.insertAdjacentHTML(
      "beforebegin",
      `<form class="form-notes" id=${target.id}>
  <textarea name="notes" class="textarea-notes" placeholder="Введіть нотатки..." >${
    dessert.notes || ""
  }</textarea>
  <button type="submit" class="btn-dessert">Зберегти</button></form>`
    );
  }
};
