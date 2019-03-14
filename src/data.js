//elena key 691df107

window.movies = {
        showMovie: function(arrMovies) {
            arrMovies.forEach(element => {
                console.log(element[0])
            });
        },

        randomImageMovie: function(movies) { //peliculas debe ser un array

            const recomendedMovies = movies.length;
            let aleatorio = Math.round(Math.random() * (recomendedMovies - 1));
            let randomMovies = movies[aleatorio];
            return randomMovies;
        }

    }
    //work in progress
function filterGenre(data) {
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].Genre.length; i++) {
            data[i].Genre

        }

    }
}