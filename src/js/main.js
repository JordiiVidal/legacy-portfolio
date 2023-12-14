import '../styles/styles.scss'

import { switchThemeButton, initializeTheme } from './layout/theme';
import { headerStyle, navigationHeader } from './layout/header';
import { scrollAnimations } from './layout/scroll';

function setupLayout() {
    scrollAnimations();

    //Theme
    initializeTheme();
    switchThemeButton();
    
    //Header
    headerStyle();
    navigationHeader();
}

( function run(){
    'use strict'
    setupLayout();
})();