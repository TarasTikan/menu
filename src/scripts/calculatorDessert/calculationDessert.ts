import { formCalculation } from "../dom/domCalculatorDessert";
import { diameters, diametersRows, type Diameter } from "./dataDiametr";

export const calculatioDessert = (e: Event) => {
    e.preventDefault()
    const selectDiametrNeed = Number((formCalculation.elements.namedItem("diametrDessertNeed") as HTMLSelectElement).value) as Diameter  
    const selectDiametrDessert = (formCalculation.elements.namedItem("diametrDessert") as HTMLSelectElement).value
    const findInd = diameters.findIndex(item => item === Number(selectDiametrDessert))
    const coefficient = diametersRows[selectDiametrNeed][findInd]

}