// есть немало методов для создания тегов в html разметке
//1. Самый распространненый через querySelector('section_1').innerHTML = <h1> hellow </h1>

document.querySelector('.div_1').innerHTML += '<h1>hellow</h1>';
// данный способ актуален, когда нужно вставить просто строку или какой-то простой вариант

//2. Вариант, если нужно создавть какой-либо элемент и добавить в него св-во то подойдет:
let div = document.createElement('div'); // подойдет данный вариант, однако он не удобен. если необходимо создать много вложенных элементов

// опускаем методы создания тегов через каррирование и создание через innerHTML модальных окон типа '<div> <p> <span> ....
// так вот при создании одного и того же тега много раз можно создать класс и работать через него, изменяя необходимые элементы 
// или добавить в html нужный нам фрагмент с дальнейшим переиспользованием его, то здесь поможет template, который указывается в html

let ul = document.querySelector('ul');
console.log(ul);

// получение фрагмента
let template = document.querySelector('#template_1');
let span = template.content.querySelector('span'); // все вложенные элементы можно получить через content
let b = template.content.querySelector('b');
b.innerHTML = 'ну очень хороший телефон';
span.innerHTML = ' очень хороший телефон';
//№1 дубликат узла 
let li =  template.content.cloneNode(true); // глубокое копирование со структурой вложенных элементов
ul.append(li);

//№2 дубликат узла 
b.innerHTML = 'some_text_1';
span.innerHTML = ' some_text_11';

li =  template.content.cloneNode(true)
ul.append(li);

function Animal(){
    this.name = 'cat';
}

const animal = new Animal ();
console.log(animal.name);

console.log('начало переменных');
var byVar_1 = 'var_1';
let byLet = 'byLet';
const byConst = 'byConst';
console.log('конец переменных');

function functionByVar(){
    //var byVar_2 = 'var_2';
    console.log(byVar_1);
}



functionByVar();
console.log(byVar_1);


// немного о функциях прототипах

function Person(first, last, age, gender, interests) {
    // Определения методов и свойств
    this.name = {
      first: first,
      last: last,
    };
    this.age = age;
    this.gender = gender;
    //...см. Введение в объекты для полного определения
  }

  const person_1 = new Person('Данил', 'Сергев', 35, 'муж', ['хоккей', 'боулинг']);

  console.log(person_1);

  console.log(person_1.valueOf());

  console.log(0.2 + 0.7);