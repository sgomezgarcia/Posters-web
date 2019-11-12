//  Carrega de dades json
function getJSONVideos() {
    // Petició ajax de les dades
    $.getJSON('../data/video.json', function (data) {
        jsonVideos = data;
        printFilms(jsonVideos.video.films);
        printSeries(jsonVideos.video.series);
    });
}

//  Mostra les pel·lícules (fa servir jquery)
function printFilms(listFilms) {
    $('#list-films').html("<h1>Pel·lícules disponibles</h1>");
    $.each(listFilms, function (key, val) {
        let oFilm = val;
        console.log("info:" + oFilm.id + " " + oFilm.name);
        let card = `<div class="tab-pane fade show active" id="nav-films" role="tabpanel" aria-labelledby="nav-profile-tab">
        <div id="list-films" class="py-3">
            <div class="row">
                <div class="foto">
                    <hr />
                    <h5 class="card-title">${oFilm.name}</h5>
                    <img class="foto" src="./img/${oFilm.cover}"/>
                    <p class="card-text">${oFilm.sinopsis}</p>      
                </div>
            </div> 
        </div>
    </div>`;
        $('#list-films').append(card);
    });
}


// Mostra les series (fa servir només javascript)
function printSeries(listSeries) {
    console.log(listSeries);
    document.querySelector("#list-series").innerHTML = "<h1>Sèries disponibles</h1>";

    listSeries.forEach(function (element) {
        let oSerie = element;
        console.log("info serie:" + oSerie.id + " " + oSerie.name);
        let card = `<div class="tab-pane fade show active" id="nav-series" role="tabpanel" aria-labelledby="nav-profile-tab">
        <div id="list-series" class="py-3">
            <div class="row">    
                <div class="foto">
                    <hr />
                    <h5 class="card-title">${oSerie.name}</h5>
                    <img class="foto" src="./img/${oSerie.cover}"/>
                    <p class="card-text">${oSerie.genre}</p>
                </div>
            </div> 
        </div>
    </div>`;
        document.querySelector("#list-series").innerHTML += card;
    });
}



$(document).ready(function () {
    getJSONVideos();

});