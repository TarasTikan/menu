import { helpersDomRef } from "./domRefMain";

export const loaderCookies = () => {
  const preloader = helpersDomRef<HTMLDivElement>("#preloader");
  const main = helpersDomRef<HTMLElement>("main");
  preloader.style.display = "none";
  main.style.display = "block";
};
