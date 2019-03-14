//elena key 691df107

window.movies = {

    randomImageMovie: function(movies){ //peliculas debe ser un array
        
        const recomendedMovies= movies.length;
        let aleatorio=Math.round(Math.random()*(recomendedMovies-1));
        let randomMovies = movies[aleatorio];
        return randomMovies;
    }


}

const genre = ["Drama", "Action", "Crime", "Thriller", "Romance", "Adventure", "Fantasy", "Sci-Fi"];
//work in progress
function filterGenre(data, genre){
	const filterMovies = [];
	for(let i = 0; i < data.length; i++){
			//for(let j = 0; j < data[i].Genre.length; j++){
			if(data[i].Genre.search(genre) > -1){
				console.log(data[i]);
				filterMovies.push(data[i]);
			}	
				
			//}
	}
return filterMovies;
}


