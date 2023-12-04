import '../styles/styles.scss'
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.scss'

import { switchThemeButton, initializeTheme } from './theme';
import { headerStyle, navigationHeader } from './header';

function setupSettings() {
    //Theme
    initializeTheme();
    switchThemeButton();
    
    //Header
    headerStyle();
    navigationHeader();
}


( function run(){
    'use strict'
    setupSettings();
})();