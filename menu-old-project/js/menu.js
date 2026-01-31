import { listMenu, formFilter } from "./utils/domRef.js";
import { updateListMenu } from "./utils/storage.js";
import { removeDessert } from "./listDessert/removeDessert.js";
import { showFormNotesDessert } from "./listDessert/showFormNotesDessert.js";
import { addNotesDessert } from "./listDessert/addNotesDessert.js";
import { filtrDessertsMenu } from "./listDessert/filtrDessertsMenu.js";
import {loaderCookies} from "./utils/loader.js"

window.addEventListener("load", loaderCookies);

formFilter.addEventListener("input", filtrDessertsMenu);
listMenu.addEventListener("submit", addNotesDessert);
listMenu.addEventListener("click", showFormNotesDessert);
listMenu.addEventListener("click", removeDessert);
updateListMenu();
