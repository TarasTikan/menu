export const showIngredientForm = (e: Event) => {
  const target = e.target as HTMLButtonElement;
  if (target.hasAttribute("data-add")) {
    const liElement = target.closest<HTMLLIElement>("li");
    if (!liElement) return;
    const formRecepieIngredients = liElement.querySelector<HTMLFormElement>(
      ".form-recepie-ingredients"
    );
    const containerWrapBtn = liElement.querySelector<HTMLDivElement>(".wrap-btn")
  
if(!formRecepieIngredients || !containerWrapBtn) return
     if (formRecepieIngredients.classList.contains("hidden")) {
    formRecepieIngredients.classList.remove("hidden");
    target.remove();
    containerWrapBtn.insertAdjacentHTML("afterbegin", `<button type="button" class="btn-dessert" data-add="add" id=${target.id}>Приховати форму інгредієнту</button>`);
  } else {
    formRecepieIngredients.classList.add("hidden");
    target.remove();
    containerWrapBtn.insertAdjacentHTML("afterbegin", `<button type="button" class="btn-dessert" data-add="add" id=${target.id}>Додати інгредієнт</button>`);
  }
  }
};
