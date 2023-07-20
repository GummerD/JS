let button = document.querySelector('.button_for_tinyEMC');
let text = document.querySelector('.textarea_for_tinyEMC');
button.addEventListener('click', function (){
    let text = tinymce.get('.textarea_for_tinyEMC').getContent();
    console.log(text);
})