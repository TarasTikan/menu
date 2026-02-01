function helpersDomRef<T extends HTMLElement>(selector: string): T {
  const element = document.querySelector<T>(selector);
  if (!element) {
    throw new Error(`Element with selector "${selector}" not found.`);
  }
  return element;
}
export const listMenu = helpersDomRef<HTMLUListElement>(".list-menu-recepie");
export const menuTitle = helpersDomRef<HTMLHeadingElement>(".menu-title-dessert");
export const formFilter = helpersDomRef<HTMLFormElement>(".form-filtr");
