// if the score is empty, tell user there are not scores to place
var currentCombo = JSON.parse(localStorage.getItem("combo"));
var noFavSectionEl = document.querySelector("#no-fav");
if (currentCombo === null) {
    console.log("There are no combos yet");
    var noFavLineEl = document.createElement("p");
   
    noFavLineEl.textContent = "No favorites saved yet, go and take the quiz!";
    noFavLineEl.classList = "text-movie movie-red-back rounded m-3 p-1 has-text-centered";
    noFavSectionEl.appendChild(noFavLineEl);

}
//otherwise if you have scores,print them out
else {
    for (i = 0; i < currentCombo.length; i++) {
        noFavSectionEl.remove();
        var movie = currentCombo[i].movie;
        var drink = currentCombo[i].drink.drinks[0];
        var ulComboSectionEl = document.querySelector("#combos");
        var ulBlockCreate = document.createElement("div");
        ulBlockCreate.classList = "columns m-4 border";
        var movieColumn = document.createElement("div");
        var drinkColumn = document.createElement("div");
        movieColumn.classList = "column";
        drinkColumn.classList = "column"
        
        var movieBlockSection = document.createElement("div");
        
        var drinkBlockSection = document.createElement("div");


        //MOVIES UL
        console.log(currentCombo);
            // Create the contents of our movie li element
        movieBlockSection.classList = "columns";
        // movie poster
        var moviePoster = document.createElement("img");
        //div to hold our movie title and plot
        var movieInfoDiv = document.createElement("div");
        movieInfoDiv.classList = "column is-outlined";
        //title and plot elements
        var movieTitle = document.createElement("h2");
        var moviePlot = document.createElement("p");
        moviePoster.className = "column is-one-fifth";
        moviePoster.src = movie.Poster;
        movieTitle.textContent = movie.Title + "(" + movie.Year + ")";
        movieTitle.classList = "text-movie title";
        moviePlot.textContent = movie.Plot;
        moviePlot.classList = "text-movie is-size-6";
        //append to the movie div
        movieInfoDiv.appendChild(movieTitle);
        movieInfoDiv.appendChild(moviePlot);

        //append the poster and the movie info
        movieBlockSection.appendChild(moviePoster);
        movieBlockSection.appendChild(movieInfoDiv);
        
        ulBlockCreate.appendChild(movieBlockSection);
        ulBlockCreate.appendChild(drinkBlockSection);
        ulComboSectionEl.appendChild(ulBlockCreate);
        

        //DRINKS UL
        drinkBlockSection.classList = "columns"
        //drink image
        var drinkImg = document.createElement("img");
        drinkImg.classList = "column is-one-fifth"
        drinkImg.src = drink.strDrinkThumb;

        //create the drink title and ingredient/instruction element
        var drinkInfoDiv = document.createElement("div");
        drinkInfoDiv.classList = "column";
        
        // name and ingredient/instructions
        var drinkName = document.createElement("h2");
        var drinkInstructions = document.createElement("p");
        drinkName.classList = "title has-text-primary-light";
        drinkName.textContent = drink.strDrink;

        drinkInstructions.classList = "is-size-6 has-text-primary-light";
        drinkInstructions.textContent ="Ingredients: " + drink.strIngredient1 + "," + drink.strIngredient2 + "," + drink.strIngredient3 + ".    " +  drink.strInstructions;

        //append to the info div
        drinkInfoDiv.appendChild(drinkName);
        drinkInfoDiv.appendChild(drinkInstructions);

        //append to the drink section
        drinkBlockSection.appendChild(drinkImg);
        drinkBlockSection.appendChild(drinkInfoDiv);
        
    }
    
}

