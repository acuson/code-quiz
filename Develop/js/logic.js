// variables to keep track of quiz state


// variables to reference DOM elements


//function to get the quiz going 

//function to pull each question
    //current question from questions
    //updated DOM elements to reflect the new question
    //clear old question choices
    //loop over answer choices (TIP: ForEach ;) ) 
    //create new button for each choice
    //event listener for each choice
    //display on the page

//function for the questionclick 
// var question1 = document.getElementsByClassName("question-1");
// addQuestionListener (question1, correctAnswer, wrongAnswer)

// var question2 = document.getElementsByClassName("question-2");
// addQuestionListener (question2, correctAnswer, wrongAnswer)

// var question3 = document.getElementsByClassName("question-3");
// addQuestionListener (question3, correctAnswer, wrongAnswer)

// var question4 = document.getElementsByClassName("question-4");
// addQuestionListener (question4, correctAnswer, wrongAnswer)

// var question5 = document.getElementsByClassName("question-5");
// addQuestionListener (question5, correctAnswer, wrongAnswer)

// var correctAnswer = document.getElementsByClassName("correct");
// // for (var i = 0; i < correctAnswer.length; i++){}
// // questionClick(correctAnswer, wrongAnswer);

// var wrongAnswer = document.getElementsByClassName("wrong");
// // for (var i = 0; i < wrongAnswer.length; i++){}
// // questionClick(correctAnswer, wrongAnswer);

// function addQuestionListener (question1, correctAnswer, wrongAnswer) {
//   for (let i = 0; i < 4; i++) {
//     let question = question1[i];
//     question.addEventListener("click", questionClick(correctAnswer, wrongAnswer))}};

// function questionClick (correctAnswer, wrongAnswer) {
//   document.addEventListener("click", function() {
//     if (correctAnswer === true) {
//       alert("Correct!");
//     } 
//     if (wrongAnswer === true) {
//       alert("Incorrect!");
//     }
//   });
// }
  //did the user guess right or wrong
  //wrong guess decreases time
  //display new time on the page
  //move to the next question
  //check if there are any questions left/you've run out

//function to end the quiz

// Timer Function
var timerEl = document.querySelector(".timer");
var startEl = document.getElementById("start-btn").addEventListener("click",countdown);

function countdown() {
  var timeLeft = 60;

var timeInterval = setInterval(function() {
  timeLeft--;
  timerEl.textContent = "Time: " + timeLeft;
  console.log("Timer ID: " + timeInterval)
  if (timeLeft === 0) {
    clearInterval(timeInterval);
    sendMessage();
      }
    }, 1000);
  }

function sendMessage () {
  alert("Time's up!");
}



  //stops timer
  //shows end screen
//   function timerEnd () {
//     alert("Time's up!");
//     for (let i = 0; i < pages.length; i++) {
//       pages[i].style.display = "none";
//       eight.style.display = "block"};
//   }
//   //shows final score
//   //hides questions section

//  //function for the clock 
//  function timerFunction () {
//   setTimeout(timerEnd, 60000)
//  };
  //updates time
  
  //checks if user ran out of time 

//function to save the high score
  //get value of input box
  //make sure value isnt empty
  //get saved scores from localstorage, or if not any, set to empty array
  //format new score object for current user 
  //save to localstorage
  //redirect to next page




// user clicks button to submit initials


// user clicks button to start quiz
