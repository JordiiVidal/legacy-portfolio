import darkIcon from '../../assets/icons/dark.svg'
import lightIcon from '../../assets/icons/light.svg'

const rootElement = document.documentElement;
const iconImage = document.getElementById('icon-theme');
const buttonElement = document.getElementById('theme');

const isThemeLight = (theme) => theme === 'light';

function setTheme(theme){
    if(!iconImage){
        console.error('Icon element not found');
    }

    iconImage.src = isThemeLight(theme) ? lightIcon : darkIcon;
    rootElement.setAttribute('data-theme', theme);
}

export function initializeTheme(){
    const isPrefersUseDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = isPrefersUseDarkTheme ? 'dark' : 'light';
    setTheme(initialTheme);
}

export function switchThemeButton(){
    if (!buttonElement || !iconImage) {
        console.error('Button or icon element not found.');
        return;
    }

    const themeSwitchHandle = () => {
        const currentTheme = rootElement.getAttribute('data-theme');
        const newTheme = isThemeLight(currentTheme) ? 'dark' : 'light';
        setTheme(newTheme);
    };
    
    buttonElement.addEventListener('click', themeSwitchHandle);
}