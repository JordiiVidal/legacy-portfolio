import '../styles/styles.scss'

import { headerStyle, navigationHeader } from './header';

function setup() {
    
    //Header
    headerStyle();
    navigationHeader();
}

( function run(){
    'use strict'
    setup();
})();