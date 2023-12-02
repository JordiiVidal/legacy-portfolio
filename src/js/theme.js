import darkIcon from '../../assets/icons/dark.svg'
import lightIcon from '../../assets/icons/light.svg'

const DATA_THEME_ATTRIBUTE = 'data-bs-theme';
const rootElement = document.documentElement;
const iconImage = document.getElementById('icon-theme');
const buttonElement = document.getElementById('theme');

const getPreferredTheme = () => window?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const getCurrentTheme = () => rootElement?.getAttribute(DATA_THEME_ATTRIBUTE) ?? 'light';

const getNextTheme = (theme) => theme ? theme : getCurrentTheme() === 'light' ? 'dark' : 'light'; 

export const initializeTheme = () => setGlobalTheme(getPreferredTheme());

export function switchThemeButton(){
    if (!buttonElement || !iconImage) {
        console.error('Button or icon element not found.');
        return;
    }
    
    const themeSwitchHandle = () => setGlobalTheme(getNextTheme());
    
    buttonElement.addEventListener('click', themeSwitchHandle);
}

function setGlobalTheme(theme){
    if(!iconImage || !rootElement){
        console.error('Icon or Root element not found');
    }

    iconImage.src = theme === 'light' ? lightIcon : darkIcon;
    rootElement.setAttribute(DATA_THEME_ATTRIBUTE, theme);
}