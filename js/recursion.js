// рекурсия - функци, кторая вызывает сама себя
// 1-ый пример:
let t = 0;

function f1() {
    t++
    if (t === 100) return console.log(t);
    console.log(t);
    f1();
}

//f1();
// рекурсия очень похожа на циклы.

// 2-ой пример c циклом:
function f2() {
    let out = "";
    for (let i = 0; i <= 30; i++) {
        out += i + " ";
    }

    console.log(out);
}

//f2();

// 3-ий пример:

let i = 0;
let out = "";

function f3() {
    i++;
    out += i + " ";
    if (i === 30) return;
    f3()
}

//f3();
//console.log(out);

// часто уобнее вместо рекурсии использовать просто цикл, но есть конкретные задачи,
// которые решаются именно рекурсией

// простая задача на наполнение кошелька с максимальным объемом - 1000 монет:  
// рекурсия:
function randomInteger(min, max) {
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    return rand;
}

let wallet = 0;

function moneyRecursion() {
    let money = randomInteger(1, 100);
    console.log('add ' + money + ' money');
    wallet += money;
    console.log('wallet ' + wallet);
    if (wallet >= 1000) return;
    moneyRecursion();

}

//moneyRecursion();

//циклы:

//for
function moneyCicl() {
    let wallet_2 = 0;
    for (let i = 0; true; i++) {
        let money = randomInteger(1, 100);
        console.log('add ' + money + ' money');
        wallet_2 += money;
        console.log('wallet_2 ' + wallet_2);
        if (wallet_2 >= 500) return;
    }

}

//moneyCicl()

//while
function moneyCiclWhile() {
    let wallet_3 = 0;
    let i = 0;
    while (true) {
        let money = randomInteger(1, 100);
        console.log('add ' + money + ' money');
        wallet_3 += money;
        console.log('wallet_3 ' + wallet_3);
        if (wallet_3 >= 500) return;
    }

}

//moneyCiclWhile()

// без рекурсии никак при переборе объектов с 
// большими вложениями (нет понимания, какой уровень вложения):

let users = {
    "ivanov": {
        age: 25,
        parent: {
            "ivanov-a":{
                age: 43,
            },
            "ivanov-b":{
                age: 54,
                parent:{
                    "sergeev-a":{
                        age: 84
                    },
                },
            },

        },
    },
    "petrov": {
        age: 26,
        parent: {
            "petrov-a":{
                age: 47,
            },
            "petrov-b":{
                age: 51,
                parent:{
                    "stmenov-a":{
                        age: 78
                    },
                },
            },

        },
    },
    "kruglov": {
        age: 21,
        parent: {
            "kruglov-a":{
                age: 37,
            },
            "kruglov-b":{
                age: 40,
                parent:{
                    "krivov-a":{
                        age: 66
                    },
                },
            },

        },
    },
}

function searchParent(obj){
    if(obj.parent !== undefined){
        for(let key in obj.parent){
            console.log(key);
            searchParent(obj.parent[key])
        }
    }
}

for (let key in users){
    searchParent(users[key]);
}

//анимирование блока:

// 1.варинт просто по клику
let position_1 = 0;
document.querySelector('.block').addEventListener('click', function () {
    position_1++;
    this.style.left = position_1 + "px";
})




// 2. вариант через цикл:
document.querySelector('.block_2').addEventListener('click', function () {
    for (let i = 0; i <= 548; i++){
        this.style.left = i +"px"
    }
});

//3.рекурсивная анимация:

let position_3= 0;

document.querySelector('.block_3').addEventListener('click', slowdown);

function recursionAnimation(){
    position_3++;
    if(position_3 >547) return;
    document.querySelector('.block_3').style.left = position_3 + 'px';
    //setTimeout(recursionAnimation, 9); // можно в функцию сразу инкапсулировать setTimout, но это немного нарушает SOLID по раделению обязанностей
    slowdown(); // лучше отдельно вызывать замедление, вынеся в отедельную функцию
}

function slowdown(){
    setTimeout(recursionAnimation, 9);
}

//ФАКТОРИАЛ, ЧИСЛА ФИБАНАЧИ И Т.Д. через рекурсия:
// Факториал - произведение чисел:
// Пример на цикле:
let x = 1;

function factorCicly(n){
    for(let i = 1; i <= n; i++){
        x = x*i; 
        console.log(x);
    }
    console.log(x);
}

factorCicly(5);

//свой варинт рекурсии факториала

let fact_i = 1;
let fact_x = 1;

function factorialRecursia_1(n){
    fact_i++;
    if(fact_i > n) return;
    fact_x = fact_x * fact_i; 
    factorialRecursia_1(n);
}

factorialRecursia_1(5);

console.log(fact_x);

//часто используемый варинт рекурссии факториала
let fact_z = 1;

function factorialRecursia_2(n){
    if(n === 0) return;
    fact_z = fact_z * n; 
    factorialRecursia_2(n-1);
}

let n_3 = 1

factorialRecursia_2(n_3);

console.log(`Фатокриал из  ${n_3} равен: ${fact_z}`);