const birthday = new Date("2000-08-22"), today = new Date();
let diff = (today.getTime()-birthday.getTime()) / 1000;
diff /= (60*60*24);
diff = Math.round(diff/365.25);
document.getElementById("birthday").innerHTML = `${diff}-year old male`;

const carousels = document.querySelectorAll(".about-carousel");
carousels.forEach(carousel => {
    const slides = carousel.querySelector(".slides");
    const slide = carousel.querySelector(".slide");
    const prevBtn = carousel.querySelector(".prev");
    const nextBtn = carousel.querySelector(".next");

    prevBtn.addEventListener("click", () => {
        const width = slide.clientWidth;
        slides.scrollLeft -= width;
    });

    nextBtn.addEventListener("click", () => {
        const width = slide.clientWidth;
        slides.scrollLeft += width;
    });
});