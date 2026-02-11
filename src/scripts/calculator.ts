import { calculationDessert } from "./calculatorDessert/calculationDessert";
import { formCalculation } from "./dom/domCalculatorDessert";
import { renderDessertsSelect } from "./features/calculator";
import { animateCalculatorDessertSelector } from "./utils/animate";
import { loaderCookies } from "./utils/loader";

window.addEventListener("load", loaderCookies);
formCalculation.addEventListener("submit", calculationDessert);
renderDessertsSelect();
animateCalculatorDessertSelector();
