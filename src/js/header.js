const header = document.querySelector('header');

export function headerStyle(){

    const scrollHandle = () => {
        const scrollPosition = window.scrollY;
        if(scrollPosition > 0){
            header.classList.add('scroll');
            return;
        }
        
        header.classList.remove('scroll');
    }

    scrollHandle();
    window.addEventListener('scroll', scrollHandle);
}

export function navigationHeader(){
    const linkItemsList = header.querySelectorAll('#header-list li a');

    function scrollSectionHandle(){
        const section = this.dataset.section ?? 'home';
        if(section == 'home'){
            document.documentElement.scrollTop = 0;
            return;
        }

        document.getElementById(section)?.scrollIntoView();
    }

    [...linkItemsList].map(linkElement => linkElement.addEventListener('click', scrollSectionHandle));
}