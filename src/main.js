<<<<<<< HEAD
const arrMovies = ["tt6487690", "tt5707754","tt5255874","tt3422094","tt6265828","tt5247022","tt4613272",
"tt1198101","tt1189073","tt2091235","tt5785170","tt0050976","tt0054042", "tt0114863","tt0058946","tt3561878","tt0080801",
"tt0416991","tt2852394", "tt6950250", "tt0060758", "tt8805486", "tt0401383","tt0836700","tt2278871",
"tt1847731","tt1602620","tt1846472","tt1660379"]; 

=======

const arrMovies =  ["tt0482571", "tt0209144", "tt0120689", "tt1130884", "tt0114814", "tt0167404", "tt2267998", "tt1201607", "tt0440963",
"tt0109830", "tt0120338", "tt0338013", "tt0119217", "tt1010048", "tt0211915", "tt1045658", "tt0118799", "tt0107048",  "tt0421715",
"tt0101414","tt0298148","tt0398286","tt0103639","tt0121164","tt0097757","tt0119282","tt0120855","tt0892791","tt5311514","tt0104652","tt2401878",
"tt0111161", "tt0468569", "tt0137523", "tt0110912", "tt0109830", "tt0120737", "tt0068646", "tt0816692", "tt0172495"];

 
>>>>>>> b678a1f8f966b1544e39c8b09989a1be2a059e0c

const movies = [];
for (let i = 0; i < arrMovies.length; i++) {
    fetch('http://www.omdbapi.com/?i=' + arrMovies[i] + '&apikey=691df107').then((data) => {
        return data.json();
    }).then((dataAsJSON) => {
        movies[i] = dataAsJSON;
    });
}

<<<<<<< HEAD
//console.log(movies);
=======

>>>>>>> b678a1f8f966b1544e39c8b09989a1be2a059e0c

function showMovie(arrDrama) {
    arrDrama.forEach(element => {
        document.getElementById("movieRandom").innerHTML += "<div id= 'list' class ='movies'>" + "<img src = '" + element.Poster + "' />" + " " + element.Year + " " + element.Title + "</div>";

    });
}
document.getElementById("movieRandom").addEventListener("load", showMovie(arrDrama))

function home() {
    location.reload();
}


 
