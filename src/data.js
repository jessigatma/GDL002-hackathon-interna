window.dataMovies = {
      
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
