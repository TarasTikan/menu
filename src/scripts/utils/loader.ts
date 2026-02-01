export const loaderCookies = () => {
  const preloader = document.querySelector<HTMLDivElement>("#preloader");
  const main = document.querySelector<HTMLElement>("main");
  if (preloader) {
    preloader.style.display = "none";
  }
  if (main) {
    main.style.display = "block";
  }
};
