let imageOut = document.querySelector(".images");
let heroName = document.querySelector(".hero-name");
let heroMovie = document.querySelector('.hero-movie');



for (key in images_info){
    console.dir(key);
    let img = document.createElement('img');
    img.setAttribute('data-key', key);
    img.src = `../img_2/${key}.png`;
    imageOut.append(img);
    
}

imageOut.addEventListener('click', showInfo)

function showInfo(event){
    console.dir(event.target);
    let key = event.target.dataset['key'];
    if(key === undefined){
        return true;
    }
    heroName.textContent = images_info[key]['name'];
    heroMovie.innerHTML = images_info[key]['movie'];

    document.querySelectorAll('.active').forEach( item => item.classList.remove('active'));

    event.target.classList.add('active');
}