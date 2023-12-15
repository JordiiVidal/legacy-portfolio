import '../styles/styles.scss'

import { switchThemeButton, initializeTheme } from './theme';
import { headerStyle, navigationHeader } from './header';

function setup() {
    //Theme
    initializeTheme();
    switchThemeButton();
    
    //Header
    headerStyle();
    navigationHeader();
}

( function run(){
    'use strict'
    setup();
})();