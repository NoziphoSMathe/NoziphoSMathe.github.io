document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.style.animationDelay = `${index * 0.2}s`;
    });
});