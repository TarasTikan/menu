import { updateListMenu } from "../features/listDessert.js";
import { getDesserts, setDesserts } from "../utils/storage.js";

export const removeDessert = (e: Event) => {
  const target = e.target as HTMLButtonElement;
  if (target.hasAttribute("data-delete")) {
    if (!confirm("Ти впевнений(а), що хочеш видалити цей десерт?")) return;
    const data = getDesserts();
    if (!data) return;
    const filteredData = data.filter(
      (item) => item.index !== Number(target.id),
    );
    setDesserts(filteredData);
    updateListMenu(filteredData);
  }
};
