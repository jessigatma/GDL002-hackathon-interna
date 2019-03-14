<<<<<<< HEAD
window.movies1 = {

=======
>>>>>>> b678a1f8f966b1544e39c8b09989a1be2a059e0c

window.dataMovies = {
      
        randomImageMovie: function(movies) { //peliculas debe ser un array

            const recomendedMovies = movies.length;
            let aleatorio = Math.round(Math.random() * (recomendedMovies - 1));
            let randomMovies = movies[aleatorio];
            return randomMovies;
        },

        filterCountry: function(data, country){
        //data recibe un array de objetos
        //genre recibe un string
        const filterMovies = [];
        for(let i = 0; i < data.length; i++){
                if(data[i].Country.search(country) > -1){
                    filterMovies.push(data[i]);
                }   
                    
              }
        return filterMovies;

            }
    }

/*
//const genre = ["Drama", "Action", "Crime", "Thriller", "Romance", "Adventure", "Fantasy", "Sci-Fi"];
//work in progress
function filterKey(data, findKey){
	const filterMovies = [];
	for(let i = 0; i < data.length; i++){
			//for(let j = 0; j < data[i].Genre.length; j++){
			if(data[i].Genre.search(findKey) > -1){
				console.log(data[i]);
				filterMovies.push(data[i]);
			}	
				
			//}
	}
return filterMovies;
}
*/
