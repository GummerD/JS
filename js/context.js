// контекст = область видимости + переменная - this;
// this - ссфлка на объект, которая вызыввает код в данный момент;

let count = 0;

// операция с декларативной функцией:
function func_1(){
    console.log(count);
    console.log(this); //  увидим элемент на который ссылается this
    this.textContent = count + ' новое название'; // через функцию textContent заменяем в теге buton содержимое
    count++;
}

func_1();

document.querySelector('.b-1').addEventListener('click', func_1);

//особенность работы со стрелочной функцией (не имеют this):

/*
const func_2 = () =>{
    console.log(count);
    console.log(this); 
    this.textContent = count; // здесь this уже не работает
    count++;
}
*/

//document.querySelector('.b-2').addEventListener('click', func_2);

// функция call:
//func_1.call(document.querySelector('.b-1'));
//func_1.call(document.querySelector('.b-2'));

document.querySelector('.b-1').addEventListener('click', () =>{
    func_1.call(document.querySelector('.b-2'))
});

function func_3(){
    console.log(count);
    console.log(this); 
    this.textContent = count; 
}

document.querySelector('.b-3').addEventListener('click', () =>{
    count++;
    func_1.call(document.querySelector('.b-2'), count)
});

function sum_1(a,b){
    this.innerHTML = a + b;
}

document.querySelector('.b-2').addEventListener('click', () => {
    sum_1.call(document.querySelector('.out-1'), 10,15);
    sum_1.apply(document.querySelector('.out-2'), [6,5]); // удобство именно этого метода в передаче в качестве аргумента - массива
    // котрый будет разбит при передачи в функцию. Удобно, когда передается массив или много аргументов (чем больше аргументов. тем удобнее применять apply)
})

// bind

let func_4 = func_1.bind(document.querySelector('.out-3'));
func_4();
document.querySelector('.b-4').addEventListener('click', func_4);

let sum_2 = sum_1.bind(document.querySelector('.out-4'));

document.querySelector('.b-4').addEventListener('click', () =>{
    sum_2(55,55);
});

// частичные функции, или переопределенным аргументом (частичные вычисления)

function sum_3(a, b, c){
    console.log(arguments);
    this.innerHTML = a + b + c;
}

let sum_4 = sum_3.bind(document.querySelector('.out-5'), 10) // если в bind добавить доп аргумент, то он подвинет все остльные аргументы далее
//это позволяеет перееопределять в дальнейшем аргументы.
// в этом и есть смысл частичной функции (подготоваливаем аргументы, которые часто используются, при необходимости далее подставлеем нужные)
document.querySelector('.b-5').addEventListener('click', () =>{
    sum_4(1,2,3);
})


// можно использовать функции безе передачи this - элемента на основе return + undefined в аргументе:
function sum_5 (a,b,c){
    return a+b+c; 
}

let sum_6 = sum_5.bind(undefined, 100,200);

document.querySelector('.b-6').addEventListener('click', ()=>{
    document.querySelector('.out-6').textContent = sum_6(5);
});

// вытягивание методов:

let validate = {
    password: '12344g',
    email: '12345',
    isValid: false,
    sayHi () {
        console.log(this);
        return (this.password.length > 5) ? true : false;
    }
}

console.log(validate.sayHi());
let obj = {password: 'dfdffdf'};
let validatePassword = validate.sayHi.bind(obj);

console.log(validatePassword());
obj.password = 'dasds';
console.log(validatePassword());