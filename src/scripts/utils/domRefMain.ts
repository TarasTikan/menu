export function helpersDomRef<T extends HTMLElement>(selector: string): T {
  const element = document.querySelector<T>(selector);
  if (!element) {
    throw new Error(`Element with selector "${selector}" not found.`);
  }
  return element;
}

export const mainTitleEl = helpersDomRef<HTMLHeadingElement>(".title-dessert");
export const dessertForm = helpersDomRef<HTMLFormElement>(".form-container-dessert");
export const dessertContainer = helpersDomRef<HTMLDivElement>(".list-recepie-dessert");
export const recipeContainer = helpersDomRef<HTMLUListElement>(".list-ingredients-recepie",);
export const btnAddDessertEl = helpersDomRef<HTMLButtonElement>(".add-btn-dessert");
export const btnFinalizeDessertEl = helpersDomRef<HTMLButtonElement>(".btn-successfully-dessert");

