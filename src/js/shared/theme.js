import darkIcon from '/dark.svg'
import lightIcon from '/light.svg'

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
    
    const themeSwitchHandle = () => {
        const callback = () => setGlobalTheme(getNextTheme());
        animationThemeSwitch(callback)
    }
    
    buttonElement.addEventListener('click', themeSwitchHandle);
}

function animationThemeSwitch(callback) {
    const startKeyframes = [
      { transform: 'rotate(0) scale(1)', opacity: 1 },
      { transform: 'rotate(90deg) scale(0.8)', opacity: 0.82 },
    ];
  
    const endKeyframes = [
      { transform: 'rotate(-90deg) scale(0.8)', opacity: 0.82 },
      { transform: 'rotate(0) scale(1)', opacity: 1 },
    ];
  
    const options = {
      duration: 350,
      iterations: 1,
      easing: 'ease-in-out',
    };
  
    const startAnimation = buttonElement.animate(startKeyframes, options);
    startAnimation.finished.then(() => {
      if (callback) {
        callback();
      }
  
      const endAnimation = buttonElement.animate(endKeyframes, options);
    });
}

function setGlobalTheme(theme){
    if(!iconImage || !rootElement){
        console.error('Icon or Root element not found');
    }

    iconImage.src = theme === 'light' ? lightIcon : darkIcon;
    rootElement.setAttribute(DATA_THEME_ATTRIBUTE, theme);
}