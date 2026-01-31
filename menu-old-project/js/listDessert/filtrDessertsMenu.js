import { getDesserts, updateListMenu } from "../utils/storage.js";

export const filtrDessertsMenu = (e) => {
  const data = getDesserts();
  const filtrDessert = data.filter((item) =>
    item.desertName.toLowerCase().includes(e.target.value.toLowerCase())
  );
  if (!filtrDessert || filtrDessert.length === 0) return;
  updateListMenu(filtrDessert);
};
