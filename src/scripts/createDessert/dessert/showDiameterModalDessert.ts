import Toast from "typescript-toastify";
import { getMenuData } from "../../utils/storage";
import { backDrop, modalDiametr } from "../../dom/domRefMain";

export const showDiameterModalDessert = () => {
  const data = getMenuData();
  if (!data) return
  const checkRecepie = data.recipeGroup.every(item => item.recipeIngredienst.length !== 0)
  if (!checkRecepie) {
    new Toast({
      position: "top-right",
      toastMsg: "Один з рецептів без інгредієнтів",
      autoCloseTime: 2000,
      canClose: true,
      showProgress: true,
      pauseOnHover: true,
      pauseOnFocusLoss: true,
      type: "error",
      theme: "light"
    })
    return
  }
  backDrop.classList.add("is-open");
  modalDiametr.classList.add("is-open")
}