import i18next from 'i18next';

const defaultLanguage = 'en';
const supportedLanguages = ['en','es','cat'];

async function initLanguage(){
   
    const initLanguage = getCurrentLanguage();

    await i18next.init({
        fallbackLng: defaultLanguage,
        supportedLngs: supportedLanguages,
        lng: initLanguage,
        debug: true,
    });

    await addResource(initLanguage);

}

function getCurrentLanguage(){
    const navigatorLanguage = navigator.language ?? defaultLanguage;
    return supportedLanguages.find(language => navigatorLanguage.includes(language)) ?? defaultLanguage;
}

async function addResource(language, namespace = 'translation') {
    if(!i18next.hasResourceBundle(language, namespace)){
        const translation = await fetch(`locales/${language}/translation.json`);
        i18next.addResourceBundle(language, namespace, await translation.json());
    }
}

(async() => {
    await initLanguage();
})();
