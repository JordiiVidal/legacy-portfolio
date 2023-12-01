import { switchThemeButton, initializeTheme } from "./src/theme";

function setupSettings() {
    initializeTheme();
    switchThemeButton();
}

(function run(){
    setupSettings();
})();