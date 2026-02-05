export const toggleIngredientsVisibility = (e: Event) => {
  const btn = (e.target as HTMLElement).closest<HTMLButtonElement>(
    ".visible-btn",
  );
  if (!btn) return;

  const recipeItem = btn.closest<HTMLLIElement>("li");
  if (!recipeItem) return;

  const list = recipeItem.querySelector<HTMLUListElement>(
    ".list-ingredients-recepie",
  );
  const header = recipeItem.querySelector<HTMLDivElement>(
    ".wrap-title-ingredients",
  );
  if (!list || !header) return;
  if (list.classList.contains("hidden")) {
    list.classList.remove("hidden");
    btn.remove();
    header.insertAdjacentHTML(
      "beforeend",
      `<button type="button" class="visible-btn">Сховати</button>`,
    );
  } else {
    list.classList.add("hidden");
    btn.remove();
    header.insertAdjacentHTML(
      "beforeend",
      `<button type="button" class="visible-btn">Показати</button>`,
    );
  }
};
