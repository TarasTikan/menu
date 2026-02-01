import { getDesserts, setDesserts, updateListMenu } from "../utils/storage.js";

export const removeDessert = (e) => {
  if (e.target.hasAttribute("data-delete")) {
    if (!confirm("Ти впевнений(а), що хочеш видалити цей десерт?")) return;
    const data = getDesserts().filter(
      (item) => item.index !== Number(e.target.id)
    );
    setDesserts(data);
    updateListMenu();
  }
};
