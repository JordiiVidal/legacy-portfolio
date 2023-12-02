import '../styles/styles.scss'
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.scss'

import { switchThemeButton, initializeTheme } from './theme';
import { headerStyle } from './header';

function setupSettings() {
    //Theme
    initializeTheme();
    switchThemeButton();
    
    //Header
    headerStyle();
}


( function run(){
    'use strict'
    setupSettings();
})();