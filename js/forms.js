//1-ой input - text:
document.querySelector('.b-1').addEventListener('click', () => {
    let data = document.querySelector('.i-1').value;
    document.querySelector('.out-1').innerHTML += data;
})

//2-ой input - number:
document.querySelector('.b-2').addEventListener('click', () => {
    let data = +document.querySelector('.i-2').value; // + для получения именно числа.
    //console.log(data);
    document.querySelector('.out-2').innerHTML += data;
})

//3-ой input - color:
document.querySelector('.b-3').addEventListener('click', () => {
    let data = document.querySelector('.i-3').value;
    document.querySelector('.out-3').innerHTML = data;
    document.querySelector('.out-color-3').style.backgroundColor = data; // если необъодимо передать цвет объекту
})

//4-ой input - date:
document.querySelector('.b-4').addEventListener('click', () => {
    let data = document.querySelector('.i-4').value;
    document.querySelector('.out-4').innerHTML = data;
})

//5-ой input - range:
document.querySelector('.b-5').addEventListener('click', () => {
    let data = document.querySelector('.i-5').value;
    document.querySelector('.out-5').innerHTML = data;
})

//6-ой input - cheackbox:
document.querySelector('.b-6').addEventListener('click', () => {
    let data = document.querySelector('.i-6').value;
    if (document.querySelector('.i-6').checked) {
        document.querySelector('.out-6').innerHTML = data;
    } else {
        document.querySelector('.out-6').innerHTML = ' ';
    }

})

//7-ой input - radio:

document.querySelector('.b-7').addEventListener('click', () => {
    let radio = document.querySelectorAll('.i-7');
    //console.log(radio);
    for (let i = 0; i <= radio.length; i++) {
        if (radio[i].checked) {
            data = radio[i].value;
            break;
        }
    }
    document.querySelector('.out-7').innerHTML = data;
})

//8-ой input - password:

document.querySelector('.b-8').addEventListener('click', () => {
    let data = document.querySelector('.i-8').value;
    //console.log(data);
    document.querySelector('.out-8').innerHTML = data;
})

//9-ый input - email:

document.querySelector('.b-9').addEventListener('click', () => {
    let data = document.querySelector('.i-9').value;
    //console.log(data);
    document.querySelector('.out-9').innerHTML = data;
})

//10-ый select:
document.querySelector('.b-10').addEventListener('click', () => {
    let data = document.querySelector('.i-10').value;
    //console.log(data);
    document.querySelector('.out-10').innerHTML = data;
})

//11-ый  textarea:
document.querySelector('.b-11').addEventListener('click', () => {
    let data = document.querySelector('.i-11').value;
    //console.log(data);
    document.querySelector('.out-11').innerHTML = data;
})

//12-ый  form:

document.querySelector('form').addEventListener('submit', (event) =>{
    event.preventDefault();
    let form =  document.querySelector('form');
    console.dir(form);
    console.log(form.elements.new_input_12.value);
    console.log(form.elements.select_12.value);

    form.reset();
})