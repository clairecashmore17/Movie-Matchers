//Global Variables
var highestNum = 0;
var topMatch = "";
var tieMatch;
var matchedGenre;
var matchedDrinkLink;
var movieFinal;
var currentMovie;
var currentDrink;
var combo = {
    movie: null,
    drink: null 
}

// movies that fit the genre
var happyMovies = [
    "Deadpool",
    "21 Jump Street",
    "BridesMaids",
    "Pineapple Express",
    "Jumanji The Next Level",
    "Shazam!",
    "Django",
    "Let's Be Cops",
    "Baby Driver",
    "Deadpool 2",
    "Mean Girls",
    "Zoolander",
    "Wedding Crashers",
    "Men In Black",
    "Kingsman The Secrete Service"
]
var sadMovies = [
    
    "Five Feet Apart",
    "Lion",
    "Titanic",
    "The Notebook",
    "Good Will Hunting",
    "The Fault In Our Stars",
    "The Last Song",
    "Seven Pounds",
    "Charlie St. Cloud",
    "Room",
    "Remember Me",
    "The Boy in the Striped Pajamas"
];
var pgMovies = [
    "Moana",
    "Aladdin",
    "Hotel Transylvania",
    "Kung Fu Panda",
    "The Aristocats",
    "Tangled",
    "Charlie and the Chocolate Factory",
    "Shark Tale",
    "The Greatest Showman",
    "Lorax",
    "How To Train Your Dragon",
    "Shrek",
    "Coco",
    "Puss in Boots",
    "Scooby-Doo"
]
var randomMovies = [
    "The Shawshank Redemption",
    "The Dark Knight",
    "Pulp Fiction",
    "Fight Club",
    "Inception",
    "The Matrix",
    "Terminator 2: Judgment Day",
    "Parasite",
    "Casa blanca",
    "Rear Window",
    "The Dark Knight Rises",
    "Avengers: Endgame",
    "Die Hard",
    "Hereditary",
    "Midsommar"

]
var resultsSectionEl = document.querySelector("#results-text");



// function to generate a random numeric value
function randomNumber(min, max) {
    var value = Math.floor(Math.random() * (max - min) + min);

    return value;
};

//Function to find top match
function findTopMatches(){
    // Find which category scored the most points
    if(highestNum < sumOfScores.happy){
        //if happy is our highest number, set ne highNum to compare
        highestNum = sumOfScores.happy;
        //Set the users match to happy
        topMatch = "happy";
        // match the user with a genre
        matchedGenre = happyMovies;
        // match the drink with a link for the user
        matchedDrinkLink = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka"; 
        //console log to keep track of our high num and match
         console.log("our new highNum is "  + highestNum + " and it was for category " + topMatch);
    }
    if(highestNum < sumOfScores.sad){
        highestNum = sumOfScores.sad;
        //Set the users match to sad
        topMatch = "sad";
        // match the user with a genre
        matchedGenre = sadMovies;
        // match the drink with a link for the user
        matchedDrinkLink = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Wine";
        //console log to keep track of our high num and match
        console.log("our new highNum is "  + highestNum + "and it was for category " + topMatch);
    }
    if(highestNum < sumOfScores.scared){
        highestNum = sumOfScores.scared;
        //Set the users match to scared
        topMatch = "scared";
        // match the user with a genre
        matchedGenre = pgMovies;
        // match the drink with a link for the user
        matchedDrinkLink = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";
        // console log to keep track of high num and match
        console.log("our new highNum is "  + highestNum + "and it was for category " + topMatch);
    }
    if(highestNum < sumOfScores.indifferent){
        highestNum = sumOfScores.indifferent;
        //Set the users match to indifferent
        topMatch = "indifferent";
        // match the user with a genre
        matchedGenre = randomMovies;
        // match the drink with a link for the user
        matchedDrinkLink = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

        //console log to keep track of our high num and match
        console.log("our new highNum is "  + highestNum + "and it was for category " + topMatch);
    }
// ************** HAVE NOT ADDED SECOND SECTION FOR TIE YET ********/
    //check for ties
    if(topMatch != "happy" && highestNum == sumOfScores.happy){
        tieMatch = "happy";
        console.log("we have a match! Your tie is " + tieMatch);
    }
    if(topMatch != "sad" && highestNum == sumOfScores.sad){
        tieMatch = "sad";
        console.log("we have a match! Your tie is " + tieMatch);
    }
    if(topMatch != "scared" && highestNum == sumOfScores.scared){
        tieMatch = "scared";
        console.log("we have a match! Your tie is " + tieMatch);
    }
    if(topMatch != "indifferent" && highestNum == sumOfScores.indifferent){
        tieMatch = "indifferent";
        console.log("we have a match! Your tie is " + tieMatch);
    }
    return topMatch;

}

//Function to locate the random movie from our 
function findMovie(){
findTopMatches();

    //Evaluating our results
    switch (topMatch) {
        case "happy":
            // create a random index to pull from array of movies
            var randomMovieIndex = randomNumber(0, happyMovies.length-1);
            //split the title by spaces
            var movieTitleSplit = happyMovies[randomMovieIndex].split(" ");
            // join the separated arrays from the split with a plus
            movieFinal = movieTitleSplit.join('+');
            break;
        case "sad":
            // create a random index to pull from array of movies
            var randomMovieIndex = randomNumber(0, sadMovies.length-1);
            //split the title by spaces
            var movieTitleSplit = sadMovies[randomMovieIndex].split(" ");
            // join the separated arrays from the split with a plus
            movieFinal = movieTitleSplit.join('+');
            break;
        case "scared":
            // create a random index to pull from array of movies
            var randomMovieIndex = randomNumber(0, pgMovies.length-1);
            console.log(randomMovieIndex);
            //split the title by spaces
            var movieTitleSplit = pgMovies[randomMovieIndex].split(" ");
            // join the separated arrays from the split with a plus
            movieFinal = movieTitleSplit.join('+');
            break;
        case "indifferent":
            // create a random index to pull from array of movies
            console.log("In indifferent case statement")
            var randomMovieIndex = randomNumber(0, randomMovies.length-1);
            
            //split the title by spaces
            var movieTitleSplit = randomMovies[randomMovieIndex].split(" ");
            // join the separated arrays from the split with a plus
            movieFinal = movieTitleSplit.join('+');
            break;
    }
    console.log("Took movie from: " + randomMovieIndex)
    //Now with our title and our drink URL, get our film and drink
    getFilms();
    getDrink(matchedDrinkLink, topMatch);
}
console.log(movieFinal);


//Function to get the desired film based off its title
function getFilms(){
var apiKey = "95278f49";
 var ombdUrl = "http://www.omdbapi.com/?apikey="+ apiKey +"&t=" + movieFinal;
    fetch(ombdUrl)
        .then(function(response){
            if(response.ok){
                response.json()
                    .then(function(data){
                        //set the current movie equal to the data
                        currentMovie = data;
                        combo.movie = data;
                    })
            }
        })

}

// Function to display all our data onto the page
function printToScreen(drink){
    console.log(drink);
    currentDrink = drink;
    combo.drink = drink;
    // Find the section to store all the pieces
    var resultsTextEl = document.querySelector("#results-text");
    //create an h2 element for the quiz result
    var resultTitle = document.createElement("h2");
    resultTitle.classList = "title text-movie";
    resultTitle.textContent = "You got the " + topMatch + " category!";
    
    //Create and excerpt explaining their result
    var resultExcerptEl = document.createElement("p");
    resultExcerptEl.classList = "text-movie movie-red-back rounded m-3 p-1 has-text-centered";
    //Excerpts for all the different results
    if(topMatch === "happy"){
        resultExcerptEl.textContent = "You enjoy being on your toes and ready for the day! Uplifting and exciting content really speaks to you. See what movie and drink combo you should enjoy below!";
    }
    else if(topMatch === "sad"){
        resultExcerptEl.textContent = "You tend to ponder things quite often. Deep thinking and getting lost in emotion ad empathy describe your perfect friday night. See what movie and drink combo you should enjoy below!";
    }
    else if(topMatch === "scared"){
        resultExcerptEl.textContent = "You love to take the safe, clear path. No risks, just an easy road to the finish. PG movies seem to be the best fit for you, and maybe we can stick to the Non-Alcoholic beverages... See what movie and drink combo you should enjoy below!";
    }
    else if( topMatch === "indifferent"){
        resultExcerptEl.textContent = "You don't seem to really care about this quiz, let alone what type of movies you want. You always just go with the flow and hope to get something out of it. Whatever results you want, as long as it's given to you. If you want to see your results, just look below I guess.."
    }
   
    //Append this section to the result section.
    resultsTextEl.appendChild(resultTitle);
    resultsTextEl.appendChild(resultExcerptEl);

    // Save this combo!
    var saveComboBtn = document.createElement("button");
    saveComboBtn.textContent = "Add To Favorites!";
    saveComboBtn.id ="add-to-fav";
    saveComboBtn.classList = "btnSpecial text-movie-red has-gold-background";
    resultsTextEl.appendChild(saveComboBtn);

    // Create the sections and divs needed to project the movie and drink combo and append them to the UL and section
    var ulResultSectionEl = document.querySelector("#results");
    var listMovieItemEl = document.createElement("li");
    var movieBlockSection = document.createElement("div");
    var listDrinkItemEl = document.createElement("li");
    var drinkBlockSection = document.createElement("div");
    generateMovieEls(movieBlockSection);
    generateDrinkEls(drinkBlockSection, drink);
    listMovieItemEl.appendChild(movieBlockSection);
    listDrinkItemEl.appendChild(drinkBlockSection);
    ulResultSectionEl.appendChild(listMovieItemEl);
    ulResultSectionEl.appendChild(listDrinkItemEl);
    


}
// function to generate movie elements
function generateMovieEls(movieBlockSection){

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
    moviePoster.className = "column is-half";
    moviePoster.src = currentMovie.Poster;
    movieTitle.textContent = currentMovie.Title + "(" + currentMovie.Year + ")";
    movieTitle.classList = "text-movie title";
    moviePlot.textContent = currentMovie.Plot;
    moviePlot.classList = "text-movie is-size-6";
    //append to the movie div
    movieInfoDiv.appendChild(movieTitle);
    movieInfoDiv.appendChild(moviePlot);

    //append the poster and the movie info
    movieBlockSection.appendChild(moviePoster);
    movieBlockSection.appendChild(movieInfoDiv);
}

// Function to generate the paired drink
function generateDrinkEls(drinkBlockSection,drink){
    // console.log(drink.drinks[0]);
    //make the section just like the movie display
    drinkBlockSection.classList = "columns"
    //drink image
    var drinkImg = document.createElement("img");
    drinkImg.classList = "column is-half"
    drinkImg.src = drink.drinks[0].strDrinkThumb;

    //create the drink title and ingredient/instruction element
    var drinkInfoDiv = document.createElement("div");
    drinkInfoDiv.classList = "column";
    
    // name and ingredient/instructions
    var drinkName = document.createElement("h2");
    var drinkInstructions = document.createElement("p");
    drinkName.classList = "title has-text-primary-light";
    drinkName.textContent = drink.drinks[0].strDrink;

    drinkInstructions.classList = "is-size-6 has-text-primary-light";
    drinkInstructions.textContent ="Ingredients: " + drink.drinks[0].strIngredient1 + "," + drink.drinks[0].strIngredient2 + "," + drink.drinks[0].strIngredient3 + ".    " +  drink.drinks[0].strInstructions;

    //append to the info div
    drinkInfoDiv.appendChild(drinkName);
    drinkInfoDiv.appendChild(drinkInstructions);

    //append to the drink section
    drinkBlockSection.appendChild(drinkImg);
    drinkBlockSection.appendChild(drinkInfoDiv);

}

//With recently fetched id, find the drink information
function fetchDrinkById(drinkId){
    console.log("in fetch drink function");
    var cocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkId;
    fetch(cocktailUrl)
    .then(function(response){
        if(response.ok){
            response.json()
                .then(function(data){
                    // console.log( data);
                    printToScreen(data);
                    
                })
        }
    })
}

//with the URL, pick a random drink and get it's ID
function getDrinkData(drink){
    console.log("in getDrinkData function")
    if(topMatch != "indifferent"){
        console.log("in happy sad if statement")
        var randomIndex = randomNumber(0, drink.drinks.length - 1);
        var chosenDrink = drink.drinks[randomIndex];
        console.log(chosenDrink);

        fetchDrinkById(chosenDrink.idDrink);

        

    }
    else if(topMatch === "indifferent"){
        printToScreen(drink);
    }

}
//function to fetch the requested drink/drinks based off the provided user drink match url
function getDrink(cocktailUrl){
    

    fetch(cocktailUrl)
        .then(function(response){
            if(response.ok){
                response.json()
                    .then(function(data){
                        console.log(data);
                        getDrinkData(data);
                    })
            }
        })

}
//Add our new score object to the local storage
function addToStorage(){
    var newAddition = JSON.parse(localStorage.getItem("combo"));

    newAddition.push(combo);
    localStorage.setItem("combo", JSON.stringify(newAddition));
}
//Function to save score to localStorage
function saveCombo() {
    var currentCombo = JSON.parse(localStorage.getItem("combo"));
    // if the score is null, add to the storage
    if (currentCombo === null) {  
        localStorage.setItem("combo", JSON.stringify([combo]));
    }
    //if we already have scores, store this new score with them
    else {
       addToStorage();
    }

};
// Function to deal with the save button
function saveButtonHandler(event){
    targetEl = event.target;
    if(targetEl.matches("#add-to-fav")){
        console.log("clicked save button!");
        var saveButton = document.querySelector("#add-to-fav");
        saveButton.textContent = "Saved!";
        // saveButton.setAttribute(disabled);
        saveButton.classList = "has-background-success has-text-black rounded";
        saveCombo();
    }
}

//Event listener
resultsSectionEl.addEventListener("click", saveButtonHandler);

