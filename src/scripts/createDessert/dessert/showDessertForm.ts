import { btnAddDessertEl } from "../../dom/domRefMain.ts";
import { animateDessertSelector, } from "../../utils/animate.ts";

export const showDessertForm = (e: Event) => {
  const target = e.target as HTMLButtonElement;
  animateDessertSelector();
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
