const logo1 = document.querySelectorAll(".logo1");
let counter = 0;

logo1.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
    if (counter > 0) {
        counter--;
        logo1Image();
    }
};

const goNext = () => {
    if (counter < logo1.length - 1) {
        counter++;
        logo1Image();
    }
};

const logo1Image = () => {
    logo1.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};
