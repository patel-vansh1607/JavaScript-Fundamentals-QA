//What does the addEventListener method do? Write an example.

//It attaches an event that can be added to a button for interactive elements

const button = document.getElementById("btn2");

button.addEventListener("click", () => {
    alert("Button was clicked!");
});