<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"> 
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Update button text
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Dark Mode: ON';
    } else {
        darkModeToggle.textContent = 'Dark Mode: OFF';
    }
});
