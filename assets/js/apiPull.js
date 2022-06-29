console.log(sumOfScores);
apiKey = "95278f49";
function getFilms(){
    var ombdUrl = "http://www.omdbapi.com/?apikey="+ apiKey +"&t=Die+Hard"

    fetch(ombdUrl)
        .then(function(response){
            if(response.ok){
                response.json()
                    .then(function(data){
                        console.log(data);
                    })
            }
        })

}
function getDrink(){
    var cocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Wine"

    fetch(cocktailUrl)
        .then(function(response){
            if(response.ok){
                response.json()
                    .then(function(data){
                        console.log(data);
                    })
            }
        })

}
getFilms();
getDrink();