export const loaderCookies = (e) => {
  const preloader = document.getElementById("preloader");
  const main = document.querySelector("main");
  preloader.style.display = "none";
  main.style.display = "block";
};
