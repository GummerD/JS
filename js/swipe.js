document.addEventListener('touchstart', touchStart, false);
document.addEventListener('touchmove', touchMove, false);

const logBlog = document.querySelector('.log-block');

let x_1 = null;
let y_1 = null;

function touchStart(event){
    let touchFirst = event.touches[0];
    
    x_1 = touchFirst.clientX;
    y_1 = touchFirst.clientY;

    //сonsole.log(x_1, y_1);
}

function touchMove(event){
    let touchMove = event.touches[0];

    if(!x_1 || !y_1) return false;

    let x_2 = touchMove.clientX;
    let y_2 = touchMove.clientY;
    console.log(x_2, y_2);
    
    let xDiff = x_2 - x_1;
    let yDiff = y_2 - y_1;


    if (Math.abs(xDiff) > Math.abs(yDiff)){ // смотрим изменение движение по модулю
        if(xDiff > 0){
            logBlog.textContent = 'дижение вправо';
        }else{
            logBlog.textContent = 'дижение влево';
        }
    }else{
        if (yDiff > 0){
            logBlog.textContent = 'дижение вниз';
        }else{
            logBlog.textContent = 'дижение вверх';
        }
    }

    x_1 = null;
    y_1 = null;
}