import ScrollSuave from "./modules/scroll-suave.js";
import initAnimacaoScroll from "./modules/anima-scroll.js";
import initModal from "./modules/modal.js"
import initToolTip from "./modules/tooltip.js"
import initDropDownMenu from "./modules/dropdown-menu.js"
import initMenuMobile from "./modules/menu-mobile.js"
import initFuncionamento from "./modules/funcionamento.js"
import initFetchAnimais from "./modules/fetch-animais.js"
import initFetchBitcoin from "./modules/bitcoin.js"
import { initAccordion } from "./modules/accordion.js";
import { initTabNav } from "./modules/tabNavigation.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initAnimacaoScroll();
initAccordion();
initTabNav();
initModal();
initToolTip();
initDropDownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();