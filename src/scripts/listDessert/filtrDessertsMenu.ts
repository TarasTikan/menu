import { updateListMenu } from "../features/listDessert";
import { getDesserts } from "../utils/storage.js";

export const filtrDessertsMenu = (e: Event) => {
  const data = getDesserts();
  const target = e.target as HTMLInputElement;
  if (!data) return;
  const filtrDessert = data.filter((item) =>
    item.desertName.toLowerCase().includes(target.value.toLowerCase() || ""),
  );
  if (!filtrDessert || filtrDessert.length === 0) return;
  updateListMenu(filtrDessert);
};
