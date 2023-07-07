let counter = 0;

document.querySelector('.b_1').onclick = function (){ // чуть более сокращенный способ вызовать события 'click' через function expression
    // addEventListener('click')
    counter ++;
    console.log(this);
    this.innerHTML = `Вы нажали ${counter} раз`; // при inerHtml и при textContent без изменений
}

document.querySelector('.b_2').addEventListener('click', function (){ // стандартный вызов
    // аналогично варинту выше
    counter ++;
    console.log(this);
    this.textContent = `Вы нажали ${counter} раз`; // при inerHtml и при textContent без изменений
})

document.querySelector('.b_3').onclick = f1;

function f1(){
    counter ++;
    console.log(this);
    this.innerHTML = `Вы нажали ${counter} раз`;
}

document.querySelector('.b_4').addEventListener('click', f1)

/**В указанных выше конструкциях ожидаемо в функции передается именно this */

document.querySelector('.selector_1').addEventListener('change', f2);

function f2(){
    counter++;
    console.log(this);
    document.querySelector('.out_1').innerHTML = "Число выборов select: " + counter + " " + this.value;
}

// в данном случае все работает, но бывают ситуации, когда информация из value должна сразу
// отображаться на странице после загрузки 

f2.apply(document.querySelector('.selector_1')); // осуществить даную идею можно черех call или apply

// стрелочные функции - это не новый синтаксис - это урезанный варинт функции без возможности передачи this во внутрь

document.querySelector('.b_5').addEventListener('click', () =>{ // стрелочная функция
    counter ++;
    console.log(this);
    this.textContent = `Вы нажали ${counter} раз`; // в даном случае в качестве this будет передан объект Window а не элемент
})

document.querySelector('.b_6').addEventListener('click', () =>{ 
    counter ++;
    //console.log(this);
    document.querySelector('.b_6').textContent = `Вы нажали ${counter} раз`; // только так будет работать стрелочная функция
})