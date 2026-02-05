import { btnAddDessertEl } from "../../dom/domRefMain.ts";

import autoAnimate from "@formkit/auto-animate";

export const showDessertForm = (e: Event) => {
  const target = e.target as HTMLButtonElement;
  const containerWrapBtn = target.closest<HTMLLIElement>(".container");
  if (!containerWrapBtn) return;
  autoAnimate(containerWrapBtn);
  target.insertAdjacentHTML(
    "afterend",
    `<form class="form-container-dessert">
            <label for="dessert" class="label-input-dessert">Назва десерту</label>
            <input
              type="text"
              name="dessertName"
              id="dessert"
              class="input-dessert"
            />
            <button type="submit" class="btn-create-dessert">Готово</button>
          </form>`,
  );
  btnAddDessertEl.classList.add("hidden");
};
