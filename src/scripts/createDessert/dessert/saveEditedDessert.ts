import { updateMenu } from "../../features/dessert.ts";
import { getMenuData, setMenuData } from "../../utils/storage.ts";

export const saveEditedDessert = (e: Event) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  if (!form) return;
  const desertName = form.elements.namedItem("desertName") as HTMLInputElement;
  if (!desertName) return;
  const data = getMenuData();
  if (!data) return;
  data.desertName = desertName.value;
  setMenuData(data);
  updateMenu();
};
