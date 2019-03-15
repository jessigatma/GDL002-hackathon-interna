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

function showMovie(data) {
    data.forEach(element => {

        document.getElementById("movieRandomList").innerHTML += "<div id= 'list' class ='movies'>" + "<img src = '" + element.Poster + "' />" + " " + element.Year + " " + element.Title + "</div>";

    });

}
document.getElementById("btnAll").addEventListener("click", function() { showMovie(arrAlternativeMovies) });

function selectCountry(Country) {
    const txtcountry = Country;
    console.log(txtcountry);
    document.getElementById("movieRandomList").innerHTML = "";
    document.getElementById("movieRandomList").innerHTML = `<h3>You have chosen ${txtcountry}</h3>`
    const result = dataMovies.filterCountry(arrAlternativeMovies, Country);
    showMovie(result);
}
document.getElementById("btnMex").addEventListener("click", function() { selectCountry("Mexico") });
document.getElementById("btnUsa").addEventListener("click", function() { selectCountry("USA") });
document.getElementById("btnVen").addEventListener("click", function() { selectCountry("Venezuela") });
document.getElementById("btnFr").addEventListener("click", function() { selectCountry("France") });
document.getElementById("btnSpa").addEventListener("click", function() { selectCountry("Spain") });
document.getElementById("btnIt").addEventListener("click", function() { selectCountry("Italy") });
document.getElementById("btnChi").addEventListener("click", function() { selectCountry("China") });
document.getElementById("btnIndia").addEventListener("click", function() { selectCountry("India") });
document.getElementById("btnJp").addEventListener("click", function() { selectCountry("Japan") });
document.getElementById("btnEgy").addEventListener("click", function() { selectCountry("Egypt") });
document.getElementById("btnSaf").addEventListener("click", function() { selectCountry("South Africa") });