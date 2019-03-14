const arrMovies = ["tt0482571", "tt0209144", "tt0120689", "tt1130884", "tt0114814", "tt0167404", "tt2267998", "tt1201607", "tt0440963",
    "tt0109830", "tt0120338", "tt0338013", "tt0119217", "tt1010048", "tt0211915", "tt1045658", "tt0118799", "tt0107048", "tt0421715",
    "tt0101414", "tt0298148", "tt0398286", "tt0103639", "tt0121164", "tt0097757", "tt0119282", "tt0120855", "tt0892791", "tt5311514", "tt0104652", "tt2401878",
    "tt0111161", "tt0468569", "tt0137523", "tt0110912", "tt0109830", "tt0120737", "tt0068646", "tt0816692", "tt0172495"
];

const movies = [];
for (let i = 0; i < arrMovies.length; i++) {
    fetch('http://www.omdbapi.com/?i=' + arrMovies[i] + '&apikey=691df107').then((data) => {
        return data.json();
    }).then((dataAsJSON) => {
        movies[i] = dataAsJSON;
    });
}

function showMovie(arrAlternativeMovies) {
    arrAlternativeMovies.forEach(element => {
        document.getElementById("movieRandomList").innerHTML += "<div id= 'list' class ='movies'>" + "<img src = '" + element.Poster + "' />" + " " + element.Year + " " + element.Title + "</div>";

    });
}
document.getElementById("movieRandomList").addEventListener("load", showMovie(arrAlternativeMovies))

function home() {
    location.reload();
}

function showRecomendation() {
    const recomendedMovies = arrAlternativeMovies.length;
    let aleatorio = Math.round(Math.random() * (recomendedMovies - 1));
    let randomMovies = arrAlternativeMovies[aleatorio];
    let newMovie = randomMovies.Poster
    document.getElementById("movieRandom").innerHTML = "<div id= 'list' class ='movies'>" + "<img src = '" + newMovie + "' />" + " " + randomMovies.Year + " " + randomMovies.Title + "</div>";
}
showRecomendation();