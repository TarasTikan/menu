import { dessertForm, btnAddDessertEl } from "../../dom/domRefMain.ts";

export const showDessertForm = (e: MouseEvent) => {
  dessertForm.classList.remove("hidden");
  btnAddDessertEl.classList.add("hidden");
  const target = e.target as HTMLButtonElement;
  if (!target) return;
};
