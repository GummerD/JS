let shift= 0; // начальная позиция для смещения отлевого края

let slaiderLine =  document.querySelector('.slaider-line');

document.querySelector(".b-prew").addEventListener("click", () =>{
    shift -= 250;
    if(shift < -750) {
        shift = -750;
    }
    slaiderLine.style.left = shift + "px";
});

document.querySelector(".b-next").addEventListener("click", ()=>{
    shift += 250;
    if(shift > 0) {
        shift = 0;
    }
    slaiderLine.style.left = shift + "px";
});





