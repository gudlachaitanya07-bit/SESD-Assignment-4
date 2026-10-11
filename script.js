
const helloButton = document.getElementById("helloButton");
const message = document.getElementById("message");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

helloButton.addEventListener("click", function () {
    message.textContent =
        "Hello! Thank you for visiting my portfolio.";
});