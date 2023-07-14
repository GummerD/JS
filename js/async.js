// в данной теме изучаем вопрос асинхронных функци, которые необходимы при запросе на сервер
// при последовательном выполнении функций.

// пусть у нас будет три функции, которые должны получить с сервера некоторую информаию:

function func_1() {
    fetch('/test.php?d=1')
        .then(data => data.text())
        .then(data => console.log(data))
}

function func_2() {
    fetch('/test.php?d=2')
        .then(data => data.text())
        .then(data => console.log(data))
}

function func_3() {
    fetch('/test.php?d=3')
        .then(data => data.text())
        .then(data => console.log(data))
}

func_1();
func_2();
func_3();

// при такой пследовтельной организации функций их выполнение будет непоследовательным
// что может привести к неправилному выполнению кода.
// для этого в JS предусотрн функционал позволяющий настроить порядок выполнения
// функций - async await для заввисимых друг от друга данных, которые последовтельно
// передаются и выполняются в следющих функциях выполнятюся

async function func_4() {
    let result = await fetch('/test.php?d=1')
    return result.text();
}

async function func_5() {
    let result = await fetch('/test.php?d=2')
    return result.text();
}

async function func_6() {
    let result = await fetch('/test.php?d=3')
    return result.text();
}
async function execute() {
   let a = await func_4();
   let b = await func_5();
   let c = await func_6();

}

// указанное выше решение позволяет исполнить все функции поселедовтельно
