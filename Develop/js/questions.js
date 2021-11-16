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
// document.getElementById("start-btn").onclick = function show() {
//     const secondPage = document.getElementById(two);
//     if (!two) {
//         alert ("No such page.")
//         return;
//     }
// }  
// const pages = document.getElementsByClassName("page");
//   for (let i = 0; i < pages.length; i++) {
//     pages[i].style.display = "none";
//   }

// two.style.display = "block";