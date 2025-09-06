import {
  dessertForm,
  dessertContainer,
  recipeContainer,
  btnAddDessertEl,
  btnFinalizeDessertEl,
} from "./utils/domRef.js";
import { showDessertForm } from "./createDessert/dessert/showDessertForm.js";
import { deleteDessert } from "./createDessert/dessert/deleteDessert.js";
import { addDessert } from "./createDessert/dessert/addDessert.js";
import { showEditDessertForm } from "./createDessert/dessert/showEditDessertForm.js";
import { cancelEditDessert } from "./createDessert/dessert/cancelEditDessert.js";
import { saveEditedDessert } from "./createDessert/dessert/saveEditedDessert.js";
import { showRecipeForm } from "./createDessert/recipe/showRecipeForm.js";
import { deleteRecipe } from "./createDessert/recipe/deleteRecipe.js";
import { addRecipe } from "./createDessert/recipe/addRecipe.js";
import { showEditRecipeForm } from "./createDessert/recipe/showEditRecipeForm.js";
import { saveEditedRecipe } from "./createDessert/recipe/saveEditedRecipe.js";
import { cancelEditRecipe } from "./createDessert/recipe/cancelEditRecipe.js";
import { showIngredientForm } from "./createDessert/ingredient/showIngredientForm.js";
import { deleteIngredient } from "./createDessert/ingredient/deleteIngredient.js";
import { addIngredient } from "./createDessert/ingredient/addIngredient.js";
import { toggleIngredientsVisibility } from "./createDessert/ingredient/toggleIngredientsVisibility.js";
import { showEditIngredientForm } from "./createDessert/ingredient/showEditIngredientForm.js";
import { saveEditedIngredient } from "./createDessert/ingredient/saveEditedIngredient.js";

import { finalizeDessert } from "./createDessert/dessert/finalizeDessert.js";
import { updateMenu } from "./utils/storage.js";

btnAddDessertEl.addEventListener("click", showDessertForm); // створює форму для додавання десерту
dessertContainer.addEventListener("click", deleteDessert); // видалення десерту
dessertForm.addEventListener("submit", addDessert); // створення десерту
dessertContainer.addEventListener("click", showEditDessertForm); // створює форму для редагування десерту
dessertContainer.addEventListener("submit", saveEditedDessert); // збереження відредагованого десерту
dessertContainer.addEventListener("click", cancelEditDessert); // скасування відредагованого рецепту

dessertContainer.addEventListener("click", showRecipeForm); // створює форму для додавання рецепта
recipeContainer.addEventListener("click", deleteRecipe); // видалення рецепта
dessertContainer.addEventListener("submit", addRecipe); // створення рецепта
recipeContainer.addEventListener("click", showEditRecipeForm); // створює форму для редагування рецепта
recipeContainer.addEventListener("submit", saveEditedRecipe); // збереження відредагованого рецепту
recipeContainer.addEventListener("click", cancelEditRecipe); // скасування відредагованого рецепту

recipeContainer.addEventListener("click", showIngredientForm); // створює форму для додавання інгредієнтів
recipeContainer.addEventListener("click", deleteIngredient); // видалення інгредієнта
recipeContainer.addEventListener("submit", addIngredient); // Створеняя інгредієнта
recipeContainer.addEventListener("click", toggleIngredientsVisibility); // показує/приховує інгредієнти
recipeContainer.addEventListener("click", showEditIngredientForm); // cтворення форми редагування інгредієнта
recipeContainer.addEventListener("submit", saveEditedIngredient); // збереження відредагованого інгредієнта

btnFinalizeDessertEl.addEventListener("click", finalizeDessert); // фінальна стадія десерту

updateMenu(); // оновлення рендеру
