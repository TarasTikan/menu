import { getMenuData, setMenuData, updateMenu } from "../../utils/storage.js";

export const saveEditedDessert = (e) => {
  e.preventDefault();
  if (e.target.name !== "edit-dessert") return;
  const { desertName } = e.target.elements;
  const data = getMenuData();
  if (!data) return;
  data.desertName = desertName.value;
  setMenuData(data);
  updateMenu();
};
