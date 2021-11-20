//Function to only show the first page of the coding quiz

function show(one) {
    const firstPage = document.getElementById(one);
    if (!one) {
        alert("No such page.");
        return;
    }
}
const pages = document.getElementsByClassName("page");
  for (let i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";
  }
  one.style.display = "block";

//Clicking start quiz button to move to page 2
document.getElementById("start-btn").addEventListener("click", function show() {
  const pages2 = document.getElementsByClassName("page");
  for (let i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";
two.style.display = "block"}});

//Variables for addQuestionListener function

var question1 = document.getElementsByClassName("question-1");
// var pageNumber3 = three.style.display;
addQuestionListener(question1, three);

//Clicking any button from page 3 to move to page 4
var question2 = document.getElementsByClassName("question-2");
// var pageNumber4 = four.style.display;
addQuestionListener(question2, four);

var question3 = document.getElementsByClassName("question-3");
// var pageNumber5 = five.style.display;
addQuestionListener(question3, five);

var question4 = document.getElementsByClassName("question-4");
addQuestionListener(question4, six);

var question5 = document.getElementsByClassName("question-5");
addQuestionListener(question5, seven);

// var allDone = document.getElementsByClassName("submit");
// addQuestionListener(submit, eight);

//Function that displays pages based on classes

function addQuestionListener(question2, pageElement) {
  for (let i = 0; i < 4; i++) {
    let question = question2[i];
    question.addEventListener("click", function show() {
    const pages4 = document.getElementsByClassName("page");
    for (let i = 0; i < pages.length; i++) {
      pages[i].style.display = "none";
      pageElement.style.display = "block"}});
    }
}

// User redirects to high score page after submitting form

document.getElementById("form").onsubmit = function () {submitForm()}

function submitForm (){
    for (let i = 0; i < pages.length; i++) {
      pages[i].style.display = "none";
      eight.style.display = "block"};
}