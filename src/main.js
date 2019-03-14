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

// console.log(movies);

function showMovie(arrDrama) {
    arrDrama.forEach(element => {
        document.getElementById("movieRandom").innerHTML += "<div id= 'list' class ='movies'>" + "<img src = '" + element.Poster + "' />" + " " + element.Year + " " + element.Title + "</div>";

    });
}
document.getElementById("movieRandom").addEventListener("load", showMovie(arrDrama))

function home() {
    location.reload();
}


 
