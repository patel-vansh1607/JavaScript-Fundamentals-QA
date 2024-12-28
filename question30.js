//Write a script to toggle the visibility of a paragraph when a button is clicked

<script>
        const paragraph = document.getElementById("myParagraph");
        const button = document.getElementById("toggleButton");

        // Add an event listener to the button
        button.addEventListener("click", function() {

            if (paragraph.style.display === "none") {
                paragraph.style.display = "block"; 
            } else {
                paragraph.style.display = "none"; 
            }
        });
</script>