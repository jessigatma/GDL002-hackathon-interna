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
        // console.log(dataAsJSON);
        
    });
}

function showRecomendation(){
    const recomendedMovies = arrAlternativeMovies.length;
    let aleatorio = Math.round(Math.random() * (recomendedMovies - 1));
    let randomMovies = arrAlternativeMovies[aleatorio];
    let newMovie=randomMovies.Poster
    document.getElementById("movieRandom").innerHTML = "<div id= 'list' >" + "<img id= 'first-poster' src = '" + newMovie + "' />" +  "</div>";
    document.getElementById("lateralInfo").innerHTML = "<div class='text'>" + "Title:"+" "+ randomMovies.Title + "<br>"+ "Year:"+" "+randomMovies.Year +"<br>" + "Plot:"+" "+randomMovies.Plot+"<br>" + "Runtime:"+" "+ randomMovies.Runtime +"<br>"+ "Country:"+" "+randomMovies.Country + "</div>";
}
showRecomendation();

function home() {
    location.reload();
}

function showMovie(arrAlternativeMovies) {
    movieCard(arrAlternativeMovies);
}

function movieCard (data){
    document.getElementById("movieRandomList").innerHTML= `
    <h1>These are some movies that you can watch: (${data.length}results)</h1>${data.map(showInfoCard).join("")}`
}

function showInfoCard(movie){ 
    //create a template that will show the objet movie data
    return `
    <div class ='movies'>
        <div class="preview-card">
        <img src="${movie.Poster}">
        <h2>${movie.Title.toUpperCase()}</h2>
        </div>
    
    

    <div class="info-card">
    <h3> Title </h3> ${movie.Title} <br>
    <h3> Year </h3>${movie.Year} <br>
    <h3> Country </h3>${movie.Country} <br>
    <h3> Runtime </h3>${movie.Runtime}<br>
    <h3> Synopsis </h3>${movie.Plot}<br>
    </div> 
    </div>
`;
}

  

document.getElementById("btnAll").addEventListener("click", function() { showMovie(arrAlternativeMovies) });

function selectCountry(Country) {
    const txtcountry = Country;
    document.getElementById("movieRandomList").innerHTML = "";
    document.getElementById("movieRandomList").innerHTML = `<h3>You have chosen ${txtcountry}</h3>`;
    const result = dataMovies.filterCountry(arrAlternativeMovies, Country);
    movieCard(result);
    //showMovie(result);
}
document.getElementById("btnMex").addEventListener("click", function() { selectCountry("Mexico") });
document.getElementById("btnUsa").addEventListener("click", function() { selectCountry("USA") });
document.getElementById("btnVen").addEventListener("click", function() { selectCountry("Venezuela") });
document.getElementById("btnFr").addEventListener("click", function() { selectCountry("France") });
document.getElementById("btnSpa").addEventListener("click", function() { selectCountry("Spain") });
document.getElementById("btnIt").addEventListener("click", function() { selectCountry("Italy") });
document.getElementById("btnChi").addEventListener("click", function() { selectCountry("China") });
document.getElementById("btnIndia").addEventListener("click", function() { selectCountry("India") });
//document.getElementById("btnJp").addEventListener("click", function() { selectCountry("Japan") });
document.getElementById("btnEgy").addEventListener("click", function() { selectCountry("Egypt") });
document.getElementById("btnSaf").addEventListener("click", function() { selectCountry("South Africa") });




   
