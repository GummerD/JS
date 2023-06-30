/* это был ранее пример смешанных данных
p = 60;

button_1 = document.querySelector('.b-2');

button_1.onclick = () =>{
    p += 1;
    console.log('Работат 2-ая кнопка' + p);
}
*/


// одинаковые переменные, как и иные данные + действыия внутри функции - обертки
// не видны в глобальной области видимости, оданко объявление  именованной функции +
// ее вызов все равно отражаются в глобальном потоке данных и от этого можно избавиться

/*
function wrapperSecondButton() {
    let p = 60;

    let button = document.querySelector('.b-2');

    button.onclick = () => {
        p += 1;
        console.log('Работат 2-ая кнопка' + p);
    }
}

wrapperSecondButton();
*/

// в JS предусмотрено создание "анонимной" обертки через - ()()

(function () {
    let p = 60;

    let button = document.querySelector('.b-2');

    button.onclick = () => {
        p += 1;
        console.log('Работат 2-ая кнопка' + p);
    }
})();

