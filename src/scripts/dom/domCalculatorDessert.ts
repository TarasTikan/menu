function helpersDomRef<T extends HTMLElement>(selector: string): T {
    const element = document.querySelector<T>(selector);
    if (!element) {
      throw new Error(`Element with selector "${selector}" not found.`);
    }
    return element;
  }

  export const selectDesserts = helpersDomRef<HTMLSelectElement>(".select-desserts")
  export const formCalculation = helpersDomRef<HTMLFormElement>(".form-calculation")
  export const containerForm = helpersDomRef<HTMLDivElement>('.wrap-card')