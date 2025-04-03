import { library } from "@fortawesome/fontawesome-svg-core";
import { faClipboardList, faWrench, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Agregar los iconos a la librería
library.add(faClipboardList, faWrench, faCheckCircle);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
