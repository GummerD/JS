// более сложное решение:
let s = 0;
let result;
let out;

function arraySum(x, y){
    out = x.toString(); //  переданное значение переводим в строку
    while(out.length < y){
        out = '0' + out; 
    }
    return out;
}

document.querySelector('.b-1').addEventListener('click', ()=>{
    result = arraySum(s, 4);
    s++;
    console.log(result);
    result = result.split(''); // переводит в массив строку с разделителем - '';
    result = result.map(item => Number(item)); // переводим в число , можно также указать +item
    document.querySelector('.out').innerHTML += result + '<br>';
})

// решение проще:

let s_1 = 10000;
let result_1;

document.querySelector('.b-2').addEventListener('click', ()=>{
    s_1++;
    result_1 = s_1.toString().split('').map(item => +item);
    result_1.shift();
    console.log(result_1);
    document.querySelector('.out-2').innerHTML += result_1 + '<br>';
})