// выбор элемента по его id :
var string = document.getElementById('string');

string.style.color = 'red';
string.style.backgroundColor = 'blue';

string.innerHTML = "А вот и нет";

// выбор тегов по его название (div, p, sapn  и т.д.):

let spans = document.getElementsByTagName('span');
console.log(spans);
document.querySelector('div').innerHTML += '<span>Text_4</span>';
console.log(spans);

let arr_1 = Array.from(spans);
console.log(arr_1);

// сейчас при вызове getElementsByTagName(), JS приобразует данные в HTMLCollection
//есть также NODCollection при вызове querySelection, но нее нет динамического изменения данных(не будет учитывать новые елементы)

// 1. Через цикл for все работает:
for (let i = 0; i < spans.length; i++) {
    console.log(spans[i].innerHTML); // innerHTML позволяет выбрать значение самого тега
}

// 2. Через цикл for of тоже все работает:
for (let item of spans) {
    console.log(item);
}

// 3. Через цикл foreach работает с приобразование в массив через Array.from()
//spans.forEach(element => console.log(element)); // не работает
Array.from(spans).forEach(element => console.log(element)); // работает с Array.from

document.querySelector('div').innerHTML += '<span>Text_5</span>';
console.log(spans);

let arr_2 = Array.from(spans);

// не забывать, что переменная arr_1 осталась статична с 
//момента ее создания, и коллекция из 4-ех элеменитов там не 
//изменилась, для получения всех эелементов нужно создать новую переменную - arr_2.
console.log(arr_1, arr_2);

// выбор тега по классу:

let spansTwo = document.getElementsByClassName('simple-class');
console.log(spansTwo);

for (let i = 0; i < spansTwo.length; i++) {
    console.log(spansTwo[i].innerHTML); // innerHTML позволяет выбрать значение самого тега
}

// работа с формой, передача из HTML в JS данных на основе JS атрибута onsubmit:

function checkForm(el) {

    //console.log('text');

    // Первый варинт, но он не подходит для функции, так как передан параментр el
    /*
    let name = document.getElementById('name').value;
    console.log(name);
    let password = document.getElementById('password').value;
    let repass = document.getElementById('repass').value;
    if (repass !== password) {
        alert(repass + ' введен неверно');
    }
    console.log(name, password);
    **/


    let name = el.name.value;
    let pass = el.pass.value;
    let repass = el.repass.value;
    let state = el.state.value;

    let fail = '';

    if (name == '' || pass == '' || state == '')
        fail = 'Не заполенны все поля';
    else if (name.length < 1 || name.length > 15)
        fail = 'Число символов в имени должно быть от 1 до 15';
    else if (pass.length < 1 || pass.length > 15)
        fail = 'Число символов в пароле должно быть от 1 до 15';
    else if (repass != pass)
        fail = repass + ' введен не верно';
    else if (pass.split("&").length > 1)
        fail = 'Некорректный пароль';

    if (fail != '') {
        document.getElementById('error').innerHTML = fail;
        return false;
    } else {
        alert('Все данные корректно заполнены');
        return true;
    }

}

// работа с формой, передача из HTML без JS атрибутов:

document.getElementById('main-form-two').addEventListener('submit', checkFormTwo);


function checkFormTwo(event) {
    event.preventDefault();
    let el = document.getElementById('main-form-two');

    let name = el.name.value;
    let pass = el.pass.value;
    let repass = el.repass.value;
    let state = el.state.value;

    let fail = '';

    if (name == '' || pass == '' || state == '')
        fail = 'Не заполенны все поля';
    else if (name.length < 1 || name.length > 15)
        fail = 'Число символов в имени должно быть от 1 до 15';
    else if (pass.length < 1 || pass.length > 15)
        fail = 'Число символов в пароле должно быть от 1 до 15';
    else if (repass != pass)
        fail = repass + ' введен не верно';
    else if (pass.split("&").length > 1)
        fail = 'Некорректный пароль';

    if (fail != '') {
        document.getElementById('error_2').innerHTML = fail;
        return false;
    } else {
        alert('Все данные корректно заполнены');
        return true;
    }

}