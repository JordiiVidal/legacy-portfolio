
export function headerStyle(){

    const scrollHandle = (e) => {
        const scrollPosition = window.scrollY;
        console.log(scrollPosition);
    }

    window.addEventListener('scroll', scrollHandle);
}