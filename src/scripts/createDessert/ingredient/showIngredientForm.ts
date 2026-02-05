export const showIngredientForm = (e: Event) => {
  const target = e.target as HTMLButtonElement;
  if (target.hasAttribute("data-add")) {
    const liElement = target.closest<HTMLLIElement>("li");
    if (!liElement) return;
    const containerWrapBtn =
      liElement.querySelector<HTMLDivElement>(".wrap-btn");
    const formRecepieIngredients = liElement.querySelector<HTMLFormElement>(
      ".form-recepie-ingredients",
    );
    if (!containerWrapBtn) return;
    if (!formRecepieIngredients) {
      containerWrapBtn.insertAdjacentHTML(
        "afterend",
        ` <form class="form-recepie-ingredients" id=${target.id}>
                <label class="label-title-recepie">
              Інгредієнти:
              <input type="text" name="ingredients" class="input-title-recepie" required/>
            </label>

            <label class="label-title-recepie">
              Кількість г/ш в рецепті:
              <input type="text" name="numb" class="input-title-recepie" required/>
            </label>
            <button type="submit" class="btn-dessert">Додати інгредієнт</button>
          </form>`,
      );
    }

    if (formRecepieIngredients) {
      formRecepieIngredients.remove();
      target.remove();
      containerWrapBtn.insertAdjacentHTML(
        "afterbegin",
        `<button type="button" class="btn-dessert" data-add="add" id=${target.id}>Приховати форму інгредієнту</button>`,
      );
    } else {
      target.remove();
      containerWrapBtn.insertAdjacentHTML(
        "afterbegin",
        `<button type="button" class="btn-dessert" data-add="add" id=${target.id}>Додати інгредієнт</button>`,
      );
    }
  }
};
