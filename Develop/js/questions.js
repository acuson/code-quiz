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

//Clicking any button from page 2 to move to page 3

//First button
var question1 = document.getElementsByClassName("question-1")[0];
question1.addEventListener("click", function show() {
  const pages3 = document.getElementsByClassName("page");
  for (let i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";
three.style.display = "block"}});

//Second button
var question1 = document.getElementsByClassName("question-1")[1];
question1.addEventListener("click", function show() {
  const pages3 = document.getElementsByClassName("page");
  for (let i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";
three.style.display = "block"}});

//Third button
var question1 = document.getElementsByClassName("question-1")[2];
question1.addEventListener("click", function show() {
  const pages3 = document.getElementsByClassName("page");
  for (let i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";
three.style.display = "block"}});

//Fourth button
var question1 = document.getElementsByClassName("question-1")[3];
question1.addEventListener("click", function show() {
  const pages3 = document.getElementsByClassName("page");
  for (let i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";
three.style.display = "block"}});

//Clicking any button from page 3 to move to page 4