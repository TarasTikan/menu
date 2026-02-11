export type Dessert = {
  desertName: string;
  index: number;
  recipeGroup: Recipe[];
  notes?: string;
  diametrDessert?: number
};

export type Recipe = {
  recipeName: string;
  index: number;
  recipeIngredienst: Ingredient[];
};

export type Ingredient = {
  ingredients: string;
  index: number;
  numb: string
};
