let images = document.querySelectorAll('.slider-line img');
let h_1 = document.querySelector('.container h1')
console.log(images);
let moveImages = document.querySelector('.slider-line');
let count = 0;
let width;

function init_h1() {
    console.log('resize-h1');
    width = document.querySelector('.slider').offsetWidth;
    console.log(width);
    if (width >= 251 && width <= 300) {
        h_1.style.fontSize = 25 + "px";
    } else if (width <= 250 && width >= 201) {
        h_1.style.fontSize = 16 + "px";
    } else if (width <= 200 && width >= 151) {
        h_1.style.fontSize = 14 + "px";
    } else if (width <= 150 && width >= 101) {
        h_1.style.fontSize = 12 + "px";
    } else if (width <= 100) {
        h_1.style.fontSize = 8 + "px";
    }

}

function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    console.log(width);
    moveImages.style.width = width * images.length + "px";
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    })
    rollSlider();
}

window.addEventListener('resize', () => {
    init();
    init_h1();
})

document.querySelector('.b-prew').addEventListener('click', () => {
    count--;
    if(count < 0){
        count = images.length-1;
    }
    rollSlider();
});


document.querySelector('.b-next').addEventListener('click', () => {
    count++;
    if(count >= images.length){
        count = 0;
    }
    rollSlider();
});

function rollSlider(){
    moveImages.style.transform = `translate(-${count * width}px)`;
}
