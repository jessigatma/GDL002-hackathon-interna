const arrMovies = ["tt6487690", "tt5707754","tt5255874","tt3422094","tt6265828","tt5247022","tt4613272",
"tt1198101","tt1189073","tt2091235","tt5785170","tt0050976","tt0054042", "tt0114863","tt0058946","tt3561878","tt0080801",
"tt0416991","tt2852394", "tt6950250", "tt0060758", "tt8805486", "tt0401383","tt0836700","tt2278871",
"tt1847731","tt1602620","tt1846472","tt1660379"]; 


const movies = [];
for (let i = 0; i < arrMovies.length; i++) {
    fetch('http://www.omdbapi.com/?i=' + arrMovies[i] + '&apikey=691df107').then((data) => {
        return data.json();
    }).then((dataAsJSON) => {
        movies[i] = dataAsJSON;
        // console.log(dataAsJSON);
        
    });
}

function showRecomendation(){
    const recomendedMovies = arrAlternativeMovies.length;
    let aleatorio = Math.round(Math.random() * (recomendedMovies - 1));
    let randomMovies = arrAlternativeMovies[aleatorio];
    let newMovie=randomMovies.Poster
    document.getElementById("movieRandom").innerHTML = "<div id= 'list' class ='movies'>" + "<img src = '" + newMovie + "' />" + " " + randomMovies.Year + " " + randomMovies.Title + "</div>";
}
showRecomendation();


// function showMovie(arrAlternativeMovies) {
//     arrAlternativeMovies.forEach(element => {
//         document.getElementById("movieRandomList").innerHTML += 
//         "<div id= 'list' class ='movies'>" + "<img src = '" + element.Poster + "' />" + " " + element.Year + " " + element.Title + "</div>";
//     });
// }
// document.getElementById("movieRandomList").addEventListener("load", showMovie(arrAlternativeMovies))


function showMovie(arrAlternativeMovies) {
    movieCard(arrAlternativeMovies);
}

function movieCard (data){
    document.getElementById("movieRandomList").innerHTML= `
    <h1> Éstos son algunos titulos que podrías revisar: (${data.length} resultados)</h1>
    ${data.map(showInfoCard).join("")}`
}

function showInfoCard(movie){ 
    //create a template that will show the objet movie data
    return `
    <div class ='movies'>
        <div class="preview-card">
        <img src="${movie.Poster}">
        <h2>${movie.Title.toUpperCase()}</h2>
        //nombre de la pelicula
    </div>

    <div class="info-card">
    <h3> Title </h3> ${movie.Title} <br>
    <h3> Year </h3>${movie.Year} <br>
    <h3> Director </h3>${movie.Director} <br>
    <h3> Country </h3>${movie.Country} <br>
    <h3> Awards </h3>${movie.Awards}<br>
    <h3> Runtime </h3>${movie.Runtime}<br>
    <h3> Synopsis </h3>${movie.Plot}<br>
    </div> 
`;
}

document.getElementById("movieRandomList").addEventListener("load", showMovie(arrAlternativeMovies))


// function home() {
//     location.reload();
// }
