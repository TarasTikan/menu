import { updateListMenu } from "../features/listDessert.js";
import { findDessert, getDesserts, setDesserts } from "../utils/storage.js";

export const addNotesDessert = (e: Event) => {
  e.preventDefault();
  const target = e.target as HTMLFormElement;
  if (!target.hasAttribute("data-notes")) return;
  const notes = (target.elements.namedItem("notes") as HTMLTextAreaElement)
    .value;
  const data = getDesserts();
  if (!data) return;
  const dessert = findDessert(data, Number(target.id));
  if (!dessert) return;
  dessert.notes = notes;
  setDesserts(data);
  updateListMenu();
};
