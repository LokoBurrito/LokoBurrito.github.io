const themeSwitcher = document.getElementById('themeSwitcher');
const modeStatus = document.getElementById('modeStatus');

themeSwitcher.addEventListener('change', function() {
    document.body.classList.toggle('dark-theme');
    modeStatus.textContent = document.body.classList.contains('dark-theme') ? 'ON' : 'OFF'; 
});
