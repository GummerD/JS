let largeImg = document.querySelector('.right_image_v_card img'); // не забываем указывать тег img
let select = document.querySelector('.header_select');
let pathname = window.location.pathname;
let allLang = ['ru', 'en', 'de'];

// интерсный функционал отображения из списка фотографий в большой формат при наведении курсора мыши:
document.querySelectorAll('.left_images_v_cards img').forEach(item => item.onmouseenter = (event) => largeImg.src = event.target.src);

select.addEventListener('change', locationUrlLang);

// перенаправление на url c выбором языка из select:
function locationUrlLang() {
    let lang = select.value;
    location.href = pathname + '#' + lang;
    //console.log(pathname);
    location.reload();
}

function changeLang() {
    let hash = window.location.hash;
    console.log(hash);
    hash = hash.substring(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = pathname + '#ru';
        location.reload();
    }
    select.value = hash;
    let title = lengArray['unit'][hash];
    title = title[0].toUpperCase() + title.substring(1);
    document.querySelector('.lebal').innerHTML = title;

    for (let key in lengArray) {
        let elem = document.querySelector(`.lng-${key}`)
        if (elem) {
            elem.innerHTML += lengArray[key][hash];
        }
    }
}

changeLang()

