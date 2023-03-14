// Функции и время:
document.write('1.Функции даты и времени <br>');

let date = new Date();

document.write('методы позволяющие вывести дату и  время: date, date.getFullYear(), date.getMonth() и т.д. <br>');
document.write("Дата: " + date.getDate() + "<br> " + "Месяц: " + (date.getMonth() + 1) + "<br> " + " Время: " + date.getHours() + "<br>");

console.log(date); // вывод полной информации по текущей дате
console.log(date.getFullYear()); // выводит год
console.log(date.getMonth() + 1); // выводит месяц расчет начинается с 0 значения нужно прибавлять +1
console.log(date.getHours()); // выводит часы
console.log(date.getMinutes()); // выводит минуты

// можно изменить дату и время:
date.setHours();

//Некоторые методы применяемые к массивам:

let arr = [1, 2, 3, 4, 5, 6, -5, -4, -3, -2, 15, 10];
console.log('Длина массива arr: ' + arr.length); // длина массива
console.log('Сортировка мссива arr: ' + arr.sort()); // сортировка массива, но работает странно
console.log('Объединение массива arr в строку: ' + arr.join(", ")); // в скобак указывается како-нибудь разделитель строки
console.log('Реверс массива arr : ' + arr.reverse()); // реверс массива
console.log('Методы можно объединять: ' + arr.reverse().join("// "));
let arr_2 = [1, 2, 3, 4, 5, 6, -5, -4, -3, -2, 15, 10];
//arr_2.reverse().join(", ");
//console.log(arr_2.split(", ")); // преобразований элементов массива в строки, но сейчас он не работает видимо.

// Создание классов:

class Person {

    constructor(name, age, happiness) {
        this.name = name;
        this.age = age;
        this.happiness = happiness;
    }

    info() {
        console.log("Имя: " + this);
    }
}

let alex = new Person('Alex', 23, 'Счастлив');
console.log(alex);
console.log(alex.name);
alex.info();