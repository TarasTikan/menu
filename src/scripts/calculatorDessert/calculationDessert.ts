import { formCalculation } from "../dom/domCalculatorDessert";
import { renderCardUpdate } from "../features/calculator";
import { getDesserts } from "../utils/storage";
import { diameters, diametersRows, type Diameter } from "./dataDiametr";

export const calculationDessert = (e: Event) => {
  e.preventDefault();
  const listDesserts = getDesserts();
  if (!listDesserts) return;
  const selectDiametrNeed = Number(
    (
      formCalculation.elements.namedItem(
        "diametrDessertNeed",
      ) as HTMLSelectElement
    ).value,
  ) as Diameter;
  const selectDiametrDessert = formCalculation.elements.namedItem(
    "diametrDessert",
  ) as HTMLSelectElement;
  const selectedOptionDessert = selectDiametrDessert
    .selectedOptions[0] as HTMLOptionElement;
  const findInd = diameters.findIndex(
    (item) => item === Number(selectDiametrDessert.value),
  );
  const findDessert = listDesserts.find(
    (item) => item.index === Number(selectedOptionDessert.id),
  );
  const coefficient = diametersRows[selectDiametrNeed][findInd];
  if (!findDessert) return;
  const resultDessert = {
    ...findDessert,
    diametrDessert: selectDiametrNeed,
    recipeGroup: findDessert.recipeGroup.map((item) => ({
      ...item,
      recipeIngredienst: item.recipeIngredienst.map((ing) => ({
        ...ing,
        numb: String((Number.parseInt(ing.numb) * coefficient).toFixed(1)),
      })),
    })),
  };
  if (!resultDessert) return;
  renderCardUpdate(resultDessert);
};
