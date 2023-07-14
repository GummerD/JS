document.querySelector('.button_for_input_password').addEventListener('click', validation_password);

function validation_password(){
    let password = document.querySelector('.input_for_password').value;
    let out_result = document.querySelector('.out');
    console.log(password);
    if(typeof(password) !== 'string'){
        out_result.innerHTML = [false, "необходмо ввести строку"];
    }
    else if(password.length < 8){
        out_result.innerHTML = [false, "Необходимо вывести больше 8 симовлов"];
    }
    else if(password.search(/[a-z]/) === -1){
        out_result.innerHTML = [false, "Необходимо ввести хотя бы одну латинскую букву в нижнем регистре a-z"]
    }
    else if(password.search(/[1-9]/) === -1){
        out_result.innerHTML = [false, "необходимо ввести хотя бы одно число"]
    }
    else if(password.search(/[A-Z]/) === -1){
        out_result.innerHTML = [false, "Необходимо ввести хотя бы одну латинскую букву в верхнем регистре A-Z"]
    }
    else if(password.search(/[\s]/) === -1){
        out_result.innerHTML = [false, "Необходимо ввести пробел"]
    }else{
        out_result.innerHTML = [true, `Пароль ${password} введен верно`];
    }
}