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