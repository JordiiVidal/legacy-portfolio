export function switchThemeButton(buttonElement){
    const root = document.documentElement;

    const switchTheme = () => {
        const currentTheme = root.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        root.setAttribute('data-theme', newTheme);
    }

    buttonElement.addEventListener('click', switchTheme)
}