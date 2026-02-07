import { layoutMasonry } from "../utils/masonry.js";
import { findDessert, getDesserts, setDesserts } from "../utils/storage.js";

export const addNotesDessert = (e: Event) => {
  e.preventDefault();
  const target = e.target as HTMLFormElement;
  if (!target.hasAttribute("data-notes")) return;
  const notes = (target.elements.namedItem("notes") as HTMLTextAreaElement).value;
  const containerCard = target.closest<HTMLLIElement>('.dessert-card')
  if (!containerCard) return
  const recipeList = containerCard.querySelector<HTMLUListElement>(".recipe-list")
  const paragrathNotes = containerCard.querySelector<HTMLParagraphElement>(".describe-dessert")
  const containerWrapBtn = containerCard.querySelector<HTMLDivElement>(".wrap-btn-dessert-card")
  if (!recipeList || !paragrathNotes || !containerWrapBtn) return
  const data = getDesserts();
  if (!data) return;
  const dessert = findDessert(data, Number(target.id));
  if (!dessert) return;
  dessert.notes = notes;
  setDesserts(data);
  target.remove()
  paragrathNotes.remove()
  if (!notes) {
    recipeList.insertAdjacentHTML("afterend", `<p class="describe-dessert"><strong>Нотатки:</strong> Немає нотаток</p>`)
  } else {
    recipeList.insertAdjacentHTML("afterend", `<p class="describe-dessert"><strong>Нотатки:</strong> ${dessert.notes}</p>`)
  }
  containerWrapBtn.insertAdjacentHTML("afterbegin", ` <button type="button" class="btn-dessert-card" data-notes="notes" id=${target.id}><svg class="icon-notes" width="15" height="15">
<use href="./img/icons.svg#icon-notes"></use>
</svg></button>`)
  layoutMasonry()
};
