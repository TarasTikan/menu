
// import {
//   dessertForm,
//   dessertContainer,
//   // recipeContainer,
//   btnAddDessertEl,
//   // btnFinalizeDessertEl,
// } from "./utils/domRef.js";
// import { showDessertForm } from "./createDessert/dessert/showDessertForm.js";
// import { deleteDessert } from "./createDessert/dessert/deleteDessert.js";
// import { addDessert } from "./createDessert/dessert/addDessert.js";
// import { showEditDessertForm } from "./createDessert/dessert/showEditDessertForm.js";
// import { cancelEditDessert } from "./createDessert/dessert/cancelEditDessert.js";
// import { saveEditedDessert } from "./createDessert/dessert/saveEditedDessert.js";
// import { showRecipeForm } from "./createDessert/recipe/showRecipeForm.js";
// import { deleteRecipe } from "./createDessert/recipe/deleteRecipe.js";
// import { addRecipe } from "./createDessert/recipe/addRecipe.js";
// import { showEditRecipeForm } from "./createDessert/recipe/showEditRecipeForm.js";
// import { saveEditedRecipe } from "./createDessert/recipe/saveEditedRecipe.js";
// import { cancelEditRecipe } from "./createDessert/recipe/cancelEditRecipe.js";
// import { showIngredientForm } from "./createDessert/ingredient/showIngredientForm.js";
// import { deleteIngredient } from "./createDessert/ingredient/deleteIngredient.js";
// import { addIngredient } from "./createDessert/ingredient/addIngredient.js";
// import { toggleIngredientsVisibility } from "./createDessert/ingredient/toggleIngredientsVisibility.js";
// import { showEditIngredientForm } from "./createDessert/ingredient/showEditIngredientForm.js";
// import { saveEditedIngredient } from "./createDessert/ingredient/saveEditedIngredient.js";

import { addDessert } from "./createDessert/dessert/addDessert";
import { btnFinalizeDessertEl, dessertContainer, dessertForm, recipeContainer } from "./utils/domRefMain";
import { showDessertForm } from "./createDessert/dessert/showDessertForm";
import { btnAddDessertEl } from "./utils/domRefMain";
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
import { updateMenu } from "./utils/storage";
import { finalizeDessert } from "./createDessert/dessert/finalizeDessert";

// import { finalizeDessert } from "./createDessert/dessert/finalizeDessert.js";
// import { updateMenu } from "./utils/storage.js";
// import {loaderCookies} from "./utils/loader.js"


window.addEventListener("load", loaderCookies);

btnAddDessertEl.addEventListener("click", showDessertForm);
dessertContainer.addEventListener("click", deleteDessert);
dessertForm.addEventListener("submit", addDessert);
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

btnFinalizeDessertEl.addEventListener("click", finalizeDessert);

updateMenu(); 
