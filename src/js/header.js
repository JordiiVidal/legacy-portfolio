const header = document.querySelector('header');

export function headerStyle(){

    const scrollHandle = (e) => {
        const scrollPosition = window.scrollY;
        if(scrollPosition > 0){
            header.classList.add('scroll');
            return;
        }
        
        header.classList.remove('scroll');
    }

    window.addEventListener('scroll', scrollHandle);
}

export function navigationHeader(){
    const buttons = header.querySelectorAll('div.step');
    console.log(buttons);

    const scrollSectionHandle = (div) => {
        const section = div.getAttribute('data-section') ?? 'home';
        document.getElementById(section).scrollIntoView();
    }

    [...buttons].map(div => div.addEventListener('click', () => scrollSectionHandle(div)));
}