const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber}.jpg`;
    body.appendChild(image);
    image.classList.add("baImage");
}

function genRandom() {
    const number = Math.floor((Math.random() * IMG_NUMBER) + 1);
    return number;
}

function init() {
    const randomNuber = genRandom();
    paintImage(randomNuber);
}

init();