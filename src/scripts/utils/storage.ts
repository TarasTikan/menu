import type { Dessert, Ingredient, Recipe } from "../types/types.ts";

export const setMenuData = (data: Dessert): void =>
  localStorage.setItem("menu", JSON.stringify(data));

export const getMenuData = (): Dessert | null => {
  const data = localStorage.getItem("menu");
  if (!data) {
    return null;
  }
  return JSON.parse(data) as Dessert;
};

export const generateUniqueNumber = (): number => {
  return Date.now() + Math.floor(Math.random() * 1000);
};

export const findById = (data: Recipe[] | Ingredient[], id: number) =>
  data.findIndex((item) => item.index === Number(id));

export const getDesserts = (): Dessert[] | null => {
  const data = localStorage.getItem("listMenuDesert");
  if (!data) {
    return null;
  }
  return JSON.parse(data) as Dessert[];
};

export const setDesserts = (data: Dessert[]): void =>
  localStorage.setItem("listMenuDesert", JSON.stringify(data));

export const findDessert = (data: Dessert[], id: number): Dessert | undefined =>
  data.find((item) => item.index === Number(id));
