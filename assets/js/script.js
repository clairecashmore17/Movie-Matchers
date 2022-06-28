var questionArray= [
  question1= {
    prompt: "How early do you wake up?",
    happyAnswer: "6am",
    sadAnswer:"11am",
    angryAnswer:"Dont Ask me that question!",
    inDifferentAnswer: "I don't care",


  }
]
var pageContent= document.querySelector("#page-content")
var startButton= document.querySelector("#start-quiz")
var startExcerpt= document.querySelector("#startExcerpt")
var resultText= document.querySelector("#result-text")
var quizButtonHandler= function (event) {
var targetEl= event.target

if (targetEl.matches("#start-quiz")) {
  startButton.remove()
  startExcerpt.remove()
  resultText.remove()
  var prompt= document.querySelector("#prompt")
  prompt.textContent= questionArray[0].prompt;

  for (i=0;i<4;i++) {
    var buttonEl= document.createElement("button")
    switch(i) {
      case 0:
        buttonEl.textContent= questionArray[0].happyAnswer
        break;
      case 1:
        buttonEl.textContent= questionArray[0].sadAnswer
        break;
      case 2:
        buttonEl.textContent= questionArray[0].angryAnswer
        break;
      case 3:
        buttonEl.textContent= questionArray[0].inDifferentAnswer
        break;
      default:
        console.log("questions not working")


    }
    var parentEl= document.querySelector("#questions-list")
    var listEl= document.createElement("li")
    listEl.appendChild(buttonEl)
    parentEl.appendChild(listEl)


  }



}



  console.log("you clicked on the page")
}



pageContent.addEventListener("click",quizButtonHandler);
