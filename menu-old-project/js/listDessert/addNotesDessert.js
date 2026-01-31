import {
  findDessert,
  getDesserts,
  setDesserts,
  updateListMenu,
} from "../utils/storage.js";

export const addNotesDessert = (e) => {
  e.preventDefault();
  const { notes } = e.target.elements;
  const data = getDesserts();
  const dessert = findDessert(data, e.target.id);
  if (!dessert) return;
  dessert.notes = notes.value;
  setDesserts(data);
  updateListMenu();
};
