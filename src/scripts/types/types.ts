export type Dessert = {
  desertName: string;
  index: number;
  recipeGroup: Recipe[];
  notes?: string;
};

export type Recipe = {
  recipeName: string;
  index: number;
  recipeIngredienst: Ingredient[];
};

export type Ingredient = {
  ingredients: string;
  index: number;
  numb: string;
};
