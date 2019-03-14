window.movies = {

    randomImageMovie: function(movies) { //peliculas debe ser un array

        const recomendedMovies = movies.length;
        let aleatorio = Math.round(Math.random() * (recomendedMovies - 1));
        let randomMovies = movies[aleatorio];
        return randomMovies;
    },

}


