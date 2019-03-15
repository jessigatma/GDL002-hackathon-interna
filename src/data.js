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


