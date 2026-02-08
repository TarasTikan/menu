export const addDiameterDessert = (e: Event) => {
    const target = e.target as HTMLButtonElement
    target.insertAdjacentHTML("afterend", `<div class="backdrop"> <div class="modalWindow">
        <form class="formDiameter">
        <h2 class="titleForm">Додайте розмір форми десерту</h2>
        <input class="input-diameter"/>
        <button type="submit" class="btn-successfully-dessert">Готовий десерт</button>
        </form>
        </div> </div>`)
}