let images = document.querySelector('.img_infinix');
let range = document.querySelector('.infinix_range');
//console.log(range);
range.value = 0;
//console.log(img.length);
range.max = img.length - 1;
images.src = '../img_360/' + img[0];
range.oninput = () =>{
    images.src = '../img_360/' + img[range.value];
}
