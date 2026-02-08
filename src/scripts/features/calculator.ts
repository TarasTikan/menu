import { selectDesserts } from "../dom/domCalculatorDessert"
import { getDesserts } from "../utils/storage"

export const renderDessertsSelect = () => {
    const data = getDesserts() || []
    if (data.length === 0) {
        return selectDesserts.insertAdjacentHTML("afterbegin", `<option value="Рецептів не знайдено">Рецептів не знайдено</option>`)
    }
    selectDesserts.insertAdjacentHTML("afterbegin", data.map(item => `<option value="${item.diametrDessert}" id="${item.index}">${item.desertName}, діаметр рецепту: ${item.diametrDessert} см </option>`).join(""))
}