//Pure (чистые) функции - функции, которые возвращают значение, зависящее только
// от входящих параментов (аргументов), без побочных эффектов, выводит один и тот же результат

function squad_1 (n){
    return n**2;
}

console.log(squad_1(2));
console.log(squad_1(3));
console.log(squad_1(4));
console.log(squad_1(6));

// такие функции позволяет уменьшитьколичество ошибок (багов) в коде

//предстваленны ниже варинт является функцией с потенциальными проблемами, так здесь используются разные зависимости
// увеличивающие потенцияльные шансы ошибок
function squad_2 (n){
    document.querySelector('.out-1').innerHTML = n**2;
}

squad_2(2);

//потенциально удобнее программировать с использования чистых функций

function squad_3 (n){
    document.querySelector('.out-2').innerHTML = squad_1(2);
}

squad_2(2);

// пример не чистой функции, которая зависит отвнешних переменных:

let count_1 = 0;

function counter_1(){
    return count_1++;
}

console.log(counter_1()); //эта функция зависит от внешних переменных, она не чистая

// еще примеры нечистых функций или бесполезных:

function showAlert_1(){
    return 3; // не зависит от внешних переменных, но она бесполена

}

function showAlert_2(){
    alert('Hello');// нарушение пунк о side effect - побочный эффект, данная функция тоже не чистая
}

showAlert_2();

// данную функцию нельзя назвать чистой, так как при одинаковых аргументах результат будет разный
function randomInt(min, max){
    return Math.floor(Math.random() * (min - max) + min);
}

for (let i = 0; i<=20; i++){
    console.log(randomInt(10, 20));
}

// некорректная, но чистая функция:
function year_1(d){
    return (2023 - d)
}

console.log(year_1(1985));

//модифицируем:

function year_2(d){
    let today = new Date();
    let year = today.getFullYear();
    return (`Вам ${year - d} лет`);
}

console.log(year_2(1982));

// и получаем не чистю функцию


//еще один пример не чистой функции, получаем side effect/меняем состояние системы
function some_show(d){
    console.log(d)
}

some_show(4444);

//ФУНКЦИИ ВЫСШЕГО ПОРЯДКА:

// функция, которая принимает другую функцию в качестве аргумета или возвращающая в качестве результат функцию
// это функция высшего порядка

// функции - объекты

function pOdd() {
    console.log('odd');
}

function pEven(){
    console.log('odd');
}

function myNumber(n, odd, even){
    if (n % 2 ==0) return even;
    else return odd;
}

let z = myNumber(5, pOdd, pEven)
console.log(z);

// пример применения функций высшего порядка:

// пример, который можно модифицировать

let obj_1 = [
    {name: 'Rio', age : 25},
    {name: 'Ro', age : 40},
    {name: 'io', age : 21},
    {name: 'Roi', age : 36},
    {name: 'oir', age : 75},
    {name: 'lui', age : 15},
];

//console.log(obj_1[0].age);

let obj_2 = [];

for(let i = 0; i < obj_1.length; i++){
    if (obj_1[i].age <= 25 ) obj_2.push(obj_1[i]);
}

console.log(obj_2);

//Пример модификаций фильтрации массива + объектов по возрасту через высшие функции:
// 1. Пример:

obj_2 = obj_1.filter(searchAge);

function searchAge(item){
    if(item.age >=25) return true;
}
console.log(obj_2);

//2. Пример:

obj_2 = obj_1.filter(item => item.age >=36);
console.log(obj_2);

// ПРАКТИЧЕСКИЙ ПРИМЕР ФУНКЦИИ ВСШЕГО ПОРЯДКА:

let user = {
    age: 24,
    password: '12asdasdasd3',
    agreeToTerm: true
}

function checkAge(user) {
    return user.age > 18
}

function checkPassword(user) {
    return user.password.length >= 8;
}

function checkTerms(user) {
    return user.agreeToTerm === true; 
}

function validate (obj, ...tests){
    for(let i = 0; i<tests.length; i++){
        console.log(tests);
      if (tests[i](obj) === false) return false;  
    }

    return true
}

console.log(validate(user, checkAge, checkPassword, checkTerms));

// такой вариант функции слишком "тяжелый" его можно и нужно модифицировать

//вариант модификации:
function createValidator(...tests){
    return function (obj){
        for(let i = 0; i<tests.length; i++){
            //console.log(tests);
          if (tests[i](obj) === false) return false;  
        }
    
        return true
    }

}

let validator_1 = createValidator(checkAge, checkPassword, checkTerms);
console.log(validator_1(user));
let validator_2 = createValidator(checkAge, checkPassword);
console.log(validator_2(user));