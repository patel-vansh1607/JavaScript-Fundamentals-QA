//How can you prevent a form from submitting when a user clicks a submit button?


const form = document.getElementById("formSub");

form.addEventListener("submit", function(event) {
    event.preventDefault();  
    console.log("Form submission prevented!");
});