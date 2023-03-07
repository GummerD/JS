document.write('Я открылся из новой папки');
console.log(Math.min(-1,2,10,15));
// всплывающие окна:
alert("Какая хорошая погода");
confirm("Вы сейчас дома?");
// confirm можно проверять на boolean использовав переменную:
var data = confirm('true || false ?');
alert(data);
// этот метод позволяет получать от пользователя значения:
var age = prompt('Сколько вам лет?', 18);
alert(age);
// небольшая работа с конами:
var name = null;
if(confirm("Вы точно уверены?")){
    name = prompt("Введите имя: ");
    alert("Привет: " + name);
}else{
    alert("Вы отказались от дальнейших действий");
}
