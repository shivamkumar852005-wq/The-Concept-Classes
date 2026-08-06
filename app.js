
const logo1 = document.querySelectorAll(".logo1");

let counter = 0;

// Sabhi images ko side-by-side set karega
logo1.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

// Current image show karega
const logo1Image = () => {
    logo1.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

// Previous Button
const goPrev = () => {
    if (counter > 0) {
        counter--;
    } else {
        counter = logo1.length - 1;
    }
    logo1Image();
};

// Next Button
const goNext = () => {
    if (counter < logo1.length - 1) {
        counter++;
    } else {
        counter = 0;
    }
    logo1Image();
};

// Pehli image show karega
logo1Image();

// Har 2 second baad automatic next image
setInterval(goNext, 2500);