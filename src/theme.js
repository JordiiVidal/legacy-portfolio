import darkIconTheme from '../assets/icons/dark.svg'
import lightIconTheme from '../assets/icons/light.svg'

const isThemeLight = (theme) => theme === 'light';

export function switchThemeButton(){
    const root = document.documentElement;
    const buttonElement = document.getElementById('theme');
    const iconImage = document.getElementById('icon-theme');

    const switchTheme = () => {
        const currentTheme = root.getAttribute('data-theme');
        const newTheme = isThemeLight(currentTheme) ? 'dark' : 'light';
        const iconTheme = isThemeLight(newTheme) ? lightIconTheme : darkIconTheme;

        iconImage.src = iconTheme;
        root.setAttribute('data-theme', newTheme);
    }

    buttonElement.addEventListener('click', switchTheme);
}