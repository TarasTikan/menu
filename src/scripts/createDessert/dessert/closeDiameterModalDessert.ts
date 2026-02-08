import { backDrop, modalDiametr } from "../../dom/domRefMain";

export const closeDiameterModalDessert = (e: Event) => {
    const backDropEl = (e.target as HTMLDivElement).classList.contains('backdrop')
    const btnClose = (e.target as HTMLDivElement).classList.contains('btn-close')
    if(backDropEl || btnClose) {
        backDrop.classList.remove("is-open");
        modalDiametr.classList.remove("is-open")
    }
  }