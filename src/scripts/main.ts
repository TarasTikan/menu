import { addDessert } from "./createDessert/dessert/addDessert";
import {
  btnFinalizeDessertEl,
  dessertContainer,
  mainContainerEl,
  recipeContainer,
} from "./dom/domRefMain";
import { showDessertForm } from "./createDessert/dessert/showDessertForm";
import { btnAddDessertEl } from "./dom/domRefMain";
import { loaderCookies } from "./utils/loader";
import { deleteDessert } from "./createDessert/dessert/deleteDessert";
import { showEditDessertForm } from "./createDessert/dessert/showEditDessertForm";
import { cancelEditDessert } from "./createDessert/dessert/cancelEditDessert";
import { saveEditedDessert } from "./createDessert/dessert/saveEditedDessert";
import { showRecipeForm } from "./createDessert/recipe/showRecipeForm";
import { addRecipe } from "./createDessert/recipe/addRecipe";
import { showEditRecipeForm } from "./createDessert/recipe/showEditRecipeForm";
import { saveEditedRecipe } from "./createDessert/recipe/saveEditedRecipe";
import { deleteRecipe } from "./createDessert/recipe/deleteRecipe";
import { cancelEditRecipe } from "./createDessert/recipe/cancelEditRecipe";
import { showIngredientForm } from "./createDessert/ingredient/showIngredientForm";
import { addIngredient } from "./createDessert/ingredient/addIngredient";
import { toggleIngredientsVisibility } from "./createDessert/ingredient/toggleIngredientsVisibility";
import { deleteIngredient } from "./createDessert/ingredient/deleteIngredient";
import { showEditIngredientForm } from "./createDessert/ingredient/showEditIngredientForm";
import { saveEditedIngredient } from "./createDessert/ingredient/saveEditedIngredient";
import { finalizeDessert } from "./createDessert/dessert/finalizeDessert";
import { updateMenu } from "./features/dessert";
import {addDiameterDessert} from './createDessert/dessert/addDiameterDessert'
window.addEventListener("load", loaderCookies);

btnAddDessertEl.addEventListener("click", showDessertForm);
dessertContainer.addEventListener("click", deleteDessert);
document.addEventListener("submit", addDessert);
dessertContainer.addEventListener("click", showEditDessertForm);
dessertContainer.addEventListener("submit", saveEditedDessert);
dessertContainer.addEventListener("click", cancelEditDessert);

dessertContainer.addEventListener("click", showRecipeForm);
recipeContainer.addEventListener("click", deleteRecipe);
dessertContainer.addEventListener("submit", addRecipe);
recipeContainer.addEventListener("click", showEditRecipeForm);
recipeContainer.addEventListener("submit", saveEditedRecipe);
recipeContainer.addEventListener("click", cancelEditRecipe);

recipeContainer.addEventListener("click", showIngredientForm);
recipeContainer.addEventListener("click", deleteIngredient);
recipeContainer.addEventListener("submit", addIngredient);
recipeContainer.addEventListener("click", toggleIngredientsVisibility);
recipeContainer.addEventListener("click", showEditIngredientForm);
recipeContainer.addEventListener("submit", saveEditedIngredient);

btnFinalizeDessertEl.addEventListener("click", addDiameterDessert);

updateMenu();

