let textarea = document.querySelector('.textarea_for_utm');

document.querySelector('.button_for_textarea').addEventListener('click', click_for_textarea)

function click_for_textarea(){
    let url = textarea.value;
    let searchString  = '';
    let out = '';
    //console.log(uml);
    url = new URL(url);
    //console.log(uml);
    document.querySelector('.section').innerHTML += `<p> ${url.host} </p> `;
    //console.log(uml.search)
    if(url.search.indexOf('&') !== -1){
        searchString = url.search.substring(1).split('&');
    }
    //console.log(searchString);
    let result = searchToString(searchString);
    //console.log(result);
    for(let key in result){
        out = key + ' : ' + decodeURI(result[key]);
        console.log(out);
        document.querySelector('.section').innerHTML += `<p> ${out} </p> `;
    }
}

function searchToString(searchString){
    return searchString.reduce((accum, item) => {
        item = item.split('=');
        //console.log(item);
        accum[item[0]] = item[1];
        return accum;
    }, {});
}