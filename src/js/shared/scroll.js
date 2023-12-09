const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation-show');
        } else {
            entry.target.classList.remove('scroll-animation-show');
        }
    });
});

const hiddenElments = document.querySelectorAll('.scroll-animation-hidden');
console.log(hiddenElments);
hiddenElments.forEach((el) => observer.observe(el));
