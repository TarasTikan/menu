import Masonry from "masonry-layout";

let masonry: Masonry | null = null;
export const initMasonry = () => {
    const grid = document.querySelector<HTMLUListElement>(".list-menu-recepie");
  
    if (!grid) return;
  
    masonry = new Masonry(grid, {
      itemSelector: ".dessert-card",
      columnWidth: ".dessert-card",
      gutter: 15,
      fitWidth: true
    })
  };

  export const layoutMasonry = () => {
    if(!masonry) return
    masonry.layout?.();
  };