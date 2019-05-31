// XMLHttpRequest таск
// Що потрібно реалізувати:
// - через XMLHttpRequest потрібно витягнути дані з http://www.omdbapi.com/ де ми з вами зареєструвалися
// і розпарсити то що приходить в нас з сервера в штмл

let getId = id => document.getElementById(id);

function gettingData(){
    let xhr = new XMLHttpRequest();
    console.log(xhr);
    let search = getId('name').value;
    xhr.open('GET', `http://www.omdbapi.com/?s=${search}&apikey=58b1549b`, true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState===4){
            if(xhr.status===200){
                let result = JSON.parse(xhr.response).Search;
                for(let i=0; i<result.length; i++){
                    let poster = result[i].Poster;
                    let title = result[i].Title;
                    let type = result[i].Type;
                    let year = result[i].Year;
                    let imdb = result[i].imdbID;
                    getId('data').innerHTML += `<div class="movie">
                    <div class="poster"><img src="${poster}" alt="film poster" width="100%"></div>
                    <div class='title'>${title}</div><p class="type">${type}</p><p class="year">${year}</p>
                    <a href="https://www.imdb.com/title/${imdb}/">More details...</a>
                    </div>`;
                }
            }
        }
    }
    getId('name').value = "";
    getId('data').innerHTML = "";
    xhr.send();
}