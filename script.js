// Get all the download buttons
const downloadButtons = document.querySelectorAll('.download-btn');

// Add event listeners to each button
downloadButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Get the download link from the button's href attribute
        const downloadLink = button.getAttribute('href');

        // Redirect the user to the download link
        window.location.href = downloadLink; 
    });
});
