import { formFilter, listMenu } from "./dom/domRefListDesserts.ts";
import { updateListMenu } from "./features/listDessert.ts";
import { addNotesDessert } from "./listDessert/addNotesDessert.ts";
import { filtrDessertsMenu } from "./listDessert/filtrDessertsMenu.ts";
import { removeDessert } from "./listDessert/removeDessert.ts";
import { showFormNotesDessert } from "./listDessert/showFormNotesDessert.ts";
import { loaderCookies } from "./utils/loader.ts";

window.addEventListener("load", loaderCookies);

formFilter.addEventListener("input", filtrDessertsMenu);
listMenu.addEventListener("submit", addNotesDessert);
listMenu.addEventListener("click", showFormNotesDessert);
listMenu.addEventListener("click", removeDessert);
updateListMenu();
