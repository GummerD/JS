// интервалы и таймеры:
// ИНТЕРВАЛЫ:
//1. обращаемся к внешней функции
let inter = setInterval(my_func, 1000);

let counter = 0;

function my_func() {
    counter++;
    console.log('Counter: ' + counter);
    // интевалы  идит бесконечно, по-этому их необходио сотанавливать: 
    if (counter == 5) clearInterval(inter);
}

//2. через анонимную функцию:
/*
setInterval(function() {
    counter++;
    console.log('Counter_2: ' + counter);
}, 2000);
**/

//ТАЙМЕРЫ:
//По аналогии с интерваломи вызывается, как через анонимную функцию, так и через внешнюю:
setTimeout(function() {
    console.log('Таймер работает');
}, 2000);