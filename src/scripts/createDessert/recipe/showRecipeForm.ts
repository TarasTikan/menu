export const showRecipeForm = (e: Event) => {
  const target = e.target as HTMLButtonElement;
  if (target.hasAttribute("data-add")) {
    const containerWrapBtn = target.closest<HTMLLIElement>(".wrap-btn");
    const formRecipe = document.querySelector<HTMLFormElement>(".form-recepie");
    if (!containerWrapBtn) return;
    if (!formRecipe) {
      containerWrapBtn.insertAdjacentHTML(
        "afterend",
        `<form class="form-recepie" id=${target.id}>
            <label class="label-title-recepie">
              Назва рецепту
              <input type="text" name="nameRecipe" class="input-title-recepie" required/>
            </label>
            <button type="submit" class="btn-dessert" id=${target.id}>Додати рецепт</button>
          </form>`,
      );
    }

    if (formRecipe) {
      formRecipe.remove();
      target.remove();
      containerWrapBtn.insertAdjacentHTML(
        "afterbegin",
        `<button type="button" class="btn-create-recepie" data-add="add" id=${target.id}>Додати до десерту рецепт</button>`,
      );
    } else {
      target.remove();
      containerWrapBtn.insertAdjacentHTML(
        "afterbegin",
        `<button type="button" class="btn-create-recepie" data-add="add" id=${target.id}>Приховати форму рецепту</button>`,
      );
    }
  }
};
