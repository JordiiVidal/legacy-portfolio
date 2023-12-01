import { switchThemeButton } from "./src/theme";

const themeButton = document.getElementById('theme');

function setupSettings() {
    switchThemeButton(themeButton);
}

(function run(){
    setupSettings();
})();