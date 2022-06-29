//Array of objects containing our questions
var questionArray= [
  question1= {
    prompt: "How early do you wake up?",
    happyAnswer: "6am! I love being up with the sun!",
    sadAnswer:"I don't want to move till after noon...",
    scaredAnswer:"Am I supposed to wake up at a specific time?!",
    inDifferentAnswer: "I don't care, as long as I don't miss food.",
  },
  question2= {
    prompt: "Which of these activities would you prefer?",
    happyAnswer: "Flower picking followed by a outdoor concert with drinks",
    sadAnswer:"Texting my ex, maybe stare out the window for a couple hours pondering life.",
    scaredAnswer:"Staying safe indoors, wearing a helmet and riding my bike.",
    inDifferentAnswer: "Wherever I end up, I'll go with it.",
  },
  question3= {
    prompt: "What genre of music would you listen to?",
    happyAnswer: "Pop Hits",
    sadAnswer:"Alternative or Indie Music",
    scaredAnswer:"Kidsbop",
    inDifferentAnswer: "I listen to anything and everything",
  },
  question4= {
    prompt: "Which show do you watch?",
    happyAnswer: "Wipeout",
    sadAnswer:"13 reasons why.",
    scaredAnswer:"The Wiggles",
    inDifferentAnswer: "Whatever comes on TV",
  },
  question5= {
    prompt: "Choose a color:",
    happyAnswer: "Yellow",
    sadAnswer:"Blue",
    scaredAnswer:"Grey",
    inDifferentAnswer: "The Rainbow",
  }
 
]




// Global Variable Definitions
var pageContent= document.querySelector("#page-content")
var startButton= document.querySelector("#start-quiz")
// Index that helps us move to next question in array
var questionIndex = 0;
// Object to hold the scores from the quiz
var sumOfScores = {
  happy: 0,
  sad: 0,
  scared: 0,
  indifferent:0
}


//function to create buttons
function createButtons(){
  //select our prompt to alter
  var prompt = document.querySelector("#prompt")
  prompt.textContent= questionArray[questionIndex].prompt;
   //For loop to print out our answers
   for (i=0;i<4;i++) {
    //create our button
    var buttonEl= document.createElement("button")
    // switch case to determine what type of answer we are printing.
    switch(i) {
      case 0:
        buttonEl.textContent= questionArray[questionIndex].happyAnswer
        buttonEl.id = "happy";
        break;
      case 1:
        buttonEl.textContent= questionArray[questionIndex].sadAnswer
        buttonEl.id = "sad";
        break;
      case 2:
        buttonEl.textContent= questionArray[questionIndex].scaredAnswer
        buttonEl.id = "scared";
        break;
      case 3:
        buttonEl.textContent= questionArray[questionIndex].inDifferentAnswer
        buttonEl.id = "indifferent";
        break;
      default:
        console.log("past our index scope")
    }
    // identify the parent ul element
    var parentEl= document.querySelector("#questions-list")
    // Create the list item to store the button
    var listEl= document.createElement("li")

    //append all our items
    listEl.appendChild(buttonEl)
    parentEl.appendChild(listEl)
   

  }
}

// Function to remove and re-add ul parent
function refreshUlParent() {
  //find the parent element
  var parentEl= document.querySelector("#questions-list");
  // delete it
  parentEl.remove();
  // find the section we want to append the new parent ul to
  var questionSectionEl = document.querySelector("#questions-section");
  // create ul
  var parentEl = document.createElement("ul");
  // set new id
  parentEl.id = "questions-list";
  //append the new ul to our question section
  questionSectionEl.appendChild(parentEl);
}

// Function to handle all of our quiz buttons
function quizButtonHandler(event) {
var targetEl= event.target

// if our target matches the start button
if (targetEl.matches("#start-quiz")) {
  //remove beginning elements
  startButton.remove()
  //create new buttons
  createButtons();
}
else if(targetEl.matches("#happy")){
  questionIndex++;
  // increase count of happy for final result
  sumOfScores.happy++;
  //remove and replace ul element
  refreshUlParent();
  //create new buttons
  createButtons();
  
}
else if(targetEl.matches("#sad")){
  questionIndex++;
  sumOfScores.sad++;
  
 //remove and replace ul element
 refreshUlParent();
 //create new buttons
 createButtons();
  
}
else if(targetEl.matches("#scared")){
  questionIndex++;
  sumOfScores.scared++;
  //remove and replace ul element
  refreshUlParent();
  //create new buttons
  createButtons();
  
}
else if(targetEl.matches("#indifferent")){
  questionIndex++;
  sumOfScores.indifferent++;
  //remove and replace ul element
  refreshUlParent();
  //create new buttons
  createButtons();
  
}
else {
  alert("This is not a button");
}

}


//Event listeners
pageContent.addEventListener("click",quizButtonHandler);
