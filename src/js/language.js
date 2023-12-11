import jsonCat from '../lang/cat.json';
import jsonEs from '../lang/es.json';
import jsonEn from '../lang/en.json';

import i18next from 'i18next';

i18next
    .init({
        lng: 'en',
        debug: true,
        resources: {
            en : jsonEn,
            es : jsonEs,
            cat : jsonCat,
        }
    }, function(err, t) {
        setupLanguage();
    });

function setupLanguage(){
    document.getElementById('language-indicator').innerText = i18next.language;
}

export function changeLanguage(lang){
    i18next.changeLanguage(lang);
}
