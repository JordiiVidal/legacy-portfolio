import '../styles/styles.scss'

import { switchThemeButton, initializeTheme } from "./theme";

function setupSettings() {
    initializeTheme();
    switchThemeButton();
}

(function run(){
    setupSettings();
})();