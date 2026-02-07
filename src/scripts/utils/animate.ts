import autoAnimate from "@formkit/auto-animate";

export const animateDessertSelector = () => {
    const animateClass = [
      ".list-ingredients-item",
      ".wrap-recepie",
      ".wrap-btn",
      ".wrap-title-ingredients",
      ".container",
      ".list-recepie-dessert",
      ".list-ingredients-recepie"
    ];
    animateClass.forEach((selector) => {
      document
        .querySelectorAll<HTMLElement>(selector)
        .forEach((el) => autoAnimate(el));
    });
  };

  export const animateListDessertSelector = () => {
    const animateClass = [
      ".container",
      ".list-menu-recepie",
      ".dessert-card"
    ];
    animateClass.forEach((selector) => {
      document
        .querySelectorAll<HTMLElement>(selector)
        .forEach((el) => autoAnimate(el));
    });
  };