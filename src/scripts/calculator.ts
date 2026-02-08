import { calculatioDessert } from "./calculatorDessert/calculationDessert";
import { formCalculation } from "./dom/domCalculatorDessert";
import { renderDessertsSelect } from "./features/calculator";
import { loaderCookies } from "./utils/loader";

window.addEventListener("load", loaderCookies);
formCalculation.addEventListener("submit", calculatioDessert)
renderDessertsSelect()