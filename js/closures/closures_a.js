/* это был ранее пример смешанных данных
p = 10;

let button_1 = document.querySelector('.b-1');

button_1.onclick = () => {
    console.log('it is work - button_1');
    p += 1;
    console.log(p);
}
*/

// одинаковые переменные, как и иные данные + действыия внутри функции - обертки
// не видны в глобальной области видимости, оданко объявление  именованной функции +
// ее вызов все равно отражаются в глобальном потоке данных и от этого можно избавиться


/*
function wrapperFirstButton() {
    let p = 10;
    let button = document.querySelector('.b-1');

    button.onclick = () => {
        console.log('it is work - button_1');
        p += 1;
        console.log(p);
    }
}

wrapperFirstButton();
*/

(
    function () {
        let p = 10;
        let button = document.querySelector('.b-1');
    
        button.onclick = () => {
            console.log('it is work - button_1');
            p += 1;
            console.log(p);
        }
    }  
)();
