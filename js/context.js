// контекст = область видимости + переменная - this;
// this - ссфлка на объект, которая вызыввает код в данный момент;

let count = 0;

// операция с декларативной функцией:
function func_1(){
    console.log(count);
    console.log(this); //  увидим элемент на который ссылается this
    this.textContent = count; // через функцию textContent заменяем в теге buton содержимое
    count++;
}

//func_1();

//document.querySelector('.b-1').addEventListener('click', func_1);

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
    sum_1.call(document.querySelector('.out-1'), 10,15)
})