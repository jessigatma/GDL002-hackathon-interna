window.movies = {


    randomImageMovie: function(arrDrama) { //peliculas debe ser un array

        const recomendedMovies = arrDrama.length;
        let aleatorio = Math.round(Math.random() * (recomendedMovies - 1));
        let randomMovies = arrDrama[aleatorio];
        return randomMovies;
    }
}