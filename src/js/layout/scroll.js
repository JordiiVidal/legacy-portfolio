
export function scrollAnimations(){
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-animation-show');
                observer.unobserve(entry.target);
            }
        });
    });
    
    const hiddenElments = document.querySelectorAll('.scroll-animation-hidden');
    hiddenElments.forEach((el) => observer.observe(el));
}