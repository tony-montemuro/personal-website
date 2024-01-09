document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".about-carousel");

    carousels.forEach(carousel => {
        const slides = carousel.querySelector(".slides");
        const slide = carousel.querySelector(".slide");
        const prevBtn = carousel.querySelector(".prev");
        const nextBtn = carousel.querySelector(".next");

        prevBtn.addEventListener("click", e => {
            const width = slide.clientWidth;
            slides.scrollLeft -= width;
        });

        nextBtn.addEventListener("click", e => {
            const width = slide.clientWidth;
            slides.scrollLeft += width;
        });
    });
});