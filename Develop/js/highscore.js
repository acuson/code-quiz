// Using event listener for the user to return to initial code quiz page once the Go Back button is clicked

document.getElementById("go-back").addEventListener("click", function show() {
    const pages = document.getElementsByClassName("page");
    for (let i = 0; i < pages.length; i++) {
      pages[i].style.display = "none";
  one.style.display = "block"}});